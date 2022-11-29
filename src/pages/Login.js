import { Button, formGroupClasses } from "@mui/material";
import React, { useState, useEffect, useContext } from "react";
import { Card, TextField } from "@mui/material";
import { Link, Navigate } from "react-router-dom";
import Swal from "sweetalert2";

import { useNavigate } from "react-router-dom";

export const Login = () => {
  // Extraer las funciones de AuthContext
  // const {Login,isAuth} = useContext(AuthContext);

  const [user, setUser] = useState({
    email: "",
    password: "",
  });

const history = useNavigate();

  const handleInputChange = (e) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });
    // setUser(e.target.value);
    // console.log(user);
  };

  const handleLogin = () => {
    // console.log(user)
    if (!user.email || !user.password) {
      Swal.fire
      ({
        title: "Error",
        icon: "error",
        text: "Debe llenar todos los campos",
      });
      return;
    }
    
    // Guardar la informacion de inicio  
    localStorage.setItem("user",JSON.stringify(user));
    // Navega al inicio si tiene usuario
    validateIsLogged();
  };

  
  
  const validateIsLogged =() => {
    const  user = JSON.parse(localStorage.getItem("user"));
    // no es null 
    if (user){
      history("/");
    }
  }
  
  
  useEffect(() => {
    validateIsLogged()
  }, []);



  // const inicio = Login(user.email, user.password);

  // if (isAuth()){
  //   return <Navigate to = "/"/>
  // }

  return (
    <div id="loginContained">
      <div className="loginContainer">
        <h1>Login</h1>
        <TextField
          className="outlined-basic"
          label="Correo Electrónico"
          variant="outlined"
          fullWidth
          name="email"
          type="email"
          value={user.email}
          onChange={handleInputChange}
        />
        <TextField
          className="outlined-basic"
          label="Contraseña"
          variant="outlined"
          fullWidth
          name="password"
          type="password"
          value={user.password}
          onChange={handleInputChange}
        />
        <Button variant="contained" fullWidth onClick={handleLogin}>
          Ingresar{" "}
        </Button>
        {/* <a href="#">Olvidó su contraseña?</a> */}
        <Button variant="outlined" fullWidth component={Link} to="/crearCuenta">
          Crear cuenta
        </Button>
      </div>
    </div>
  );
};

export default Login;
