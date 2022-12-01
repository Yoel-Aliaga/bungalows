import { Grid, Box, Button, Card } from "@mui/material";
import React, { Fragment, useEffect } from "react";
import { Bw } from "../components/objReserva";
// import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

export const Reservas = () => {
  // const history = useNavigate();
  // const user = JSON.parse(localStorage.getItem("user"));

  const userLS = JSON.parse(localStorage.getItem("userSesion"));

  function validar() {
    if (!userLS) {
      window.location.href = "/login";
      return;
    }
  }

  useEffect(() => {
    validar();
  }, []);

  function reservar (){
    Swal.fire({
      position: 'center',
      icon: 'success',
      title: 'Reserva exitosa',
      showConfirmButton: false,
      timer: 1500
    })
  }


  return (
    <Fragment>    

      <Grid container justifyContent="center">
        <Grid item xs={8} sm={8} md={8} marginTop="50px">          
          <Card variant="outlined" style={{ padding: "20px", boxShadow:"0px 4px 20px 1px rgba(0,0,0, 0.2)", borderRadius:"10px"}}>
            <div>
            <h3>{Bw[0].nombre}</h3>
            <Box>{Bw[0].descripcion}</Box><br></br>
            <Box>{Bw[0].detalle}</Box><br></br>
            <Box display="flex" justifyContent="end" alignItems="center" style={{marginTop:"10px"}}>
            <Box marginRight="40px" fontWeight="bold">Precio S/. {Bw[0].precio} </Box>
            <Button variant="contained" onClick={reservar}>Reservar</Button>
            </Box>
            </div>
          </Card>
        </Grid>
      </Grid>
      
      <Grid container justifyContent="center">
        <Grid item xs={8} sm={8} md={8} marginTop="50px">          
          <Card variant="outlined" style={{ padding: "20px", boxShadow:"0px 4px 20px 1px rgba(0,0,0, 0.2)", borderRadius:"10px"}}>
            <div>
            <h3>{Bw[1].nombre}</h3>
            <Box>{Bw[1].descripcion}</Box><br></br>
            <Box>{Bw[1].detalle}</Box><br></br>
            <Box display="flex" justifyContent="end" alignItems="center" style={{marginTop:"10px"}}>
            <Box marginRight="40px" fontWeight="bold">Precio S/. {Bw[1].precio} </Box>
            <Button variant="contained" onClick={reservar}>Reservar</Button>
            </Box>
            </div>
          </Card>
        </Grid>
      </Grid>

      <Grid container justifyContent="center">
        <Grid item xs={8} sm={8} md={8} marginTop="50px">          
          <Card variant="outlined" style={{ padding: "20px", boxShadow:"0px 4px 20px 1px rgba(0,0,0, 0.2)", borderRadius:"10px"}}>
            <div>
            <h3>{Bw[2].nombre}</h3>
            <Box>{Bw[2].descripcion}</Box><br></br>
            <Box>{Bw[2].detalle}</Box><br></br>
            <Box display="flex" justifyContent="end" alignItems="center" style={{marginTop:"10px"}}>
            <Box marginRight="40px" fontWeight="bold">Precio S/. {Bw[2].precio} </Box>
            <Button variant="contained" onClick={reservar}>Reservar</Button>
            </Box>
            </div>
          </Card>
        </Grid>
      </Grid>

      <Grid container justifyContent="center">
        <Grid item xs={8} sm={8} md={8} marginTop="50px">          
          <Card variant="outlined" style={{ padding: "20px", boxShadow:"0px 4px 20px 1px rgba(0,0,0, 0.2)", borderRadius:"10px"}}>
            <div>
            <h3>{Bw[3].nombre}</h3>
            <Box>{Bw[3].descripcion}</Box><br></br>
            <Box>{Bw[3].detalle}</Box><br></br>
            <Box display="flex" justifyContent="end" alignItems="center" style={{marginTop:"10px"}}>
            <Box marginRight="40px" fontWeight="bold">Precio S/. {Bw[3].precio} </Box>
            <Button variant="contained" onClick={reservar}>Reservar</Button>
            </Box>
            </div>
          </Card>
        </Grid>
      </Grid>

      <Grid container justifyContent="center">
        <Grid item xs={8} sm={8} md={8} marginTop="50px">          
          <Card variant="outlined" style={{ padding: "20px", boxShadow:"0px 4px 20px 1px rgba(0,0,0, 0.2)", borderRadius:"10px"}}>
            <div>
            <h3>{Bw[4].nombre}</h3>
            <Box>{Bw[4].descripcion}</Box><br></br>
            <Box>{Bw[4].detalle}</Box><br></br>
            <Box display="flex" justifyContent="end" alignItems="center" style={{marginTop:"10px"}}>
            <Box marginRight="40px" fontWeight="bold">Precio S/. {Bw[4].precio} </Box>
            <Button variant="contained" onClick={reservar}>Reservar</Button>
            </Box>
            </div>
          </Card>
        </Grid>
      </Grid>

      <Grid container justifyContent="center">
        <Grid item xs={8} sm={8} md={8} marginTop="50px">          
          <Card variant="outlined" style={{ padding: "20px", boxShadow:"0px 4px 20px 1px rgba(0,0,0, 0.2)", borderRadius:"10px"}}>
            <div>
            <h3>{Bw[5].nombre}</h3>
            <Box>{Bw[5].descripcion}</Box><br></br>
            <Box>{Bw[5].detalle}</Box><br></br>
            <Box display="flex" justifyContent="end" alignItems="center" style={{marginTop:"10px"}}>
            <Box marginRight="40px" fontWeight="bold">Precio S/. {Bw[5].precio} </Box>
            <Button variant="contained" onClick={reservar}>Reservar</Button>
            </Box>
            </div>
          </Card>
        </Grid>
      </Grid>

      <Grid container justifyContent="center">
        <Grid item xs={8} sm={8} md={8} marginTop="50px">          
          <Card variant="outlined" style={{ padding: "20px", boxShadow:"0px 4px 20px 1px rgba(0,0,0, 0.2)", borderRadius:"10px"}}>
            <div>
            <h3>{Bw[6].nombre}</h3>
            <Box>{Bw[6].descripcion}</Box><br></br>
            <Box>{Bw[6].detalle}</Box><br></br>
            <Box display="flex" justifyContent="end" alignItems="center" style={{marginTop:"10px"}}>
            <Box marginRight="40px" fontWeight="bold">Precio S/. {Bw[6].precio} </Box>
            <Button variant="contained" onClick={reservar}>Reservar</Button>
            </Box>
            </div>
          </Card>
        </Grid>
      </Grid>


























    </Fragment>
  );
};

export default Reservas;
