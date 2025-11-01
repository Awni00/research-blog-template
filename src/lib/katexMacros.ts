
/**
 * A collection of KaTeX macros used across the project.
 *
 * This object maps LaTeX macro names (including the leading backslash) to
 * their KaTeX-compatible replacement strings. Placeholders such as `#1`,
 * `#2`, etc. are used for macro arguments following KaTeX's macro syntax.
 *
 * Use with KaTeX rendering utilities, e.g.:
 * ```ts
 * import katex from 'katex';
 * import katexMacros from './katexMacros';
 *
 * katex.renderToString('\\prob{A}', { macros: katexMacros });
 * ```
 *
 * @remarks
 * - Includes common math shorthands like `\epsilon -> \varepsilon`, `\bigO`,
 *   and statistical helpers like `\expectunder`, `\probunder`, and `\simiid`.
 * - Contains convenience wrappers for calligraphic and bold symbols, and
 *   argument-taking macros (e.g. `\Ind`, `\cal`).
 *
 * @example
 * // Expand a one-argument macro:
 * // Input:  \prob{X > 0}
 * // Result: \mathbb{P}\left[ X > 0 \right]
 *
 * @public
 */

export const katexMacros = {
  // misc macros
  "\\epsilon": "\\varepsilon",
  "\\bigO": "\\mathcal{O}",
  "\\bigOtilde": "\\widetilde{\\mathcal{O}}",

  // parentheses/brackets
  "\\parens": "\\left( #1 \\right)",
  "\\bracks": "\\left[ #1 \\right]",
  "\\braces": "\\left\\{ #1 \\right\\}",

  // statistical macros
  "\\expect": "\\mathbb{E}\\left[ #1 \\right]",
  "\\expectunder": "\\underset{#1}{\\mathbb{E}}\\left[ #2 \\right]",
  "\\prob": "\\mathbb{P}\\left[ #1 \\right]",
  "\\probunder": "\\underset{#1}{\\mathbb{P}}\\left[ #2 \\right]",
  "\\simiid": "\\overset{\\text{i.i.d.}}{\\sim}",
  "\\Ind": "\\mathbb{I}\\left\\{ #1 \\right\\}",
  "\\VC": "\\mathrm{VC}",

  // caligraphic letters
  "\\calA": "\\mathcal{A}",
  "\\calB": "\\mathcal{B}",
  "\\calC": "\\mathcal{C}",
  "\\calD": "\\mathcal{D}",
  "\\calE": "\\mathcal{E}",
  "\\calF": "\\mathcal{F}",
  "\\calG": "\\mathcal{G}",
  "\\calH": "\\mathcal{H}",
  "\\calI": "\\mathcal{I}",
  "\\calJ": "\\mathcal{J}",
  "\\calK": "\\mathcal{K}",
  "\\calL": "\\mathcal{L}",
  "\\calM": "\\mathcal{M}",
  "\\calN": "\\mathcal{N}",
  "\\calO": "\\mathcal{O}",
  "\\calP": "\\mathcal{P}",
  "\\calQ": "\\mathcal{Q}",
  "\\calR": "\\mathcal{R}",
  "\\calS": "\\mathcal{S}",
  "\\calT": "\\mathcal{T}",
  "\\calU": "\\mathcal{U}",
  "\\calV": "\\mathcal{V}",
  "\\calW": "\\mathcal{W}",
  "\\calX": "\\mathcal{X}",
  "\\calY": "\\mathcal{Y}",
  "\\calZ": "\\mathcal{Z}",

  // blackboard (mathbb) letters
  "\\bbA": "\\mathbb{A}",
  "\\bbB": "\\mathbb{B}",
  "\\bbC": "\\mathbb{C}",
  "\\bbD": "\\mathbb{D}",
  "\\bbE": "\\mathbb{E}",
  "\\bbF": "\\mathbb{F}",
  "\\bbG": "\\mathbb{G}",
  "\\bbH": "\\mathbb{H}",
  "\\bbI": "\\mathbb{I}",
  "\\bbJ": "\\mathbb{J}",
  "\\bbK": "\\mathbb{K}",
  "\\bbL": "\\mathbb{L}",
  "\\bbM": "\\mathbb{M}",
  "\\bbN": "\\mathbb{N}",
  "\\bbO": "\\mathbb{O}",
  "\\bbP": "\\mathbb{P}",
  "\\bbQ": "\\mathbb{Q}",
  "\\bbR": "\\mathbb{R}",
  "\\bbS": "\\mathbb{S}",
  "\\bbT": "\\mathbb{T}",
  "\\bbU": "\\mathbb{U}",
  "\\bbV": "\\mathbb{V}",
  "\\bbW": "\\mathbb{W}",
  "\\bbX": "\\mathbb{X}",
  "\\bbY": "\\mathbb{Y}",
  "\\bbZ": "\\mathbb{Z}",

};

export default katexMacros;
