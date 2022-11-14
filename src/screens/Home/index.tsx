import { Heading, View, FlatList, HStack, Button } from 'native-base';
import { TouchableWithoutFeedback, Keyboard } from 'react-native';
import { useState, useCallback, useRef } from 'react';
import { useFocusEffect } from '@react-navigation/native';
import { useAtom } from 'jotai';

import {
  Header,
  CardEmpty,
  Card,
  CreateNewPassword,
  Loading,
} from '../../components';
import { baseApi } from '../../configs';
import { reactotronLog } from '../../utils/reactotronLog';
import { atomModalCreateNewPassword } from '../../store/modal';
import { Plus } from 'phosphor-react-native';
import { DeletePassword } from '../../components/DeletePassword';
import { modalDeleteAtom } from '../../store/ModalDeleteAtom';

interface IPasswordProps {
  title: string;
  password: string;
  id: string;
}

export function Home() {
  const [passwords, setPasswords] = useState<IPasswordProps[]>([]);
  const [modalNewPasswordIsOpen, setModalIsOpen] = useAtom(
    atomModalCreateNewPassword
  );
  const [modalDeletePasswordIsOpen] = useAtom(modalDeleteAtom);
  const [isLoading, setIsLoading] = useState(false);

  useFocusEffect(
    useCallback(() => {
      getPasswords();
    }, [])
  );

  async function getPasswords() {
    try {
      setIsLoading(true);
      const { data } = await baseApi.get('/passwords');
      setPasswords(data);
      setIsLoading(false);
    } catch (err) {
      reactotronLog(err);
    }
  }

  function openNewPasswordModal() {
    setModalIsOpen(true);
  }
  function closeNewPasswordModal() {
    setModalIsOpen(false);
  }

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View flex={1} bg='gray.900'>
        <Header />
        <HStack
          justifyContent='space-between'
          mt={12}
          alignItems='center'
          px={4}
        >
          <Heading color='gray.100' fontSize={20}>
            Suas senhas :
          </Heading>
          <Button
            bg='transparent'
            _pressed={{ bg: 'transparent', opacity: 0.4 }}
            onPress={openNewPasswordModal}
          >
            <Plus size={22} weight='bold' color='white' />
          </Button>
        </HStack>
        {!isLoading ? (
          <FlatList
            data={passwords}
            renderItem={({ item }) => <Card {...item} />}
            keyExtractor={({ password }) => password}
            w='100%'
            horizontal
            _contentContainerStyle={{
              flex: 1,
            }}
            ListEmptyComponent={<CardEmpty />}
            mt={4}
            contentContainerStyle={{
              paddingRight: 8,
            }}
          />
        ) : (
          <Loading />
        )}

        {modalNewPasswordIsOpen && (
          <CreateNewPassword
            close={closeNewPasswordModal}
            refetch={getPasswords}
          />
        )}
        {modalDeletePasswordIsOpen && <DeletePassword />}
      </View>
    </TouchableWithoutFeedback>
  );
}
