import {
  createContext,
  ReactNode,
  useCallback,
  useEffect,
  useState,
} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Appearance } from 'react-native';

type Theme = 'light' | 'dark';

interface IContextProps {
  theme: Theme;
  toogleTheme(): void;
}

export const ThemeContext = createContext<IContextProps>({} as IContextProps);

export function ThemeContextProvider({ children }: { children: ReactNode }) {
  const [theme, setTheme] = useState<Theme>('light');

  useEffect(() => {
    const colorScheme = Appearance.getColorScheme();
    setTheme(colorScheme);
  }, []);

  useEffect(() => {
    (async () => {
      try {
        const themeSelected = await AsyncStorage.getItem('@theme');
        if (themeSelected) {
          setTheme(themeSelected as Theme);
        }
      } catch (err) {
        console.log(err);
      }
    })();
  }, []);

  useEffect(() => {
    (async () => {
      try {
        await AsyncStorage.setItem('@theme', theme);
      } catch (err) {
        console.log(err);
      }
    })();
  }, [theme]);

  const toogleTheme = useCallback(() => {
    setTheme((prev) => (prev === 'light' ? 'dark' : 'light'));
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, toogleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}
