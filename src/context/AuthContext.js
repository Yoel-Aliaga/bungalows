import { createContext, useState } from "react";

export const AuthContext = createContext();

export const AuthProvider = (props) => {
  const { children } = props;

  const [user, setUser] = useState(
    JSON.parse(localStorage.getItem("user")) ?? {}
  );

  function login(email, password) {
    if (email !== "" || password !== "1") return false;

    const user = { email, password };
    // Guardar el localStorage
    localStorage.setItem("user", JSON.stringify(user));
    setUser(user);
  }

  function logout() {
    //  borra el localStorage
    localStorage.clear();
    setUser({});
    alert("sesion cerrada")
    // navega
    window.location.href = "/login";
  }

  // validar si la sesion existe
  function isAuth() {
    return Object.entries(user).length !== 0;
    
  }

  return (
    <AuthContext.Provider value={{ user, login, logout, isAuth }}>
      {children}
    </AuthContext.Provider>
  );
};

