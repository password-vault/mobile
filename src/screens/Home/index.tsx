import { Heading, View, FlatList } from 'native-base';
import { useState, useCallback } from 'react';
import { useFocusEffect } from '@react-navigation/native';

import { Header } from '../../components/Header';
import { baseApi } from '../../configs/global/api';
import { reactotronLog } from '../../utils/reactotronLog';
import { Card } from '../../components/Card';
import { CardEmpty } from '../../components/CardEmpty';

interface IPasswordProps {
  title: string;
  password: string;
}

export function Home() {
  const [passwords, setPasswords] = useState<IPasswordProps[]>([]);

  useFocusEffect(
    useCallback(() => {
      getPasswords();
    }, [])
  );

  async function getPasswords() {
    try {
      const { data } = await baseApi.get('/passwords');
      setPasswords(data);
    } catch (err) {
      reactotronLog(err);
    }
  }

  return (
    <View flex={1} bg='gray.900' px={4}>
      <Header />
      <Heading color='gray.100' mt={12} fontSize={20}>
        Suas senhas :
      </Heading>
      <View flex={1}>
        <FlatList
          data={passwords}
          renderItem={({ item }) => <Card {...item} />}
          keyExtractor={({ password }) => password}
          flex={1}
          horizontal
          ListEmptyComponent={<CardEmpty />}
          mt={4}
          contentContainerStyle={{
            paddingRight: 8,
          }}
        />
      </View>
    </View>
  );
}
