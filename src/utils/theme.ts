export const THEME_STORAGE_KEY = 'theme-preference';

export type Theme = 'system' | 'light' | 'dark';

export const THEME_LABELS: Record<Theme, string> = {
  system: '기본',
  light: '라이트',
  dark: '다크',
};

export const THEME_OPTIONS = [
  { value: 'system' as Theme, label: '기본', description: '시스템 설정 따르기' },
  { value: 'light' as Theme, label: '라이트', description: '밝은 테마' },
  { value: 'dark' as Theme, label: '다크', description: '어두운 테마' },
] as const;

/**
 * 테마를 적용합니다.
 */
export function applyTheme(theme: Theme, options: { persist?: boolean } = {}) {
  const { persist = true } = options;
  const root = document.documentElement;

  if (theme === 'light') {
    root.setAttribute('data-theme', 'light');
  } else if (theme === 'dark') {
    root.setAttribute('data-theme', 'dark');
  } else {
    root.removeAttribute('data-theme');
  }

  if (persist) {
    localStorage.setItem(THEME_STORAGE_KEY, theme);
  }
}

/**
 * 저장된 테마를 가져옵니다.
 */
export function getStoredTheme(): Theme {
  if (typeof localStorage === 'undefined') return 'system';
  return (localStorage.getItem(THEME_STORAGE_KEY) || 'system') as Theme;
}

/**
 * 초기 테마를 적용합니다 (head에서 사용).
 */
export function initTheme() {
  if (typeof document === 'undefined' || typeof localStorage === 'undefined') return;
  
  try {
    const saved = localStorage.getItem(THEME_STORAGE_KEY);
    if (saved === 'light' || saved === 'dark') {
      document.documentElement.setAttribute('data-theme', saved);
    } else {
      document.documentElement.removeAttribute('data-theme');
    }
  } catch (error) {
    console.warn('Theme preference unavailable', error);
  }
}

