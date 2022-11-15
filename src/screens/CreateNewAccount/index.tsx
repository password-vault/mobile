import { useTheme } from 'styled-components';
import { Button, Flex, HStack, Icon, Text, View, VStack } from 'native-base';
import { TouchableWithoutFeedback, Keyboard } from 'react-native';
import { CaretLeft, Detective, UserPlus } from 'phosphor-react-native';
import { InputRoot } from '../../components';
import { useState } from 'react';
import { useNavigation } from '@react-navigation/native';

export function CreateNewAccountInPlatform() {
  const { colors } = useTheme();
  const [username, setUsername] = useState<string>(null);
  const [email, setEmail] = useState<string>(null);
  const [password, setPassword] = useState<string>(null);
  const [repeatPassword, setRepeatPassword] = useState('');
  const repeatPasswordIsEqualPassword = password === repeatPassword;
  const navigator = useNavigation();

  async function handleSubmitForm() {
    console.log('Icaro');
  }

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View
        flex={1}
        bg='gray.900'
        justifyContent='center'
        alignItems='center'
        px={4}
      >
        <Flex mb={5}>
          <Icon
            as={<Detective size={50} color={colors.red[300]} />}
            size='md'
          />
        </Flex>
        <VStack bg='gray.800' px={4} py={8} borderRadius={4}>
          <HStack mb={4} alignItems='center' space={4}>
            <Text color='gray.100' fontSize={18}>
              Novo usuário
            </Text>
            <UserPlus size={22} color='white' weight='bold' />
          </HStack>
          <VStack w='100%' space={4}>
            <InputRoot.InputContainer>
              <InputRoot.Input
                placeholder='Digite seu email'
                value={email}
                onChangeText={setEmail}
                color='gray.100'
              />
            </InputRoot.InputContainer>
            <InputRoot.InputContainer>
              <InputRoot.Input
                placeholder='Nome de usuário'
                onChangeText={setUsername}
                value={username}
                color='gray.100'
              />
            </InputRoot.InputContainer>
            <InputRoot.InputContainer>
              <InputRoot.Input
                placeholder='Senha'
                onChangeText={setPassword}
                value={password}
                color='gray.100'
                secureTextEntry
              />
            </InputRoot.InputContainer>
            <InputRoot.InputContainer
              borderColor={
                repeatPasswordIsEqualPassword
                  ? 'green.500'
                  : repeatPassword.length
                  ? 'red.500'
                  : 'gray.100'
              }
            >
              <InputRoot.Input
                placeholder='Repetir senha'
                onChangeText={setRepeatPassword}
                value={repeatPassword}
                color='gray.100'
                secureTextEntry
              />
            </InputRoot.InputContainer>
          </VStack>
          <HStack mt={4} justifyContent='space-between'>
            <Button
              bg='transparent'
              _pressed={{ bg: 'transparent', opacity: 0.3 }}
              onPress={() => navigator.goBack()}
            >
              <HStack>
                <CaretLeft size={22} color='white' />
                <Text color='gray.100' fontWeight='semibold'>
                  Voltar
                </Text>
              </HStack>
            </Button>
            <Button
              bg='amber.100'
              _pressed={{ bg: 'amber.200' }}
              onPress={handleSubmitForm}
            >
              <Text color='red.500' fontWeight='semibold'>
                Criar conta
              </Text>
            </Button>
          </HStack>
        </VStack>
      </View>
    </TouchableWithoutFeedback>
  );
}
