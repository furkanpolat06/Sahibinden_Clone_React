import React, { useState } from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { InputAdornment, IconButton } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import Container from "@mui/material/Container";
import Card from "@mui/material/Card";
import { Link } from "react-router-dom";
import DirectionsCarFilledIcon from "@mui/icons-material/DirectionsCarFilled";
import HomeIcon from "@mui/icons-material/Home";
import DirectionsCarIcon from '@mui/icons-material/DirectionsCar';
import ConstructionIcon from '@mui/icons-material/Construction';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import AgricultureIcon from '@mui/icons-material/Agriculture';
import FormatPaintIcon from '@mui/icons-material/FormatPaint';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import EngineeringIcon from '@mui/icons-material/Engineering';
import ChildFriendlyIcon from '@mui/icons-material/ChildFriendly';
import PetsIcon from '@mui/icons-material/Pets';
import "./NotFound.Module.css";
const NotFound = () => {
  document.body.style.backgroundColor = "#f2f2f2";

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
            sx={{ mt: 3, border: "1px solid #dfdfdf", borderRadius: "10px" }}
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
            <Box
              component="form"
              noValidate
              style={{
                paddingLeft: "30px",
                paddingRight: "30px",
                width: "460px",
                paddingTop: "30px",
              }}
            >
              <p style={{ fontSize: "24px", textAlign: "center",marginBottom:"0"}}>
                Aradığınız sayfaya{" "}
                <span style={{ fontWeight: "bold" }}>ulaşılmadı.</span>
              </p>
              <p style={{ fontSize: "13px", textAlign: "center" }}>
                Aşağıdaki bağlantılar aradığınız içeriğe ulaşmanızı
                sağlayabilir.
              </p>
              <hr />
              <TextField
                margin="normal"
                fullWidth
                sx={{ height: "50px",mt:0 }}
                name="password"
                label="Ne aramıştınız?"
                type={"text"}
                id="password"
                autoComplete="current-password"
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton aria-label="Toggle Password" edge="end">
                        <SearchIcon/>
                      </IconButton>
                    </InputAdornment>
                  ),
                }}
              />
              <hr />
            </Box>
            <div className="list" style={{ margin: "30px" }}>
              <div className="row">
                <div className="col-md-6">
                  <div className="row">
                    <div className="col-md-1">
                      <HomeIcon
                        style={{
                          backgroundColor: "#FCAE1A",
                          color:"white",
                          borderRadius: "50%",
                          padding: "2px",
                        }}
                      />
                    </div>
                    <div className="col-md-10">
                      <a href="/">Emlak</a>
                    </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="row">
                    <div className="col-md-1">
                      <FormatPaintIcon
                        style={{
                          backgroundColor: "#459CE1",
                          color:"white",
                          borderRadius: "50%",
                          padding: "4px",
                        }}
                      />
                    </div>
                    <div className="col-md-10">
                      <a href="/">Ustalar ve Hizmetler</a>
                    </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="row">
                    <div className="col-md-1">
                      <DirectionsCarIcon
                        style={{
                          backgroundColor: "#F32B2D",
                          color:"white",
                          borderRadius: "50%",
                          padding: "3px",
                        }}
                      />
                    </div>
                    <div className="col-md-10">
                      <a href="/">Vasıta</a>
                    </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="row">
                    <div className="col-md-1">
                      <MenuBookIcon
                        style={{
                          backgroundColor: "#51B27C",
                          color:"white",
                          borderRadius: "50%",
                          padding: "4px",
                        }}
                      />
                    </div>
                    <div className="col-md-10">
                      <a href="/">Özel Ders Verenler</a>
                    </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="row">
                    <div className="col-md-1">
                      {" "}
                      <ConstructionIcon
                        style={{
                          backgroundColor: "#09B8BD",
                          color:"white",
                          borderRadius: "50%",
                          padding: "3px",
                        }}
                      />
                    </div>
                    <div className="col-md-10">
                      <a href="/">Yedek Parça , Aksesuar Donanım & Tuning</a>
                    </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="row">
                    <div className="col-md-1">
                      <EngineeringIcon
                        style={{
                          backgroundColor: "#94BB3E",
                          borderRadius: "50%",
                          color:"white",
                          padding: "4px",
                        }}
                      />
                    </div>
                    <div className="col-md-10">
                      <a href="/">İş İlanları</a>
                    </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="row">
                    <div className="col-md-1">
                      {" "}
                      <ShoppingCartIcon
                        style={{
                          backgroundColor: "#6C6FFC",
                          color:"white",
                          borderRadius: "50%",
                          padding: "4px",
                        }}
                      />
                    </div>
                    <div className="col-md-10">
                      <a href="/">İkinci El ve Sıfır Alışveriş</a>
                    </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="row">
                    <div className="col-md-1">
                      <ChildFriendlyIcon
                        style={{
                          backgroundColor: "#FE7A18",
                          color:"white",
                          borderRadius: "50%",
                          padding: "3px",
                        }}
                      />
                    </div>
                    <div className="col-md-10">
                      <a href="/">Yardımcı Arayanlar</a>
                    </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="row">
                    <div className="col-md-1">
                      <AgricultureIcon
                        style={{
                          backgroundColor: "#A55FFD"
                          ,color:"white",
                          borderRadius: "50%",
                          padding: "3px",
                        }}
                      />
                    </div>
                    <div className="col-md-10">
                      <a href="/">İş Makineleri & Sanayi</a>
                    </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="row">
                    <div className="col-md-1">
                      <PetsIcon
                        style={{
                          backgroundColor: "#19BAE8",
                          borderRadius: "50%",
                          color: "white",
                          padding: "2px",
                        }}
                      />
                    </div>
                    <div className="col-md-10">
                      <a href="/">Hayvanlar Alemi</a>
                    </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="row">
                    <div className="col-md-1">
                      <DirectionsCarFilledIcon
                        style={{
                          backgroundColor: "yellow",
                          borderRadius: "50%",
                          color:"#494942",
                          padding: "3px",
                        }}
                      />
                    </div>
                    <div className="col-md-10">
                      <a href="/">Oto360</a>
                    </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="row">
                    <div className="col-md-1">
                      <HomeIcon
                        style={{
                          backgroundColor: "yellow",
                          borderRadius: "50%",
                          padding: "2px",
                        }}
                      />
                    </div>
                    <div className="col-md-10">
                      <a href="/">Emlak360</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="footer-list">
              <ul style={{ display: "flex", textAlign: "center" }}>
                <li><a href="/"> Ana Sayfa</a></li>
                <li><a href="/">  İlan Ver</a></li>
                <li><a href="/"> Bana Özel</a></li>
                <li><a href="/"> Yardım</a></li>
              </ul>
            </div>
          </Card>
        </Box>
      </Container>
    </>
  );
};

export default NotFound;
