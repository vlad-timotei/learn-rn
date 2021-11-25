import React from "react";

type AuthContextData = {
    user: {} | null;
    setUser: React.Dispatch<React.SetStateAction<{} | null>>;
  };

const AuthContext = React.createContext<AuthContextData>({} as AuthContextData);

export default AuthContext;