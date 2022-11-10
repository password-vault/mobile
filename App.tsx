import { StatusBar } from 'expo-status-bar';
import { Text, View } from 'react-native';
import { ThemeProvider } from 'styled-components';
import {
  Poppins_300Light,
  Poppins_400Regular,
  Poppins_700Bold,
} from '@expo-google-fonts/poppins';
import {
  useFonts,
  Roboto_300Light,
  Roboto_500Medium,
  Roboto_700Bold,
} from '@expo-google-fonts/roboto';
import { ThemeContextProvider } from './src/context/ThemeContext';

import { theme as ApplicationTheme } from './src/styles/theme';
import { useTheme } from './src/hooks/useTheme';
import { Routes } from './src/routes';
import { Loading } from './src/components/Loading';

export default function App() {
  const [fontsLoaded] = useFonts({
    Roboto_300Light,
    Roboto_500Medium,
    Roboto_700Bold,
    Poppins_300Light,
    Poppins_400Regular,
    Poppins_700Bold,
  });
  const { theme } = useTheme();

  return (
    <ThemeContextProvider>
      <ThemeProvider theme={ApplicationTheme[theme]}>
        {!fontsLoaded ? <Loading /> : <Routes />}
        <StatusBar animated translucent style='auto' />
      </ThemeProvider>
    </ThemeContextProvider>
  );
}
