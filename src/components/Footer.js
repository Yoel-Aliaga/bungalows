import React from "react";
import { Grid, Box } from "@mui/material";

export function Footer() {
  return (
    <div
      style={{ height: "200px", backgroundColor: "#2F7DE3", color: "white" }}
    >
      <Grid container justifyContent="center"  gap="250px" xs={12} sm={12} md={12} className="foot">
        <Grid item className="oculta">
          <Box >
            Nosotros <br></br> <br></br>
            Historia <br></br>
            Misión y Visión <br></br>
            Nuestros Valores <br></br>
            Organización <br></br>
            Asociaciones<br></br>
            Estatuto Oficial
          </Box>
        </Grid>

        <Grid item >
          <Box>
            Contáctenos <br></br> <br></br>
            945 485 999 <br></br>
            qwerty@gmail.com <br></br>
          </Box>
        </Grid>

        <Grid item className="oculta">
          <Box>
            Legal <br></br> <br></br>
            Términos de uso<br></br>
            Acuerdo de licencia<br></br>
            Política de privacidad<br></br>
            Información de Copyright<br></br>
            Política de cookies<br></br>
            Cookies Settings<br></br>
          </Box>
        </Grid>

        <Grid item className="oculta">
          <Box>
            Redes Sociales <br></br> <br></br>
            <div >
              <div style={{ display: "flex" }}>
                <div className="F"></div> <div> Facebook</div>
              </div>
              <br></br>
              <div style={{ display: "flex" }}>
                <div className="T"></div>+
                <div>Twitter</div>
              </div>
              <br></br>
              <div style={{ display: "flex" }}>
                <div className="P"></div>
                <div>Pinterest</div>
              </div>
            </div>
          </Box>
        </Grid>
      </Grid>
    </div>
  );
}

export default Footer;
