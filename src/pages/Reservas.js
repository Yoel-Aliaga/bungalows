import React, { useEffect } from "react";
// import { Link, useNavigate } from "react-router-dom";

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

  return <div>Reservas</div>;
};

export default Reservas;
