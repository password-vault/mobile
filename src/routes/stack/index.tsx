import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { Login } from '../../screens/Login';
import { CreateAccount } from '../../screens/CreateAccount';
import { BottomNavigator } from '../tabs';
import { useUser } from '../../store/user';

const { Navigator, Screen } = createNativeStackNavigator();

export function StackRoutes() {
  return (
    <Navigator screenOptions={{ headerShown: false }}>
      <Screen name='login' component={Login} />
      <Screen name='createAcccount' component={CreateAccount} />
      <Screen name='tabs' component={BottomNavigator} />
    </Navigator>
  );
}
