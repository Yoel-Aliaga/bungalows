import { Button } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
// import { useEffect } from "react";

export const NavBar = () => {
  // Extraer las funciones de AuthContext
  // const {Login,isAuth} = useContext(AuthContext);
  
//   const [datos, setDatos] = React.useState([])

// React.useEffect(()=>{
// console.log("primer")
// if(b){

// }

// },[])
const userLS = JSON.parse(localStorage.getItem("userSesion"));
// alert("userLS : " + userLS)
  function salir() {
    localStorage.removeItem("userSesion")
    window.location.href = "/inicio"
  }

  return (
    <div className="navBar">
      <div className="contenedorBtns">
        <Button className="btns" component={Link} to="/inicio">
          Inicio
        </Button>
        <Button className="btns" component={Link} to="/nosotros">
          Nosotros
        </Button>
        <Button className="btns" component={Link} to="/fotos">
          Fotos
        </Button>

        <Button className="btns" component={Link} to="/reservas">
          Reservas
        </Button>

        <Button className="btns" component={Link} to="/contactos">
          Contactos
        </Button>
      </div>
      
      <div className="contenedorLogin">

        {userLS !== null &&
        <div className="txt">
        Hola : {userLS.nombres + " " + userLS.apellidos}
        </div>
        }

         {userLS === null &&
        <Button id="b" className="btns" component={Link} to="/login">
          Ingresar
        </Button>

         } 

        <Button
          style={{backgroundColor:"red"}}
          onClick={salir}
          className="btns "
          component={Link}
          to="/inicio"
        >Salir
        </Button>
      </div>
    </div>
  );
};

export default NavBar;

// const Botones = styled.button`
// background-color:blue;

// `;
