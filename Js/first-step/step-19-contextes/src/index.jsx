import React, { useContext, useState, useCallback } from "react";
import { render } from "react-dom";

const THEMES = {
  dark: {
    background: '#000',
    color: '#fff',
    border: 'solid 1px #fff'
  },
  light: {
    background: '#fff',
    color: '#000',
    border: 'solid 1px #000'
  }
};

const ThemeContext = React.createContext(THEMES.dark);

function SearchForm() {
  return (
    <div>
      <input />
      <ThemedButtonClass>Rechercher</ThemedButtonClass>
    </div>
  );
}

function Toolbar() {
  return (
    <div>
      <SearchForm />
      <ThemedButton>m'inscrire</ThemedButton>
    </div>
  );
}

function ThemedButton({ children }) {
  const value = useContext(ThemeContext);
  return (
    <button style={value}>{children}</button>
  );
}

class ThemedButtonClass extends React.Component {
  render() {
    const { children } = this.props;
    const value = this.context;
    return (
      <button style={value}>{children}</button>
    );
  }
}
ThemedButtonClass.contextType = ThemeContext;

function App() {
  const [theme, setTheme] = useState('light');
  const toggleTheme = useCallback(() => {
    setTheme(t => (t === 'light' ? 'dark' : 'light'));
  }, []);
  const currentTheme = theme === 'light' ? THEMES.light : THEMES.dark;

  return (
    <ThemeContext.Provider value={currentTheme}>
      <Toolbar />
      <button onClick={toggleTheme}>Changer le thème</button>
    </ThemeContext.Provider>
  );
}

render(
  <App />,
  document.getElementById('app')
);
