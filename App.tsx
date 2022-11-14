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
import { NativeBaseProvider, StatusBar } from 'native-base';
import { ThemeProvider } from 'styled-components';

import { theme as ApplicationTheme } from './src/styles/theme';
import { reactotron } from './src/configs';
import { Routes } from './src/routes';
import { Loading } from './src/components';
import { useToggle } from './src/store/theme';

if (__DEV__) {
  reactotron.connect();
}

export default function App() {
  const [fontsLoaded] = useFonts({
    Roboto_300Light,
    Roboto_500Medium,
    Roboto_700Bold,
    Poppins_300Light,
    Poppins_400Regular,
    Poppins_700Bold,
  });
  const { theme } = useToggle();

  return (
    <ThemeProvider theme={ApplicationTheme[theme]}>
      <NativeBaseProvider>
        {!fontsLoaded ? <Loading /> : <Routes />}
        <StatusBar
          barStyle={'light-content'}
          backgroundColor='transparent'
          animated
          translucent
        />
      </NativeBaseProvider>
    </ThemeProvider>
  );
}
