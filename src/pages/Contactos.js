import React, { Fragment } from "react";
import { Grid, Box, TextField, Button } from "@mui/material";
import Swal from "sweetalert2";
// xs={12} sm={12} md={12}
export const Contactos = () => {

  const Gracias = () => {
    Swal.fire({
      position: 'center',
      icon: 'success',
      title: 'Su mensaje ha sido enviado ... Gracias',
      showConfirmButton: false,
      timer: 1500
    })
  }



  return (
    <Fragment>
      <Grid
        container
        style={{
          // border: "1px solid green",
          justifyContent: "center",
          height: 500,
        }}
      >
        <Grid item marginTop="50px" xs={8} sm={8} md={4}>
          <Box className="Contactos">
            <div contactenos>
              <div style={{ fontWeight: "bolder" }}>Contáctenos :</div>
              <br></br>
              <div>Dirección : Av. Siempre vivas 123</div>
              <br></br>
              <div>Teléfono : (01) 456-4544</div>
              <br></br>
              <div>Whatsapp : 999 999 999</div>
              <br></br>
              <div>Email : qwerty@gmail.com</div>
              <br></br>
              <div>Horario : Martes a domingo de 08:00 am a 10:00 pm</div>
            </div>
            {/* <div style={{ width: "50px" }}></div> */}
          </Box>
        </Grid>
        <Grid item marginTop="50px" xs={8} sm={8} md={4}>
          <Box className="Escribanos :" style={{ fontWeight: "bolder" }}>
            <Box marginBottom="10px">
              <div>Escribanos</div>
            </Box>
            <Box marginBottom="10px">
              <TextField
                placeholder="Nombres y Apellidos "
                fullWidth
                marginBottom="10px"
              ></TextField>
            </Box>
            <Box marginBottom="10px">
              <TextField placeholder="Correo Electrónico" fullWidth></TextField>
            </Box>
            <Box marginBottom="20px">
              <TextField
                placeholder="Escriba aqui su mensaje... "
                fullWidth
                rows="50px"
                multiline="true"
              ></TextField>
            </Box>
            <Button variant="contained" fullWidth onClick={Gracias}>
              Enviar Mensaje
            </Button>
          </Box>
        </Grid>
      </Grid>
    </Fragment>
  );
};

export default Contactos;
