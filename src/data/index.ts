import { beginnerProblems } from './problems/beginner/index';
import { intermediateProblems } from './problems/intermediate/index';
import { advancedProblems } from './problems/advanced/index';
import { practicalProblems } from './problems/practical/index';
import type { TopicChapter } from './types';

// Topic imports
import htmlChapters from './html/index';
import cssChapters from './css/index';
import jsChapters from './javascript/index';
import reactChapters from './react/index';
import tsChapters from './typescript/index';
import gitChapters from './git/index';
import backendChapters from './backend/index';
import devopsChapters from './devops/index';

export const allProblems = [
  ...beginnerProblems,
  ...intermediateProblems,
  ...advancedProblems,
  ...practicalProblems
];

export const problemsByCategory: Record<string, typeof beginnerProblems> = {
  beginner: beginnerProblems,
  intermediate: intermediateProblems,
  advanced: advancedProblems,
  practical: practicalProblems
};

export function getProblemById(id: string) {
  return allProblems.find(p => p.id === id);
}

export function getProblemsByCategory(category: string) {
  return problemsByCategory[category as keyof typeof problemsByCategory] || [];
}

export const topicMap: Record<string, { chapters: TopicChapter[]; titleKey: string; color: string; icon: string }> = {
  html: { chapters: htmlChapters, titleKey: 'html', color: '#E44D26', icon: 'html' },
  css: { chapters: cssChapters, titleKey: 'css', color: '#264DE4', icon: 'css' },
  javascript: { chapters: jsChapters, titleKey: 'javascript', color: '#F7DF1E', icon: 'js' },
  react: { chapters: reactChapters, titleKey: 'react', color: '#61DAFB', icon: 'react' },
  typescript: { chapters: tsChapters, titleKey: 'typescript', color: '#3178C6', icon: 'ts' },
  git: { chapters: gitChapters, titleKey: 'git', color: '#F05032', icon: 'git' },
  backend: { chapters: backendChapters, titleKey: 'backend', color: '#68A063', icon: 'backend' },
  devops: { chapters: devopsChapters, titleKey: 'devops', color: '#2496ED', icon: 'devops' }
};

export const topicOrder = ['html', 'css', 'javascript', 'react', 'typescript', 'git', 'backend', 'devops'];

export { beginnerProblems, intermediateProblems, advancedProblems, practicalProblems };
