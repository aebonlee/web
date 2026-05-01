declare module 'prismjs' {
  const Prism: {
    highlight(code: string, grammar: unknown, language: string): string;
    languages: Record<string, unknown>;
  };
  export default Prism;
}

declare module 'prismjs/components/prism-typescript' {}
declare module 'prismjs/components/prism-jsx' {}
declare module 'prismjs/components/prism-tsx' {}
declare module 'prismjs/components/prism-css' {}
declare module 'prismjs/components/prism-json' {}
declare module 'prismjs/components/prism-bash' {}
declare module 'prismjs/components/prism-sql' {}
declare module 'prismjs/components/prism-yaml' {}
declare module 'prismjs/components/prism-docker' {}
declare module 'prismjs/components/prism-git' {}
declare module 'prismjs/components/prism-markup' {}
