import { CircleNotch } from 'phosphor-react-native';
import { useTheme } from 'styled-components/native';

import { Container } from './styles';

export function Loading() {
  const { colors } = useTheme();

  return (
    <Container>
      <CircleNotch
        size={24}
        color={colors.red[500]}
        style={{
          transform: [{ rotate: '360deg' }],
        }}
      />
    </Container>
  );
}
