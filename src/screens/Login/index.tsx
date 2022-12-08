import { useState } from 'react';
import {
  View,
  Heading,
  Button,
  Text,
  Icon,
  HStack,
  Flex,
  VStack,
  useToast,
  Divider,
} from 'native-base';
import { Fontisto } from '@expo/vector-icons';
import { useTheme } from 'styled-components/native';
import {
  At,
  CaretRight,
  Detective,
  Eye,
  EyeSlash,
  Password,
} from 'phosphor-react-native';
import { useNavigation } from '@react-navigation/native';
import { TouchableWithoutFeedback, Keyboard } from 'react-native';

import { baseApi } from '../../configs/global/api';
import { reactotronLog } from '../../utils/reactotronLog';
import { useUser } from '../../store/user';
import { InputRoot } from '../../components';

export function Login() {
  const { colors } = useTheme();
  const navigator = useNavigation();
  const { setUser } = useUser((state) => state);
  const [isVisiblePassword, setIsVisiblePassword] = useState(true);
  const [email, setEmail] = useState<string | null>(null);
  const [password, setPassword] = useState<string | null>(null);
  const toast = useToast();

  async function handleNavigateToHome() {
    try {
      const { data } = await baseApi.get('/user');
      reactotronLog(data);
      await setUser();
      navigator.navigate('home');
    } catch (err) {
      reactotronLog(err);
    }
  }

  function handleToggleButton() {
    setIsVisiblePassword((prev) => !prev);
  }

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View px={8} bg='gray.900' flex={1} justifyContent='center'>
        <Flex alignItems='center' mb={8}>
          <Icon
            as={<Detective size={50} color={colors.red[300]} />}
            size='md'
          />
        </Flex>
        <Flex mb={8}>
          <Heading
            mb={4}
            textAlign='center'
            color='gray.100'
            textTransform='uppercase'
          >
            Venha conhecer o{'\n'}
            vault <Text color='amber.300'>o melhor app para </Text>
            {'\n'}
            <Text color='amber.300'>guardar suas</Text>{' '}
            <Text color='red.400'>senhas.</Text>
          </Heading>
        </Flex>
        <VStack space={4}>
          <InputRoot.InputContainer>
            <InputRoot.InputIcon>
              <At size={22} color={colors.gray[100]} />
            </InputRoot.InputIcon>
            <InputRoot.Input
              placeholder='Digite seu email'
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
              placeholder='Digite sua senha'
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
        </VStack>
        <HStack p={4} alignItems='center' justifyContent='center' space={4}>
          <Divider bg='gray.300' h='1px' w={100} />
          <Text color='gray.300' textAlign='center'>
            ou
          </Text>
          <Divider bg='gray.300' h='1px' w={100} />
        </HStack>
        <Button
          bg='amber.100'
          _pressed={{ bg: 'amber.200' }}
          flexDir='row'
          onPress={handleNavigateToHome}
        >
          <HStack alignItems='center'>
            <Icon
              as={Fontisto}
              name='google'
              color='red.400'
              size='md'
              mr={4}
            />
            <Text
              fontSize='md'
              color='red.400'
              textTransform='uppercase'
              fontWeight='semibold'
            >
              Entrar com o google
            </Text>
          </HStack>
        </Button>
        <Flex alignItems='center' mt={6}>
          <Button
            bg='transparent'
            _pressed={{ bg: 'gray.800' }}
            variant='ghost'
            onPress={() => navigator.navigate('createNewAccountInPlatform')}
          >
            <HStack alignItems='center' flexDir='row'>
              <Text color='gray.300' fontSize='sm'>
                crie uma conta na plataforma{' '}
              </Text>
              <CaretRight size={22} color={colors.gray[300]} />
            </HStack>
          </Button>
        </Flex>
      </View>
    </TouchableWithoutFeedback>
  );
}
