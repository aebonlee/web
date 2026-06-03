/** 운영체제별 등으로 코드 창을 분리해 보여줄 때 사용하는 개별 코드 블록 */
export interface CodeBlock {
  /** 코드 창 헤더에 표시할 라벨 (예: 'Windows (PowerShell)', 'macOS / Linux') */
  label: string;
  code: string;
  codeLanguage?: string;
}

export interface TopicSection {
  title: string;
  titleEn: string;
  content: string;
  contentEn: string;
  code?: string;
  codeLanguage?: string;
  /** 여러 개의 라벨이 붙은 코드 창(예: OS별)을 각각 표시 */
  codeBlocks?: CodeBlock[];
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
