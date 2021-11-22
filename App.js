import React, { useEffect, useState } from 'react';
import { ActivityIndicator } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';


import storage from './app/utils/storage';
import AuthContext from './app/auth/context';

import AppNavigation from './app/navigation/AppNavigation';
import AuthNavigation from './app/navigation/AuthNavigation';

import BetterAnimatedLogo from './app/components/animations/BetterAnimatedLogo';
import { GestureHandlerRootView, PanGestureHandler } from 'react-native-gesture-handler';



const App = () => {
  const [user, setUser] = useState();
  const [isReady, setIsReady] = useState(false);

  const getLoginData = async () =>{ 
    const userData = await storage.get('learn_RN');
    if ( !userData ){
      setIsReady(true);
      return;
    }
    setUser(userData);
    setIsReady(true);
  }  
  
  useEffect( () => {
    getLoginData();
 }, [])

  // return <GestureHandlerRootView style={{flex: 1}} ><BetterAnimatedLogo/></GestureHandlerRootView>

  if( !isReady )
    return <ActivityIndicator/>


  return (
    <GestureHandlerRootView style={{flex: 1}} >
      <AuthContext.Provider value={{user, setUser}}>
        <NavigationContainer>
          { user ? <AppNavigation/> : <AuthNavigation />}
        </NavigationContainer>
      </AuthContext.Provider>
    </GestureHandlerRootView>
  );
}

export default App;
