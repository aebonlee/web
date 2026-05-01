import { useState, useCallback } from 'react';

export function useCodeCopy() {
  const [copiedId, setCopiedId] = useState<string | null>(null);

  const copyCode = useCallback(async (code: string, id?: string) => {
    try {
      await navigator.clipboard.writeText(code);
    } catch {
      const ta = document.createElement('textarea');
      ta.value = code;
      ta.style.position = 'fixed';
      ta.style.opacity = '0';
      document.body.appendChild(ta);
      ta.select();
      document.execCommand('copy');
      document.body.removeChild(ta);
    }
    setCopiedId(id ?? 'copied');
    setTimeout(() => setCopiedId(null), 2000);
  }, []);

  return { copiedId, copyCode };
}
