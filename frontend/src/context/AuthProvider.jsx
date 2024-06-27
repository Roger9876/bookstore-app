import { createContext, useContext, useState } from "react"

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const initialAuthUser = localStorage.getItem("user");
  const [authUser, setAuthUser] = useState(
    initialAuthUser ? JSON.parse(initialAuthUser) : null
  );

  return (
    <AuthContext.Provider value={[authUser, setAuthUser]}>
      {children}
    </AuthContext.Provider>
  )
}

export default AuthProvider

// eslint-disable-next-line react-refresh/only-export-components
export const useAuth = () => useContext(AuthContext);
