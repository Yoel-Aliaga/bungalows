import { Button } from "@mui/material";
import React, { useState } from "react";
import { TextField } from "@mui/material";
import Swal from "sweetalert2";
import { Grid, Box } from "@mui/material";

export const Registrar = () => {
  // Extraer las funciones de AuthContext
  // const {Login,isAuth} = useContext(AuthContext);

  const [user, setUser] = useState({
    email: "",
    password: "",
    nombres: "",
    apellidos: "",
  });

  const handleInputChange = (e) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });
    // setUser(e.target.value);
    // console.log(user);
  };

  const handleLogin = () => {
    // si esta vacio da error
    if (!user.email || !user.password) {
      Swal.fire({
        title: "Error",
        icon: "error",
        text: "Debe llenar todos los campos",
      });
      return;
    }

    // Si ambos campos esta llenos
    // Guardar la informacion de inicio
    localStorage.setItem("user", JSON.stringify(user));
    localStorage.setItem("userLS", JSON.stringify(user));
    //Mensaje de bienvenida
    Swal.fire({
      position: "center",
      icon: "success",
      title: "Bienvenido",
      showConfirmButton: false,
      timer: 1500,
    });
    //Espera 1500 para realizar la navegacion al inicio
    setTimeout(() => {
      window.location.href = "/login";
    }, 1500);
  };

  return (
    <div style={{backgroundColor:"#DDE4F1"}}>

    <Grid container justifyContent="center" height="100vh" alignItems="start">
      <Grid item xs={12} sm={6} md={3} marginTop="50px">
        <Box justifyContent="center" display="flex">
          <h1>Registrar</h1>
        </Box>

        <Box marginBottom="10px">
          <TextField
            className="outlined-basic"
            label="Nombres"
            variant="outlined"
            fullWidth
            name="nombres"
            type="text"
            value={user.nombres}
            onChange={handleInputChange}
            style={{backgroundColor:"white"}}

            />
        </Box>

        <Box marginBottom="10px">
          <TextField
            className="outlined-basic"
            label="Apellidos"
            variant="outlined"
            fullWidth
            name="apellidos"
            type="text"
            value={user.apellidos}
            onChange={handleInputChange}
            style={{backgroundColor:"white"}}

            />
        </Box>
        <Box marginBottom="10px">
          <TextField
            className="outlined-basic"
            label="Correo Electr??nico"
            variant="outlined"
            fullWidth
            name="email"
            type="email"
            value={user.email}
            onChange={handleInputChange}
            style={{backgroundColor:"white"}}

            />
        </Box>
        <Box marginBottom="20px">
          <TextField
            className="outlined-basic"
            label="Contrase??a"
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
            Registrar
          </Button>
        </Box>
      </Grid>
    </Grid>
            </div>
  );
};

export default Registrar;
