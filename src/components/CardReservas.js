import React, {Fragment} from 'react'
import { Grid, Box, Button, Card } from "@mui/material";
import { Bw } from './objReserva';


export const CardReservas = ({a}) => {
  return (  

// <Fragment>      
//       {/* <Grid container justifyContent="center">
//         <Grid item xs={8} sm={8} md={8} marginTop="50px">          
//           <Card variant="outlined" style={{ padding: "20px", boxShadow:"0px 4px 20px 1px rgba(0,0,0, 0.2)", borderRadius:"10px"}}>
//             <div> */}
//             <h3>( {a})</h3>
//             {/* <Box>{Bw[0].descripcion}</Box><br></br>
//             <Box>{Bw[0].detalle}</Box><br></br>
//             <Box display="flex" justifyContent="end" alignItems="center" style={{marginTop:"10px"}}>
//             <Box marginRight="40px" fontWeight="bold">Precio S/. {Bw[0].precio} </Box>
//             <Button variant="contained">Reservar</Button> */}
//             {/* </Box> */}

//             {/* </div>
//           </Card>
//         </Grid>
        
//       </Grid> */}
//     </Fragment>




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
            <Button variant="contained">Reservar</Button>
            </Box>

            </div>
          </Card>
        </Grid>

      </Grid>
    </Fragment>
  )
  }

export default CardReservas