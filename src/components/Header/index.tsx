import {
  Button,
  Heading,
  HStack,
  Image,
  Text,
  View,
  VStack,
} from 'native-base';
import { Gear } from 'phosphor-react-native';
import { useUser } from '../../store/user';

export function Header() {
  const { user } = useUser((state) => state);

  return (
    <HStack mt={12} px={4} justifyContent='space-between' alignItems='center'>
      <HStack space={4} alignItems='center'>
        <Image
          source={{ uri: user.imageSource }}
          alt={user.username}
          w='50px'
          h='50px'
          borderRadius={50}
          borderWidth={3}
          borderStyle='solid'
          borderColor='amber.100'
        />
        <VStack>
          <Heading color='gray.100' fontSize={20}>
            Olá {user.username.split(' ')[0]}
          </Heading>
          <Text color='gray.400'>{user.email}</Text>
        </VStack>
      </HStack>
      <Button bg='transparent' _pressed={{ bg: 'transparent', opacity: 0.4 }}>
        <Gear size={20} weight='bold' color='#e7e5e4' />
      </Button>
    </HStack>
  );
}
