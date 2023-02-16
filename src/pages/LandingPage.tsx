import { SheetInput } from '@/components/SheetInput';
import { SunIconSvg } from '@/components/SunIconSvg';
import { ToggleSwitch } from '@/components/ToggleSwitch';
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
      <div className="flex justify-between">
        <h1 className="text-4xl font-extrabold">
          Chord
          <br />
          Progression
          <br />
          Finder
        </h1>
        <div className="float-right flex items-center">
          <SunIconSvg fill={isDarkMode ? 'white' : 'black'} />
          <ToggleSwitch checked={isDarkMode} onChange={toggleIsDarkMode} />
        </div>
      </div>
      <SheetInput />
    </div>
  );
};
