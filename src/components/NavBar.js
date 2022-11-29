import { Button } from "@mui/material";
import React from "react";
import { Link, useNavigate } from "react-router-dom";

export const NavBar = () => {
  // Extraer las funciones de AuthContext
  // const {Login,isAuth} = useContext(AuthContext);

  function salir() {
    localStorage.clear();
  }

  return (
    <div className="navBar">
      <div>
        <Button className="btns" component={Link} to="/inicio">
          Inicio
        </Button>
        <Button className="btns" component={Link} to="/nosotros">
          Nosotros
        </Button>
        <Button className="btns" component={Link} to="/sedes">
          Sedes
        </Button>

        <Button className="btns" component={Link} to="/reservas">
          Reservas{" "}
        </Button>

        <Button className="btns" component={Link} to="/contactos">
          Contactos
        </Button>
      </div>

      <div className="contenedorLogin">
        <Button className="btns" component={Link} to="/login">
          Ingresar
        </Button>

      {/* <Button>-</Button> */}
        {/* <Button style={{display : "none" }} className="btns" component={Link} to="/">Logout</Button>       */}

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
