import { useEffect, useState } from "react";

type Heading = {
  depth: number;
  slug: string;
  text: string;
};

interface Props {
  headings?: Heading[];
}

const sanitizeText = (text: string) =>
  text.replace(/\u21A9|\u21A9\uFE0E|\u21A9\uFE0F/g, "").trim();

export function TableOfContents({ headings: initialHeadings }: Props) {
  const [headings, setHeadings] = useState<Heading[]>(() =>
    (initialHeadings ?? []).filter((heading) => heading.depth === 2)
  );

  useEffect(() => {
    if (initialHeadings && initialHeadings.length > 0) {
      return;
    }

    const headingElements = Array.from(
      document.querySelectorAll<HTMLHeadingElement>("main h2[id]")
    );

    const generatedHeadings = headingElements.map((element) => ({
      depth: 2,
      slug: element.id,
      text: sanitizeText(element.textContent ?? ""),
    }));

    setHeadings(generatedHeadings);
  }, [initialHeadings]);

  if (headings.length === 0) {
    return null;
  }

  return (
    <nav
      id="on-this-page"
      aria-label="Table of contents"
      className="mt-8 border-t border-zinc-200 pt-4 text-sm text-zinc-700 dark:border-zinc-800 dark:text-zinc-200"
    >
      <p className="text-xs font-semibold uppercase tracking-wide text-zinc-500 dark:text-zinc-400">
        Table of Contents
      </p>
      <ul className="mt-2 space-y-1">
        {headings.map((heading) => (
          <li key={heading.slug}>
            <a
              href={`#${heading.slug}`}
              className="text-blue-600 no-underline hover:underline dark:text-blue-300"
            >
              {heading.text}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default TableOfContents;
