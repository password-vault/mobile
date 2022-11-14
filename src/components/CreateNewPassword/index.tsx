import { useState } from 'react';
import {
  Button,
  Divider,
  Heading,
  HStack,
  Modal,
  Text,
  useToast,
  View,
  VStack,
} from 'native-base';
import { gestureHandlerRootHOC } from 'react-native-gesture-handler';
import { X } from 'phosphor-react-native';
import { useTheme } from 'styled-components';
import { useAtom } from 'jotai';
import uuid from 'react-native-uuid';
import * as Crypto from 'expo-crypto';
import * as Clipboard from 'expo-clipboard';

import { InputRoot } from '../Input';
import { atomModalCreateNewPassword } from '../../store/modal';
import reactotron from 'reactotron-react-native';
import { reactotronLog } from '../../utils/reactotronLog';
import { baseApi } from '../../configs';

interface ICreateNewPasswordProps {
  close?: () => void;
  refetch: () => Promise<void>;
}

const SALT = 12;

export function CreateNewPassword({ close, refetch }: ICreateNewPasswordProps) {
  const { colors } = useTheme();
  const [isOpen, setShowModal] = useAtom(atomModalCreateNewPassword);
  const [hashNewPassword, setHashNewPassword] = useState<string>(null);
  const [title, setTitle] = useState<string>(null);
  const [password, setPassword] = useState<string>(null);
  const toast = useToast();

  async function generateNewPassword() {
    const createUuid = uuid.v4() as string;

    const generateHash = await Crypto.digestStringAsync(
      Crypto.CryptoDigestAlgorithm.SHA256,
      createUuid
    );
    setHashNewPassword(generateHash);
    setPassword(generateHash);
  }

  async function copyHashPassword() {
    try {
      await Clipboard.setStringAsync(hashNewPassword);
      toast.show({
        title: 'Texto copiado com sucesso!',
        bg: 'green.500',
        placement: 'top',
      });
    } catch (err) {
      reactotronLog(err);
    }
  }

  async function handleSubmitNewPassword() {
    if (!title.trim() || !password.trim()) {
      toast.show({
        title: 'Por favor preencha todos os campos',
        placement: 'top',
        bg: 'red.500',
      });
    }
    console.log({ title, password });
    try {
      await baseApi.post('/passwords', {
        title,
        password,
      });
      await refetch();
      setPassword(null);
      setTitle(null);
      setHashNewPassword(null);
    } catch (err) {
      reactotronLog(err);
    }
  }

  return (
    <Modal
      isOpen={isOpen}
      onClose={() => setShowModal(false)}
      bg='rgba(0,0,0,0.2)'
      w='100%'
      px={2}
    >
      <Modal.Content bg='gray.700' w='100%'>
        <Modal.Header bg='gray.700'>
          <HStack justifyContent='space-between' px={4} alignItems='center'>
            <Heading color='gray.100' fontSize={20}>
              Criar Nova senha
            </Heading>
            <Button
              onPress={close}
              bg='transparent'
              _pressed={{ bg: 'transparent', opacity: 0.3 }}
            >
              <X size={25} color={colors.gray[100]} />
            </Button>
          </HStack>
        </Modal.Header>
        <Modal.Body>
          <VStack px={4}>
            <Text color='gray.300' fontSize={16}>
              Titulo :
            </Text>
            <InputRoot.InputContainer mt={2}>
              <InputRoot.Input
                placeholder='Digite seu email'
                fontSize={16}
                color='gray.100'
                value={title}
                onChangeText={setTitle}
              />
            </InputRoot.InputContainer>
          </VStack>
          <VStack px={4} mt={4}>
            <Text color='gray.300' fontSize={16}>
              Senha :
            </Text>
            <InputRoot.InputContainer mt={2}>
              <InputRoot.Input
                placeholder='Digite sua senha'
                fontSize={16}
                color='gray.100'
                multiline
                value={password}
                onChangeText={setPassword}
              />
            </InputRoot.InputContainer>
          </VStack>
          <View px={4} mt={4}>
            <Text fontSize={14} color='gray.100'>
              Ou gere uma aleatória :
            </Text>
            <Text color='gray.100' py={2}>
              {hashNewPassword}
            </Text>
            <Button
              bg='amber.100'
              mt={4}
              _pressed={{ bg: 'amber.200', opacity: 0.3 }}
              onPress={generateNewPassword}
            >
              <Text fontWeight='semibold'>Clique aqui</Text>
            </Button>
            {hashNewPassword && (
              <Button
                bg='amber.100'
                mt={4}
                _pressed={{ bg: 'amber.200', opacity: 0.3 }}
                onPress={copyHashPassword}
              >
                <Text fontWeight='semibold'>Copiar password</Text>
              </Button>
            )}
          </View>
        </Modal.Body>
        <Modal.Footer bg='gray.700'>
          <Button
            variant='ghost'
            _pressed={{ bg: 'gray.600' }}
            onPress={handleSubmitNewPassword}
          >
            <Text fontWeight='semibold' color='gray.100'>
              Adicionar
            </Text>
          </Button>
        </Modal.Footer>
      </Modal.Content>
    </Modal>
  );
}

export default gestureHandlerRootHOC(CreateNewPassword);
