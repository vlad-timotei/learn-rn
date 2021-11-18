import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import HomeScreen from '../screens/HomeScreen';
import TagsScreen from '../screens/TagsScreen';
import LoginScreen from '../screens/LoginScreen';

const Stack = createNativeStackNavigator();

const AppNavigation = ({initialRouteName}) => {
  return (
    <NavigationContainer>
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
        <Stack.Screen
            options={{ headerShown: false }}
            name="home"
            component={HomeScreen}
        />
        <Stack.Screen
            name="tags"
            component={TagsScreen}
            options={{ title: "Tags Page"  }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default AppNavigation;