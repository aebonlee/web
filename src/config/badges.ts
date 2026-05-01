export interface Badge {
  id: string;
  name: string;
  nameKo: string;
  description: string;
  descriptionKo: string;
  icon: string;
  condition: (completed: string[]) => boolean;
}

/** Helper: generate problem IDs for a category (e.g. "beginner-p01" .. "beginner-p10") */
function categoryIds(prefix: string, count = 10): string[] {
  return Array.from({ length: count }, (_, i) => `${prefix}-p${String(i + 1).padStart(2, '0')}`);
}

const BEGINNER_IDS = categoryIds('beginner');
const INTERMEDIATE_IDS = categoryIds('intermediate');
const ADVANCED_IDS = categoryIds('advanced');
const PRACTICAL_IDS = categoryIds('practical');

const BADGES: Badge[] = [
  // ── Category Masters (4) ──
  {
    id: 'beginner-master',
    name: 'Beginner Master',
    nameKo: '입문 마스터',
    description: 'Complete all 10 beginner problems',
    descriptionKo: '입문 문제 10개를 모두 완료하세요',
    icon: 'star',
    condition: (completed) => BEGINNER_IDS.every(id => completed.includes(id)),
  },
  {
    id: 'intermediate-master',
    name: 'Intermediate Master',
    nameKo: '중급 마스터',
    description: 'Complete all 10 intermediate problems',
    descriptionKo: '중급 문제 10개를 모두 완료하세요',
    icon: 'zap',
    condition: (completed) => INTERMEDIATE_IDS.every(id => completed.includes(id)),
  },
  {
    id: 'advanced-master',
    name: 'Advanced Master',
    nameKo: '고급 마스터',
    description: 'Complete all 10 advanced problems',
    descriptionKo: '고급 문제 10개를 모두 완료하세요',
    icon: 'flame',
    condition: (completed) => ADVANCED_IDS.every(id => completed.includes(id)),
  },
  {
    id: 'practical-master',
    name: 'Practical Master',
    nameKo: '실전 마스터',
    description: 'Complete all 10 practical problems',
    descriptionKo: '실전 문제 10개를 모두 완료하세요',
    icon: 'target',
    condition: (completed) => PRACTICAL_IDS.every(id => completed.includes(id)),
  },

  // ── Cumulative Milestones (5) ──
  {
    id: 'first-step',
    name: 'First Step',
    nameKo: '첫 걸음',
    description: 'Complete your first problem',
    descriptionKo: '첫 번째 문제를 완료하세요',
    icon: 'footprints',
    condition: (completed) => completed.length >= 1,
  },
  {
    id: 'explorer',
    name: 'Explorer',
    nameKo: '탐험가',
    description: 'Complete 10 problems',
    descriptionKo: '10개의 문제를 완료하세요',
    icon: 'compass',
    condition: (completed) => completed.length >= 10,
  },
  {
    id: 'challenger',
    name: 'Challenger',
    nameKo: '도전자',
    description: 'Complete 20 problems',
    descriptionKo: '20개의 문제를 완료하세요',
    icon: 'sword',
    condition: (completed) => completed.length >= 20,
  },
  {
    id: 'expert',
    name: 'Expert',
    nameKo: '전문가',
    description: 'Complete 30 problems',
    descriptionKo: '30개의 문제를 완료하세요',
    icon: 'crown',
    condition: (completed) => completed.length >= 30,
  },
  {
    id: 'grandmaster',
    name: 'Grand Master',
    nameKo: '그랜드 마스터',
    description: 'Complete 40 problems',
    descriptionKo: '40개의 문제를 완료하세요',
    icon: 'trophy',
    condition: (completed) => completed.length >= 40,
  },

  // ── Topic Specials (4) ──
  {
    id: 'frontend-trio',
    name: 'Frontend Trio',
    nameKo: '프론트엔드 삼총사',
    description: 'Complete at least 1 HTML, 1 CSS, and 1 JavaScript problem',
    descriptionKo: 'HTML, CSS, JavaScript 문제를 각각 1개 이상 완료하세요',
    icon: 'layers',
    condition: (completed) => {
      const hasHTML = completed.some(id => id.toLowerCase().includes('html'));
      const hasCSS = completed.some(id => id.toLowerCase().includes('css'));
      const hasJS = completed.some(id => id.toLowerCase().includes('js') || id.toLowerCase().includes('javascript'));
      return hasHTML && hasCSS && hasJS;
    },
  },
  {
    id: 'react-master',
    name: 'React Master',
    nameKo: '리액트 마스터',
    description: 'Complete at least 3 React-related problems',
    descriptionKo: 'React 관련 문제를 3개 이상 완료하세요',
    icon: 'atom',
    condition: (completed) =>
      completed.filter(id => id.toLowerCase().includes('react')).length >= 3,
  },
  {
    id: 'fullstack',
    name: 'Full Stack',
    nameKo: '풀스택',
    description: 'Complete at least 1 frontend, 1 backend, and 1 DevOps problem',
    descriptionKo: '프론트엔드, 백엔드, DevOps 문제를 각각 1개 이상 완료하세요',
    icon: 'server',
    condition: (completed) => {
      const frontendKeywords = ['html', 'css', 'js', 'javascript', 'react', 'typescript'];
      const backendKeywords = ['backend', 'node', 'api', 'database', 'sql'];
      const devopsKeywords = ['devops', 'docker', 'deploy', 'ci', 'cd', 'git'];
      const hasFrontend = completed.some(id => frontendKeywords.some(kw => id.toLowerCase().includes(kw)));
      const hasBackend = completed.some(id => backendKeywords.some(kw => id.toLowerCase().includes(kw)));
      const hasDevOps = completed.some(id => devopsKeywords.some(kw => id.toLowerCase().includes(kw)));
      return hasFrontend && hasBackend && hasDevOps;
    },
  },
  {
    id: 'all-rounder',
    name: 'All Rounder',
    nameKo: '올라운더',
    description: 'Complete at least 1 problem from each of 8 topics',
    descriptionKo: '8개 토픽에서 각각 1개 이상의 문제를 완료하세요',
    icon: 'globe',
    condition: (completed) => {
      const topics = ['html', 'css', 'javascript', 'react', 'typescript', 'git', 'backend', 'devops'];
      return topics.every(topic =>
        completed.some(id => id.toLowerCase().includes(topic))
      );
    },
  },
];

export function getBadges(completedProblems: string[]) {
  return BADGES.map(badge => ({
    ...badge,
    earned: badge.condition(completedProblems),
  }));
}

export default BADGES;
