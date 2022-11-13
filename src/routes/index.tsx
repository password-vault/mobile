import { NavigationContainer } from '@react-navigation/native';
import { StackRoutes } from './stack';
import { BottomNavigator } from './tabs';

export function Routes() {
  return (
    <NavigationContainer>
      <StackRoutes />
    </NavigationContainer>
  );
}
