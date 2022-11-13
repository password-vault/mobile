import { View, Heading, Button, Text, Icon, HStack, Flex } from 'native-base';
import { Fontisto } from '@expo/vector-icons';
import { useTheme } from 'styled-components/native';
import { CaretRight, Detective } from 'phosphor-react-native';
import { useNavigation } from '@react-navigation/native';

import { baseApi } from '../../configs/global/api';
import { reactotronLog } from '../../utils/reactotronLog';
import { useUser } from '../../store/user';

export function Login() {
  const { colors } = useTheme();
  const navigator = useNavigation();
  const { setUser } = useUser((state) => state);

  async function handleNavigateToHome() {
    try {
      const { data } = await baseApi.get('/user');
      reactotronLog(data);
      setUser();
      navigator.navigate('tabs');
    } catch (err) {
      reactotronLog(err);
    }
  }

  return (
    <View px={8} bg='gray.900' flex={1} justifyContent='center'>
      <Flex alignItems='center' mb={8}>
        <Icon as={<Detective size={50} color={colors.red[300]} />} size='md' />
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

      <Button
        bg='amber.100'
        _pressed={{ bg: 'amber.200' }}
        flexDir='row'
        onPress={handleNavigateToHome}
      >
        <HStack alignItems='center'>
          <Icon as={Fontisto} name='google' color='red.400' size='md' mr={4} />
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
          onPress={() => navigator.navigate('createAcccount')}
        >
          <HStack alignItems='center' flexDir='row'>
            <Text color='gray.300' fontSize='sm'>
              ou crie uma conta na plataforma{' '}
            </Text>
            <CaretRight size={22} color={colors.gray[300]} />
          </HStack>
        </Button>
      </Flex>
    </View>
  );
}
