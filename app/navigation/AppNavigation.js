import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import HomeScreen from '../screens/HomeScreen';
import TagsScreen from '../screens/TagsScreen';
import ImagesScreen from '../screens/ImagesScreen';
import Cirlce from '../components/animations/Circle';
import BetterAnimatedLogo from '../components/animations/BetterAnimatedLogo';


const Stack = createNativeStackNavigator();

const AppNavigation = () => {
  return (
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
            <Stack.Screen
                name="images"
                component={ImagesScreen}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name="animations_circle"
                component={Cirlce}
            />
            <Stack.Screen
                name="animations_logo"
                options={{ headerShown: false }}
                component={BetterAnimatedLogo}
            />
      </Stack.Navigator>
  );
}

export default AppNavigation;