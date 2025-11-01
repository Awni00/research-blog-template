declare module "katex" {
  interface KatexOptions {
    throwOnError?: boolean;
    macros?: Record<string, string>;
  }

  export function renderToString(
    formula: string,
    options?: KatexOptions,
  ): string;
}
