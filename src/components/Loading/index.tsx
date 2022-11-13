import { useTheme } from 'styled-components/native';
import { Spinner, View } from 'native-base';

export function Loading() {
  const { colors } = useTheme();

  return (
    <View flex={1} alignItems='center' justifyContent='center'>
      <Spinner />
    </View>
  );
}
