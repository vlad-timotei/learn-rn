import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import LoginScreen from '../screens/LoginScreen';

const Stack = createNativeStackNavigator();

const AuthNavigation = ({initialRouteName}) => {
  return (
      <Stack.Navigator
        initialRouteName={initialRouteName}
        screenOptions={{
            headerStyle: {
                backgroundColor: '#ccc',
            }
        }}
        >
        <Stack.Screen
            options={{ headerShown: false }}
            name="login"
            component={LoginScreen}
        />
      </Stack.Navigator>
  );
}

export default AuthNavigation;