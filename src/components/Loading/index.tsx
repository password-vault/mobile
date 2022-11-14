import { Spinner, View } from 'native-base';

export function Loading() {
  return (
    <View flex={1} alignItems='center' justifyContent='center'>
      <Spinner color='amber.500' />
    </View>
  );
}
