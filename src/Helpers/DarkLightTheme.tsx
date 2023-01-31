export const setCurrentTheme = (theme: string) => {
  localStorage.setItem("isDarkMode", theme);
};

export const checkCurrentTheme = (): string | null => {
  return localStorage.getItem("isDarkMode");
};
// Sounds Good
