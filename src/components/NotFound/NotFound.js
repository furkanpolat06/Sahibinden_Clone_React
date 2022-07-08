import React, { useState } from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import Checkbox from "@mui/material/Checkbox";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import { InputAdornment, IconButton } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import Container from "@mui/material/Container";
import Card from "@mui/material/Card";
import GirisFooter from "../GirisFooter/GirisFooter";
import { Link } from "react-router-dom";
import './NotFound.Module.css'
const NotFound = () => {
  document.body.style.backgroundColor = "#f8f8f8";

  return (
    <>
      <Container component="main" maxWidth="xs" sx={{ mb: 10 }}>
        <CssBaseline />
        <Box
          sx={{
            marginTop: 5,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Card
            sx={{ mt: 3, border: "1px solid #dfdfdf", borderRadius: "3px" }}
          >
            <img
              src="https://iconape.com/wp-content/files/ay/337946/png/sahibinden-com-logo.png"
              alt=""
              style={{
                width: "240px",
                height: "51px",
                display: "block",
                margin: "0 auto",
                marginTop: "20px",
              }}
            ></img>
            <Box component="form" noValidate style={{ paddingLeft:"30px",paddingRight:"30px", width: "460px",paddingTop:"30px"}}>
              <p style={{ fontSize: "24px", textAlign: "center" }}>
                Aradığınız sayfaya{" "}
                <span style={{ fontWeight: "bold" }}>ulaşılmadı.</span>
              </p>
              <p style={{ fontSize: "13px" }}>
                Aşağıdaki bağlantılar aradığınız içeriğe ulaşmanızı
                sağlayabilir.
              </p>
              <hr />
              <TextField
                margin="normal"
                fullWidth
                sx={{ height: "50px" }}
                name="password"
                label="Ne aramıştınız?"
                type={"text"}
                id="password"
                autoComplete="current-password"
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton aria-label="Toggle Password" edge="end">
                        <SearchIcon />
                      </IconButton>
                    </InputAdornment>
                  ),
                }}
              />
              <hr />
             
            </Box>
            <div className="list">
                <div className="row">
                  <div className="col-md-6">
                    <ul>
                      <li><a href="/">Emlak</a></li>
                      <li><a href="/">Vasıta.</a></li>
                      <li><a href="/">Yedek Parça, Aksesuar Donanım & Tuning</a></li>
                      <li><a href="/">İkinci El ve Sıfır Alışveriş</a></li>
                      <li><a href="/">İş Makineleri & Sanayi</a></li>
                      <li><a href="/">Oto360</a></li>
                    </ul>
                  </div>
                  <div className="col-md-6">
                    <ul>
                      <li><a href="/">Ustalar ve Hizmetler</a></li>
                      <li><a href="/">Özel Ders Verenler</a></li>
                      <li><a href="/">İş İlanları</a></li>
                      <li><a href="/">Yardımcı Arayanlar</a></li>
                      <li><a href="/">Hayvanlar Alemi</a></li>
                      <li><a href="/">Emlak360</a></li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="footer-list" >
                <ul style={{display:"flex",textAlign:"center"}}>
                  <li>Ana Sayfa</li>
                  <li> İlan Ver</li>
                  <li>Bana Özel</li>
                  <li>Yardım</li>
                </ul>
              </div>
          </Card>
        </Box>
      </Container>
      
    </>
  );
};

export default NotFound;
