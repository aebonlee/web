import { createContext, useContext, useState, useEffect, useCallback, useRef, type ReactNode } from 'react';
import { useAuth } from './AuthContext';
import { supabase } from '../lib/supabase';

interface ProgressContextValue {
  completedProblems: string[];
  toggleProblem: (problemId: string) => void;
  isCompleted: (problemId: string) => boolean;
  getCompletedCount: (problemIds?: string[]) => number;
  resetProgress: () => void;
  syncing: boolean;
}

const ProgressContext = createContext<ProgressContextValue | null>(null);

const STORAGE_KEY = 'web-progress';

function loadLocal(): string[] {
  try {
    const saved = localStorage.getItem(STORAGE_KEY);
    return saved ? JSON.parse(saved) : [];
  } catch {
    return [];
  }
}

function saveLocal(problems: string[]) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(problems));
}

export function ProgressProvider({ children }: { children: ReactNode }) {
  const { user, isLoggedIn } = useAuth();
  const [completedProblems, setCompletedProblems] = useState<string[]>(loadLocal);
  const [syncing, setSyncing] = useState(false);
  const hasMerged = useRef(false);

  useEffect(() => {
    saveLocal(completedProblems);
  }, [completedProblems]);

  useEffect(() => {
    if (!isLoggedIn || !supabase || hasMerged.current) return;

    async function mergeProgress() {
      setSyncing(true);
      try {
        const { data: cloudRows } = await supabase!
          .from('web_user_progress')
          .select('problem_id')
          .eq('user_id', user!.id);

        const cloudIds = (cloudRows || []).map((r: { problem_id: string }) => r.problem_id);
        const localIds = loadLocal();
        const merged = [...new Set([...localIds, ...cloudIds])];

        const toUpload = merged.filter(id => !cloudIds.includes(id));
        if (toUpload.length > 0) {
          await supabase!.from('web_user_progress').upsert(
            toUpload.map(id => ({
              user_id: user!.id,
              problem_id: id,
              completed_at: new Date().toISOString()
            }))
          );
        }

        setCompletedProblems(merged);
        saveLocal(merged);
        hasMerged.current = true;
      } catch (err) {
        console.warn('Progress merge failed:', err);
      } finally {
        setSyncing(false);
      }
    }

    mergeProgress();
  }, [isLoggedIn, user]);

  useEffect(() => {
    if (!isLoggedIn) {
      hasMerged.current = false;
    }
  }, [isLoggedIn]);

  const toggleProblem = useCallback((problemId: string) => {
    setCompletedProblems(prev => {
      const isRemoving = prev.includes(problemId);
      const next = isRemoving
        ? prev.filter(id => id !== problemId)
        : [...prev, problemId];

      if (supabase && isLoggedIn && user) {
        if (isRemoving) {
          supabase
            .from('web_user_progress')
            .delete()
            .eq('user_id', user.id)
            .eq('problem_id', problemId)
            .then();
        } else {
          supabase
            .from('web_user_progress')
            .upsert({
              user_id: user.id,
              problem_id: problemId,
              completed_at: new Date().toISOString()
            })
            .then();
        }
      }

      return next;
    });
  }, [isLoggedIn, user]);

  const isCompleted = useCallback((problemId: string) => {
    return completedProblems.includes(problemId);
  }, [completedProblems]);

  const getCompletedCount = useCallback((problemIds?: string[]) => {
    if (!problemIds) return completedProblems.length;
    return problemIds.filter(id => completedProblems.includes(id)).length;
  }, [completedProblems]);

  const resetProgress = useCallback(() => {
    setCompletedProblems([]);
    if (supabase && isLoggedIn && user) {
      supabase
        .from('web_user_progress')
        .delete()
        .eq('user_id', user.id)
        .then();
    }
  }, [isLoggedIn, user]);

  return (
    <ProgressContext.Provider value={{
      completedProblems,
      toggleProblem,
      isCompleted,
      getCompletedCount,
      resetProgress,
      syncing
    }}>
      {children}
    </ProgressContext.Provider>
  );
}

export function useProgress(): ProgressContextValue {
  const ctx = useContext(ProgressContext);
  if (!ctx) throw new Error('useProgress must be used within ProgressProvider');
  return ctx;
}
