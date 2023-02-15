import { SheetInput } from '@/components/SheetInput';
import { setTheme } from '@/utils/setTheme';
import { useEffect, useState } from 'react';

export const LandingPage = () => {
  const [isDarkMode, setIsDarkMode] = useState<boolean>(
    'theme' in localStorage && localStorage.theme === 'dark'
  );

  const toggleIsDarkMode = () => {
    setIsDarkMode((cur) => !cur);
  };

  useEffect(() => setTheme(isDarkMode ? 'dark' : 'light'), [isDarkMode]);

  return (
    <div className="pt-10">
      <h1 className="text-5xl font-extrabold leading-tight">
        Chord
        <br />
        Progression
        <br />
        Finder
      </h1>
      <input type="checkbox" checked={isDarkMode} onChange={toggleIsDarkMode} />
      <SheetInput />
    </div>
  );
};
