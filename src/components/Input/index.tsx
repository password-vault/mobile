import {
  Flex,
  View,
  Input as InputNative,
  IInputProps,
  IStackProps,
  HStack,
} from 'native-base';
import { ReactNode } from 'react';

interface IInpuContainerProps extends IStackProps {
  children: ReactNode;
}

interface IInputIconProps {
  children: ReactNode;
}

function InputContainer({ children, ...rest }: IInpuContainerProps) {
  return (
    <HStack
      borderBottomStyle='solid'
      borderWidth={1}
      borderColor='gray.300'
      borderRadius={4}
      w='100%'
      alignItems='center'
      {...rest}
      px={2}
      py={1}
    >
      {children}
    </HStack>
  );
}

function InputIcon({ children }: IInputIconProps) {
  return <View>{children}</View>;
}

interface InputProps extends IInputProps {}

function Input({ ...rest }: InputProps) {
  return <InputNative flex={1} {...rest} />;
}

export const InputRoot = {
  InputContainer,
  InputIcon,
  Input,
};
