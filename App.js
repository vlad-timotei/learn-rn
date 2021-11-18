import React, { useEffect, useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';


import storage from './app/utils/storage';
import AuthContext from './app/auth/context';

import AppNavigation from './app/navigation/AppNavigation';
import AuthNavigation from './app/navigation/AuthNavigation';

const App = () => {
  const [user, setUser] = useState();
  useEffect( () => {
    const getLoginData = async () =>{ 
      const userData = await storage.get('learn_RN');
      if ( !userData )
        return;
      setUser(userData);
    } 
    getLoginData();
 }, [])


  return (
    <AuthContext.Provider value={{user, setUser}}>
      <NavigationContainer>
        { user ? <AppNavigation/> : <AuthNavigation />}
      </NavigationContainer>
    </AuthContext.Provider>
  );
}

export default App;