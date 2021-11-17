import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import HomeScreen from '../screens/HomeScreen';
import TagsScreen from '../screens/TagsScreen';

const Stack = createNativeStackNavigator();

const AppNavigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
            headerStyle: {
                backgroundColor: '#ccc',
            }
        }}
        >
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