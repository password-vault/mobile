import { Heading, View } from 'native-base';
import { useState, useCallback } from 'react';
import { useFocusEffect } from '@react-navigation/native';

import { Header } from '../../components/Header';
import { baseApi } from '../../configs/global/api';
import { reactotronLog } from '../../utils/reactotronLog';

export function Home() {
  const [passwords, setPasswords] = useState([]);

  useFocusEffect(
    useCallback(() => {
      (async () => {
        const { data } = await baseApi.get('/passwords');
        reactotronLog(data);
      })();
    }, [])
  );

  return (
    <View flex={1} bg='gray.900' px={4}>
      <Header />
      <Heading color='gray.100' mt={12} fontSize={20}>
        Suas senhas :
      </Heading>
      <View></View>
    </View>
  );
}
