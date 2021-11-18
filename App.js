import * as React from 'react';
import AppNavigation from './app/navigation/AppNavigation';

const App = () => {
  
  const getUser = async () => {
    try {
      const value = await AsyncStorage.getItem('learn_login')
      if( value !== null) {
        return value;
      }
    } catch(e) {
      return null;
    }
 }

  //Not working!!
  const isLoggedIn = getUser();
  console.log(isLoggedIn);
  const initialRouteName = isLoggedIn ? 'home' : 'login';
  //Will always load login
  //This renders every time! Maybe useEffect?


  return (
    <AppNavigation initialRouteName={initialRouteName}/>
  );
}

export default App;