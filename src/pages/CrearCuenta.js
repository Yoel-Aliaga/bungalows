import React, { useState } from "react";
import { TextField, Button } from "@mui/material";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import { Grid, Box } from "@mui/material";

export const CrearCuenta = () => {

  let [usuario, setUsuario] = useState([
    { nombre: "", apellido: "", correo: "", contraseña: "" },
  ]);

  const handleInputNombre = (e) => {
    usuario.nombre = e.target.value;
  };

  const handleInputApellido = (e) => {
    usuario.apellido = e.target.value;
  };

  const handleInputCorreo = (e) => {
    usuario.correo = e.target.value;
  };

  const handleInputContraseña = (e) => {
    usuario.contraseña = e.target.value;
  };

  const addUser = () => {
  
    // TODO: Verifica si el email existe
    if (
      usuario.nombre !== undefined &&
      usuario.apellido !== undefined &&
      usuario.correo !== undefined &&
      usuario.contraseña !== undefined
    ) {
      const newUser = {
        nombre: usuario.nombre,
        apellido: usuario.apellido,
        correo: usuario.correo,
        contraseña: usuario.contraseña,
      };
      setUsuario([...usuario, newUser]);
      console.log(usuario);
      // TODO: Borrar los campos
      
    } else {
      Swal.fire({
        title: "Error",
        icon: "error",
        text: "Complete todos los campos",
      });
      return;
    }
    
    
    // Guardar la informacion de inicio
  localStorage.setItem("usuario", JSON.stringify(usuario));
  // Navega al inicio si tiene usuario
  // validateIsLogged();




  };

  return (
    // <div id="loginContained">
    // <div className="loginContainer">

    <Grid container justifyContent="center" height="100vh" alignItems="start">
      <Grid item xs={12} sm={6} md={3} marginTop="50px">
        <Box justifyContent="center" display="flex">          
          <h1>Crear Cuenta</h1>
        </Box>

        <Box marginBottom="10px">
          <TextField
            className="outlined-basic"
            label="Nombres"
            variant="outlined"
            fullWidth
            name="nombre"
            onChange={handleInputNombre}

            // required="true"
            // onChange={handleInputChange}
          />
        </Box>

        <Box marginBottom="10px">
        <TextField
          className="outlined-basic"
          label="Apellidos"
          variant="outlined"
          fullWidth
          onChange={handleInputApellido}
          
          // required="true"
          // onChange={handleInputChange}
          />
          </Box>


          <Box marginBottom="10px">
        <TextField
          className="outlined-basic"
          label="Correo Electrónico"
          variant="outlined"
          fullWidth
          type={"email"}
          // required="true"
          onChange={handleInputCorreo}
          />
          </Box>

          <Box marginBottom="10px">


        <TextField
          className="outlined-basic"
          label="Contraseña"
          variant="outlined"
          fullWidth
          type="password"
          // required="true"
          onChange={handleInputContraseña}
          />
          </Box>

        <Box marginBottom="20px">
          <Button variant="contained" onClick={addUser} fullWidth>
            Crear Cuenta{" "}
          </Button>
        </Box>

        <Box marginBottom="20px">
          <Button variant="outlined" fullWidth component={Link} to="/">
            Salir
          </Button>
        </Box>
        {/* </div> */}
        {/* </div> */}
      </Grid>
    </Grid>
  );
};

export default CrearCuenta;
