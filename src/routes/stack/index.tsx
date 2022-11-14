import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { Login } from '../../screens/Login';
import { LoginInAccountPlatform } from '../../screens/LoginAccountPlatform';
import { Home } from '../../screens/Home';
import { CreateNewAccountInPlatform } from '../../screens/CreateNewAccount';

const { Navigator, Screen } = createNativeStackNavigator();

export function StackRoutes() {
  return (
    <Navigator screenOptions={{ headerShown: false }}>
      <Screen name='login' component={Login} />
      <Screen name='loginAccountPlatform' component={LoginInAccountPlatform} />
      <Screen
        name='createNewAccountInPlatform'
        component={CreateNewAccountInPlatform}
      />
      <Screen name='home' component={Home} />
    </Navigator>
  );
}
