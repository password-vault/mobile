import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { useNavigation } from '@react-navigation/native';
import { useNativeBase } from 'native-base';
import { Detective, House } from 'phosphor-react-native';
import { useEffect } from 'react';
import { useTheme } from 'styled-components';

import { Home } from '../../screens/Home';
import { NewPassword } from '../../screens/NewPassword';
import { useUser } from '../../store/user';

const { Navigator, Screen } = createBottomTabNavigator();

export function BottomNavigator() {
  const { colors } = useTheme();
  const { user } = useUser((state) => state);
  const navigator = useNavigation();

  useEffect(() => {
    if (!user) navigator.navigate('login');
  }, []);

  return (
    <Navigator
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: '#ef4444',
        tabBarActiveBackgroundColor: '#fef9c3',
        tabBarInactiveTintColor: '#f5f5f4',
        tabBarStyle: {
          backgroundColor: colors.gray[700],
          position: 'absolute',
          bottom: 20,
          borderRadius: 20,
          margin: 10,
          borderColor: 'transparent',
          overflow: 'hidden',
        },
        tabBarLabelStyle: {
          fontWeight: 'bold',
        },
        tabBarLabelPosition: 'beside-icon',
      }}
    >
      <Screen
        name='home'
        options={{
          tabBarIcon: ({ color, size }) => (
            <House size={size} color={color} weight='fill' />
          ),
          tabBarLabel: 'HOME',
        }}
        component={Home}
      />

      <Screen
        name='new'
        options={{
          tabBarIcon: ({ color, size }) => (
            <Detective size={size} color={color} weight='fill' />
          ),
          tabBarLabel: 'NOVA SENHA',
        }}
        component={NewPassword}
      />
    </Navigator>
  );
}
