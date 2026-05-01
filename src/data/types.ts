export interface TopicSection {
  title: string;
  titleEn: string;
  content: string;
  contentEn: string;
  code?: string;
  codeLanguage?: string;
  output?: string;
  livePreview?: boolean;
  quiz?: QuizItem;
}

export interface TopicChapter {
  id: string;
  chapter: number;
  titleKey: string;
  sections: TopicSection[];
}

export interface QuizItem {
  question: string;
  questionEn: string;
  options: string[];
  optionsEn: string[];
  correctIndex: number;
  explanation: string;
  explanationEn: string;
}

export interface WebProblem {
  id: string;
  number: number;
  title: string;
  titleEn: string;
  category: string;
  topic: string;
  description: string;
  descriptionEn: string;
  difficulty: string;
  hint?: string;
  hintEn?: string;
  starterCode?: { html?: string; css?: string; js?: string };
  solution: { html?: string; css?: string; js?: string };
  solutionExplanation?: string;
  solutionExplanationEn?: string;
}
