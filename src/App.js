import React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

import { NavBar } from "./components/NavBar";

import { Inicio } from "./pages/Inicio";
import { Nosotros } from "./pages/Nosotros";
import { Sedes } from "./pages/Sedes.js";
import { Reservas } from "./pages/Reservas";
import { Contactos } from "./pages/Contactos";
import { NotFound } from "./pages/NotFound";
import { Login } from "./pages/Login";
import { CrearCuenta } from "./pages/CrearCuenta";

import { AuthProvider } from "./context/AuthContext";

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <NavBar></NavBar>
        <Routes>
          <Route path="/" element={<Inicio />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/inicio" element={<Inicio />}></Route>
          <Route path="/nosotros" element={<Nosotros />}></Route>
          <Route path="/sedes" element={<Sedes />}></Route>
          <Route path="/reservas" element={<Reservas />}></Route>
          <Route path="/contactos" element={<Contactos />}></Route>
          <Route path="/crearCuenta" element={<CrearCuenta />}></Route>

          <Route path="*" element={<NotFound />}></Route>
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
