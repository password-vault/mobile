import { useAtom } from 'jotai';
import { Button, HStack, Modal, Text } from 'native-base';
import { X } from 'phosphor-react-native';
import { useState, useEffect } from 'react';
import { baseApi } from '../../configs';
import {
  modalDeleteIdAtom,
  modalDeleteAtom,
} from '../../store/ModalDeleteAtom';
import { reactotronLog } from '../../utils/reactotronLog';

interface IDeletePasswordModalProps {
  refetch?: () => Promise<void>;
}

interface IPasswordProps {
  id: string;
  title: string;
  password: string;
}

export function DeletePassword({ refetch }: IDeletePasswordModalProps) {
  const [currentPassword, setCurrentPassword] = useState<IPasswordProps>(null);
  const [isOpen, setIsOpen] = useAtom(modalDeleteAtom);
  const [id, setId] = useAtom(modalDeleteIdAtom);

  useEffect(() => {
    if (!id) return;

    currentPasswordSelected();
  }, [id]);

  async function currentPasswordSelected() {
    try {
      const { data } = await baseApi.get(`/passwords/${id}`);
      setCurrentPassword(data);
      reactotronLog(data);
      await refetch();
    } catch (err) {
      reactotronLog(err);
    }
  }

  function handleClose() {
    setId('');
    setIsOpen(false);
  }

  return (
    <Modal isOpen={isOpen} onClose={handleClose} px={4}>
      <Modal.Content bg='gray.700'>
        <Modal.Header
          flexDir='row'
          justifyContent='space-between'
          alignItems='center'
          bg='gray.700'
        >
          <Text
            color='gray.100'
            fontSize={22}
            fontWeight='semibold'
            textTransform='uppercase'
          >
            {currentPassword?.title}
          </Text>
          <Button
            bg='transparent'
            _pressed={{ bg: 'transparent', opacity: 0.3 }}
            onPress={handleClose}
          >
            <X size={20} color='white' />
          </Button>
        </Modal.Header>
        <Modal.Body>
          <Text color='white' my={4} textAlign='center'>
            Tem certeza de deseja excluir ?
          </Text>
          <HStack space={4} justifyContent='center'>
            <Button bg='red.500' _pressed={{ bg: 'red.600' }} px={8}>
              <Text color='gray.100'>Sim</Text>
            </Button>
            <Button bg='green.500' _pressed={{ bg: 'green.600' }} px={8}>
              <Text color='gray.100'>Não</Text>
            </Button>
          </HStack>
        </Modal.Body>
      </Modal.Content>
    </Modal>
  );
}
