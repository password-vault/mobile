import { useState } from 'react';
import { Button, Flex, Heading, HStack, Text, View, VStack } from 'native-base';
import { Eye, EyeSlash, Trash } from 'phosphor-react-native';
import { useTheme } from 'styled-components';
import { useAtom } from 'jotai';
import {
  modalDeleteIdAtom,
  modalDeleteAtom,
} from '../../store/ModalDeleteAtom';
interface IPasswordProps {
  id: string;
  title: string;
  password: string;
}
//<DeletePassword />

export function Card({ password, title, id }: IPasswordProps) {
  const [passwordVisible, setPasswordVisible] = useState(false);
  const { colors } = useTheme();
  const [_, setIsOpen] = useAtom(modalDeleteAtom);
  const [, setId] = useAtom(modalDeleteIdAtom);

  function handleToggleVisible() {
    setPasswordVisible((prev) => !prev);
  }

  function handleOpenModalDelete() {
    console.log(id);
    setIsOpen(true);
    setId(id);
  }

  return (
    <View
      px={8}
      pt={8}
      pb={2}
      bg='gray.700'
      borderRadius={20}
      h={200}
      w={250}
      ml={6}
    >
      <HStack>
        <Text
          fontSize={16}
          color='amber.500'
          textTransform='uppercase'
          fontWeight='semibold'
        >
          {title}
        </Text>
      </HStack>
      <VStack flex={1} justifyContent='space-between'>
        <Text color='gray.100'>
          Senha : {passwordVisible ? password : '*********'}
        </Text>
        <HStack justifyContent='space-between'>
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
          <Button
            bg='transparent'
            _pressed={{ bg: 'transparent', opacity: 0.8 }}
            onPress={handleOpenModalDelete}
          >
            <Trash size={25} weight='fill' color={colors.red[500]} />
          </Button>
        </HStack>
      </VStack>
    </View>
  );
}
