import storage from "../utils/storage";

const login_key = 'learn_RN';

const login = async ( username: string, password: string ) => {
  if ( ! username || ! password )
    return {
      error: 'Please complete both username and password!',
      value: null,
    }
  //other checks

  await storage.set( login_key, { username, password } );
  
  return {
    error: null, 
    value: {
      username,
      password,
    }
  }
}

const logout = () => {
  storage.remove( login_key );
}

export default {
  login,
  logout,
}

