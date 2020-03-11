import { useEffect } from 'react';

import { useLocalStorage } from './useLocalStorage.jsx';

export const useDarkMode = key => {
  const [darkMode, setDarkMode] = useLocalStorage(key);

  useEffect(() => {
    const body = document.querySelector('body');
    if (darkMode) {
      body.classList.add('dark-mode');
    } else {
      body.classList.remove('dark-mode');
    }
  }, [darkMode]);

  return [darkMode, setDarkMode];
};
