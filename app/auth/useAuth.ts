import { useContext } from "react"

import AuthContext from "./context"
import auth from './auth';

type AuthData = {
  user: {} | null;
  setUser: React.Dispatch<React.SetStateAction<{} | null>>;
};

const useAuth = () => {
  const { user, setUser } = useContext<AuthData>( AuthContext );

  const logOut = () => {
    auth.logout();
    setUser( null );
  }

  return { user, logOut, setUser };
}

export default useAuth;