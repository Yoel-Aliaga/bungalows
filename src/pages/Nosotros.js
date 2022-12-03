import React from "react";
import { Grid, Card } from "@mui/material";

export const Nosotros = () => {
  return (
    <div style={{backgroundColor:"#DDE4F1", height:"100vh" }}>
      <Grid container justifyContent="center">
        <Grid item xs={8} sm={8} md={7} marginTop="100px">          
          <Card variant="outlined" style={{ padding: "40px", boxShadow:"0px 4px 20px 1px rgba(0,0,0, 0.2)", backgroundColor:"#EEECE1", color:"#366092", border:"1px solid gray" }}>
            <h2 style={{ textAlign: "center", marginBottom:"20px" }}>Misión</h2>
            <div>
              Estamos centrados en ofrecer los mejores servicios de recreación,
              esparcimiento, deportes y diversión como una nueva alternativa
              para la utilización del tiempo libre de grupos sociales,
              empresariales y familiares, con unas instalaciones bien equipadas,
              diseñadas estéticamente y con un equipo humano especializado en
              nuestros servicios
            </div>
          </Card>
        </Grid>
        
        <Grid item xs={8} sm={8} md={7} marginTop="100px">
          <Card variant="outlined" style={{ padding: "40px", boxShadow:"0px 4px 20px 1px rgba(0,0,0, 0.2)", backgroundColor:"#EEECE1", color:"#366092", border:"1px solid gray" }}>
            <h2 style={{ textAlign: "center", marginBottom:"20px"}}>Visión</h2>
            <div>
              Ser un centro turístico y recreativo caracterizado por poseer una
              gran variedad de alternativas de entretenimiento, recreación
              campestre, ambientación natural y hospedaje de alta calidad para
              el beneficio de nuestros clientes. Con un personal altamente
              capacitado en estrategias de atención personalizada.
            </div>
          </Card>
        </Grid>
      </Grid>
    </div>
  );
};

export default Nosotros;
