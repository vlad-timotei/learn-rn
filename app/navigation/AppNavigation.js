import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import HomeScreen from '../screens/HomeScreen';
import TagsScreen from '../screens/TagsScreen';
import ImagesScreen from '../screens/ImagesScreen';

const Stack = createNativeStackNavigator();

const AppNavigation = ({initialRouteName}) => {
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
            name="home"
            component={HomeScreen}
        />
        <Stack.Screen
            name="tags"
            component={TagsScreen}
            options={{ title: "Tags Page"  }}
        />
        <Stack.Screen
            name="images"
            component={ImagesScreen}
            options={{ headerShown: false }}
        />
      </Stack.Navigator>
  );
}

export default AppNavigation;