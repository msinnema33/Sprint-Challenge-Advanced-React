import React from 'react';
import useDarkMode from '../hooks/useDarkMode';
import '../App.css';

const Navigation = () => {
  const [darkMode, setDarkMode] = useDarkMode(false);
  const toggleMode = e => {
    e.preventDefault();
    setDarkMode(!darkMode); 
  };
  return (
    <nav className="navigation">
      <h1 data-testid='nav-h1'>Womens World Cup</h1>
      <div className="dark-mode__toggle">
        <div
          onClick={toggleMode}
          className={darkMode ? 'toggle toggled' : 'toggle'}
        />
      </div>  
    </nav>
  );
};

export default Navigation;