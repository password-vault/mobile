import { useState } from 'react';
import { Button, Heading, HStack, Text, View, VStack } from 'native-base';
import { Eye, EyeSlash } from 'phosphor-react-native';
import { useTheme } from 'styled-components';
interface IPasswordProps {
  title: string;
  password: string;
}

export function Card({ password, title }: IPasswordProps) {
  const [passwordVisible, setPasswordVisible] = useState(false);
  const { colors } = useTheme();

  function handleToggleVisible() {
    setPasswordVisible((prev) => !prev);
  }

  return (
    <View
      px={8}
      pt={8}
      pb={2}
      bg='amber.500'
      borderRadius={20}
      h={200}
      w={200}
      ml={6}
    >
      <HStack>
        <Heading color='gray.100' fontSize={20}>
          Título: <Text fontSize={16}>{title}</Text>
        </Heading>
      </HStack>
      <VStack flex={1} justifyContent='space-between'>
        <Text color='gray.100'>
          Senha : {passwordVisible ? password : '*********'}
        </Text>
        <Button
          onPress={handleToggleVisible}
          bg='transparent'
          _pressed={{ bg: 'transparent', opacity: 0.4 }}
        >
          {passwordVisible ? (
            <EyeSlash color={colors.gray[100]} weight='bold' />
          ) : (
            <Eye color={colors.gray[100]} weight='bold' />
          )}
        </Button>
      </VStack>
    </View>
  );
}
