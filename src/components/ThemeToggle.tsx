import { useEffect, useState } from "react";

type Theme = "light" | "dark";

type InitialTheme = "light" | "dark" | "device" | undefined;

interface Props {
  initialTheme?: InitialTheme;
  className?: string;
}

const resolveInitialTheme = (initialTheme: InitialTheme): Theme => {
  if (initialTheme === "dark") {
    return "dark";
  }
  if (initialTheme === "device") {
    if (typeof window !== "undefined") {
      return window.matchMedia("(prefers-color-scheme: dark)").matches
        ? "dark"
        : "light";
    }
    return "light";
  }
  return "light";
};

const applyTheme = (theme: Theme) => {
  const root = document.documentElement;
  root.dataset.theme = theme;

  if (theme === "dark") {
    root.classList.add("dark");
  } else {
    root.classList.remove("dark");
  }
};

export default function ThemeToggle({ initialTheme, className }: Props) {
  const [theme, setTheme] = useState<Theme>(() => "light");

  useEffect(() => {
    const root = document.documentElement;
    const currentDatasetTheme = root.dataset.theme as InitialTheme | undefined;
    const resolvedTheme = resolveInitialTheme(
      currentDatasetTheme ?? initialTheme
    );
    setTheme(resolvedTheme);
  }, [initialTheme]);

  useEffect(() => {
    applyTheme(theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === "dark" ? "light" : "dark"));
  };

  const nextTheme = theme === "dark" ? "light" : "dark";

  const wrapperClass =
    className ?? "mb-6 flex w-full justify-end";

  return (
    <div className={wrapperClass}>
      <button
        type="button"
        onClick={toggleTheme}
        className="flex items-center gap-2 rounded-full border border-zinc-300 px-4 py-1.5 text-sm font-medium text-zinc-700 shadow-sm transition hover:border-zinc-400 hover:bg-zinc-100 dark:border-zinc-700 dark:text-zinc-200 dark:hover:border-zinc-500 dark:hover:bg-zinc-800"
        aria-label={`Activate ${nextTheme} theme`}
      >
        <span className="inline-flex h-2.5 w-2.5 rounded-full bg-current" />
        {theme === "dark" ? "Dark" : "Light"} mode
      </button>
    </div>
  );
}
