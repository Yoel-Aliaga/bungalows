import React from "react";
import {  Grid } from "@mui/material";

export const Fotos = () => {
  return (
    <div style={{backgroundColor:"#DDE4F1" , paddingTop:"50px"}}>
        
      <h2 style={{textAlign:"center" }} >Fotos</h2>
      <Grid container  justifyContent="center" gap={5} marginTop="50px">

        <Grid item className="fSize f1" xs={8} sm={8} md={4} ></Grid>
        <Grid item className="fSize f2" xs={8} sm={8} md={4}></Grid>
        <Grid item className="fSize f3" xs={8} sm={8} md={4}></Grid>
        <Grid item className="fSize f4" xs={8} sm={8} md={4}></Grid>
        <Grid item className="fSize f5" xs={8} sm={8} md={4}></Grid>
        <Grid item className="fSize f6" xs={8} sm={8} md={4}></Grid>
        <Grid item className="fSize f7" xs={8} sm={8} md={4}></Grid>
        <Grid item className="fSize f8" xs={8} sm={8} md={4}></Grid>
        <Grid item className="fSize f9" xs={8} sm={8} md={4}></Grid>
        <Grid item className="fSize f10" xs={8} sm={8} md={4}></Grid>
        <Grid item className="fSize f11" xs={8} sm={8} md={4}></Grid>
        <Grid item className="fSize f12" xs={8} sm={8} md={4}></Grid>
        <Grid item className="fSize f13" xs={8} sm={8} md={4}></Grid>
        <Grid item className="fSize f14" xs={8} sm={8} md={4}></Grid>
        <Grid item className="fSize f15" xs={8} sm={8} md={4}></Grid>
        <Grid item className="fSize f16" xs={8} sm={8} md={4}></Grid>



      
      </Grid>
    </div>
  );
};

export default Fotos;


// .bg__login {
//   background: url("../../assets/cover.png");
//   height: 100vh;
//   background-size: cover;
//   background-position: center;
//   background-repeat: no-repeat;
//   margin: 0 !important;
//   padding: 0 !important;
// }