import { Button } from "@mui/material";
import React, { useState, useEffect} from "react";
import {TextField } from "@mui/material";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import { Grid, Box } from "@mui/material";

// import { useNavigate } from "react-router-dom";

export const Login = () => {
  // Extraer las funciones de AuthContext
  // const {Login,isAuth} = useContext(AuthContext);
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  // const history = useNavigate();

  const handleInputChange = (e) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });
    // setUser(e.target.value);
    // console.log(user);
    
  };

  const handleLogin = () => {
    const userLS = JSON.parse(localStorage.getItem("user"));
    // console.log(user)
    if (!user.email || !user.password) {
      Swal.fire({
        title: "Error",
        icon: "error",
        text: "Debe llenar todos los campos",
      });
      return;
    }else{
      // alert("Datos de input : " + user.email + " " + user.password) 
      // alert("Datos de LS : " + userLS.email + " " + userLS.password) 
      //TODO Verifica que los datos del JSON sean iguales a los ingresados
      if(userLS !== null){        
        if (user.email === userLS.email && user.password === userLS.password){
          // alert("ingreso exitoso")
          localStorage.setItem("userSesion", JSON.stringify(userLS));
        window.location.href = "/reservas"

        }else{
          // alert("fallo")
          Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Usuario o clave incorrecta',
            // footer: '<a href="">Why do I have this issue?</a>'
          })
        }        
      }
      else{
        //navega a registrar
        window.location.href = "/registrar"
      }

    }

    // Guardar la informacion de inicio
    // localStorage.setItem("user", JSON.stringify(user));
    // Navega al inicio si tiene usuario
    // validateIsLogged();
  };
  
  
  const validateIsLogged = () => {
    // Obtiene datos del JSON
    // const userLS = JSON.parse(localStorage.getItem("user"));
    // Datos del localStorage
    // alert ("Datos de LocalStorage : " + userLS.email + " " + userLS.password) 

  };

  useEffect(() => {
    // al renderizar trae los datos almacenados en JSON
    validateIsLogged();
  }, []);


  

  // const inicio = Login(user.email, user.password);

  // if (isAuth()){
  //   return <Navigate to = "/"/>
  // }

  return (
      <div style={{backgroundColor:"#DDE4F1"}}>
      

    <Grid container justifyContent="center" height="100vh" alignItems="start">
      <Grid item xs={12} sm={6} md={3} marginTop="50px">
        <Box justifyContent="center" display="flex">
          <h1>Login</h1>
        </Box>

        <Box marginBottom="10px">
          <TextField
            // className="outlined-basic"
            label="Correo Electrónico"
            variant="outlined"
            fullWidth
            name="email"
            type="email"
            value={user.email}
            onChange={handleInputChange}
            style={{backgroundColor:"white"}}
            // ref={textInput}
            />
        </Box>
        <Box marginBottom="20px">
          <TextField
            className="outlined-basic"
            label="Contraseña"
            variant="outlined"
            fullWidth
            name="password"
            type="password"
            value={user.password}
            onChange={handleInputChange}
            style={{backgroundColor:"white"}}
            />
        </Box>

        <Box marginBottom="20px">
          <Button variant="contained" fullWidth onClick={handleLogin}>
            Ingresar
          </Button>
        </Box>

        <Button variant="outlined" fullWidth component={Link} to="/registrar" style={{backgroundColor:"white"}}>
          Crear cuenta
        </Button>
      </Grid>
    </Grid>
            </div>
  );
};

export default Login;
