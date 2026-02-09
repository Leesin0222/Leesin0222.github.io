import { useEffect, useCallback, useState } from 'react';

const STORAGE_KEY = 'theme-preference';
export type Theme = 'light' | 'dark';

function getStored(): Theme {
  if (typeof window === 'undefined') return 'light';
  const s = localStorage.getItem(STORAGE_KEY);
  if (s === 'light' || s === 'dark') return s;
  return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
}

function apply(theme: Theme) {
  document.documentElement.setAttribute('data-theme', theme);
}

export function useTheme() {
  const [theme, setThemeState] = useState<Theme>(() => getStored());

  const setTheme = useCallback((next: Theme) => {
    localStorage.setItem(STORAGE_KEY, next);
    apply(next);
    setThemeState(next);
  }, []);

  useEffect(() => {
    const stored = getStored();
    apply(stored);
    setThemeState(stored);
  }, []);

  return { theme, setTheme };
}
