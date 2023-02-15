export type Theme = 'dark' | 'light';

export const setTheme = (theme: Theme) => {
  localStorage.theme = theme;
  if (theme === 'dark') {
    document.documentElement.classList.add('dark');
  } else {
    document.documentElement.classList.remove('dark');
  }
};
