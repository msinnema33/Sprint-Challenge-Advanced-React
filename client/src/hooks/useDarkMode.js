import { useLocalStorage } from './useLocalStorage';
import { useEffect } from 'react';

const useDarkMode = () => {
    const [darkMode, setDarkMode] = useLocalStorage('darkMode', false);
    useEffect (
        () => {
            const dark = 'dark-mode';
            const element = document.querySelector('body');
            if (darkMode) {
                element.classList.add(dark);
            } else {
                element.classList.remove(dark);
            }
        }, [darkMode]
    );
    return [darkMode, setDarkMode];
}

export default useDarkMode;