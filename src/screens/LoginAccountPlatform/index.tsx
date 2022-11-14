import { useState } from 'react';
import { TouchableWithoutFeedback, Keyboard } from 'react-native';
import {
  View,
  Heading,
  VStack,
  Flex,
  Icon,
  Button,
  Text,
  useToast,
  HStack,
} from 'native-base';
import {
  At,
  Detective,
  Eye,
  Password,
  EyeSlash,
  CaretLeft,
} from 'phosphor-react-native';
import { useTheme } from 'native-base';

import { InputRoot } from '../../components/Input';
import { reactotronLog } from '../../utils/reactotronLog';
import { useNavigation } from '@react-navigation/native';

export function LoginInAccountPlatform() {
  const { colors } = useTheme();
  const [isVisiblePassword, setIsVisiblePassword] = useState(true);
  const [email, setEmail] = useState<string | null>(null);
  const [password, setPassword] = useState<string | null>(null);
  const toast = useToast();
  const navigator = useNavigation();

  function handleToggleButton() {
    setIsVisiblePassword((prev) => !prev);
  }

  function handleSubmit() {
    try {
      reactotronLog(email, password);
    } catch (err) {
      reactotronLog(err);
      toast.show({
        description:
          'Tivemos problemas ao criar a conta por favor tente novamente mais tarde.',
        bg: 'red.500',
        placement: 'top',
      });
    }
  }

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View
        flex={1}
        bg='gray.900'
        px={8}
        justifyContent='center'
        alignItems='center'
      >
        <Flex mb={5}>
          <Icon
            as={<Detective size={50} color={colors.red[300]} />}
            size='md'
          />
        </Flex>
        <Heading color='gray.200' textAlign='center'>
          Crie sua conta na plataforma
        </Heading>
        <VStack mt={8} space={4}>
          <InputRoot.InputContainer>
            <InputRoot.InputIcon>
              <At size={22} color={colors.gray[100]} />
            </InputRoot.InputIcon>
            <InputRoot.Input
              placeholder='Digite um email'
              borderWidth={0}
              _focus={{
                bg: 'transparent',
              }}
              color='gray.100'
              onChangeText={setEmail}
              value={email}
            />
          </InputRoot.InputContainer>
          <InputRoot.InputContainer>
            <InputRoot.InputIcon>
              <Password size={22} color={colors.gray[100]} />
            </InputRoot.InputIcon>
            <InputRoot.Input
              placeholder='Digite uma senha'
              borderWidth={0}
              _focus={{
                bg: 'transparent',
              }}
              color='gray.100'
              secureTextEntry={isVisiblePassword}
              onChangeText={setPassword}
              value={password}
            />
            <InputRoot.InputIcon>
              <Button
                bg='transparent'
                _pressed={{ bg: 'transparent', opacity: 0.3 }}
                onPress={handleToggleButton}
              >
                {isVisiblePassword ? (
                  <Eye size={22} color={colors.gray[100]} />
                ) : (
                  <EyeSlash size={22} color={colors.gray[100]} />
                )}
              </Button>
            </InputRoot.InputIcon>
          </InputRoot.InputContainer>
          <Button
            bg='amber.100'
            _pressed={{ bg: 'amber.200' }}
            mt={4}
            onPress={handleSubmit}
          >
            <Text
              textTransform='uppercase'
              fontWeight='semibold'
              color='red.400'
              fontSize='md'
            >
              Entrar
            </Text>
          </Button>
          <HStack justifyContent='space-between'>
            <Button
              bg='transparent'
              _pressed={{ bg: 'transparent', opacity: 0.4 }}
              onPress={() => navigator.navigate('login')}
            >
              <HStack>
                <CaretLeft size={22} color='white' />
                <Text color='gray.100' fontWeight='semibold'>
                  Voltar
                </Text>
              </HStack>
            </Button>
            <Button
              bg='transparent'
              _pressed={{ bg: 'transparent', opacity: 0.4 }}
              onPress={() => navigator.navigate('createNewAccountInPlatform')}
            >
              <HStack>
                <Text color='gray.100' fontWeight='semibold'>
                  Criar nova conta
                </Text>
              </HStack>
            </Button>
          </HStack>
        </VStack>
      </View>
    </TouchableWithoutFeedback>
  );
}