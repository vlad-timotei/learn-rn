import { useContext } from "react"

import AuthContext from "./context"
import auth from '../auth/auth';

const useAuth = () => {
  const { user, setUser } = useContext( AuthContext );

  const logOut = () => {
    auth.logout();
    setUser( null );
  }

  // Maybe implement logOut


  return { user, logOut, setUser };
}

export default useAuth;