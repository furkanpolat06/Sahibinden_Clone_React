import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import SearchIcon from "@mui/icons-material/Search";
import Typography from "@mui/material/Typography";
import { Link } from "react-router-dom";
import Container from "@mui/material/Container";

import { Grid } from "@mui/material";
import "./Navbar.Module.css";
const ResponsiveAppBar = () => {
  return (
    <>
      <AppBar
        position="static"
        style={{ backgroundColor: "#3F475F" }}
        sx={{ display: { xs: "none", md: "flex" } }}
      >
        <Container>
          <Toolbar disableGutters>
            <Grid container spacing={2}>
              <Grid item xs={4} sx={{ display: { xs: "none", md: "flex" } }}>
                <img
                  src="https://iconape.com/wp-content/files/ay/337946/png/sahibinden-com-logo.png"
                  alt=""
                  style={{ width: "170px", height: "36px" }}
                ></img>
                <Typography
                  variant="h6"
                  noWrap
                  component="a"
                  href="/"
                  sx={{
                    mr: 2,
                    display: { xs: "none", md: "flex" },
                    fontFamily: "monospace",
                    fontWeight: 700,
                    letterSpacing: ".3rem",
                    color: "inherit",
                    textDecoration: "none",
                  }}
                ></Typography>
              </Grid>

              <Grid item xs={4} sx={{ display: { xs: "flex", md: "none" } }}>
                <img
                  src="https://image5.sahibinden.com/cms/files/corporate/news-default-2x.png"
                  alt=""
                  style={{ width: "30px", height: "30px" }}
                ></img>
              </Grid>

              <Grid item xs={8}>
                <Box
                  sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}
                ></Box>

                <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
                  {" "}
                  <input
                    autoComplete="given-name"
                    name="username"
                    required
                    className="input-box"
                    id="username"
                    label="Pazartesi Kazanç"
                    placeholder="Kelime, ilan no veya mağaza adı ile ara"
                    type="text"
                  />
                  <Typography
                    sx={{
                      fontSize: "15px",
                      marginTop: "7px",
                      marginLeft: "22px",
                      fontFamily: "Lucida Grande",
                    }}
                  >
                    Detaylı Arama{" "}
                  </Typography>
                </Box>
              </Grid>
            </Grid>

            <Box sx={{ flexGrow: 0, display: { xs: "none", md: "flex" } }}>
              <a
                href="/giris"
                style={{
                  fontSize: "11px",
                  color: "#ebebeb",
                  textShadow: "1px 1px 0 #2f3339",
                  textAlign: "right",
                  borderRight: "1px solid #60656E",
                  outline: "0",
                  listStyle: "none",
                  padding: "5px 10px 5px 10px",
                }}
              >
                GirişYap
              </a>
            </Box>
            <Box sx={{ flexGrow: 0, display: { xs: "none", md: "flex" } }}>
              <a
                href="/kayitol"
                style={{
                  fontSize: "11px",
                  color: "#ebebeb",
                  textShadow: "1px 1px 0 #2f3339",
                  textAlign: "right",
                  outline: "0",
                  listStyle: "none",
                  padding: "5px 10px 5px 10px",
                }}
              >
                HesapAç
              </a>
            </Box>
            <Box sx={{ flexGrow: 0, display: { xs: "none", md: "flex" } }}>
              <Link to="/ilanver" style={{ color: "white" }}>
                <button
                  type="button"
                  class="btn btn-primary"
                  style={{
                    padding: "10px 19px 8px 19px",
                    marginLeft: "11px",
                    fontSize: "13px",
                    fontWeight: "bold",
                    lineHeight: "1.4em",
                    width: "145px",
                    backgroundColor: "#489af1",
                  }}
                >
                  Ücretsiz* İlan Ver
                </button>
              </Link>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
      <AppBar
        position="static"
        sx={{ backgroundColor: "#32628D", display: { xs: "flex", md: "none" } }}
      >
        <Container>
          <Toolbar disableGutters>
            <Grid container>
              <Grid item xs={12} sx={{ display: { xs: "flex", md: "none" } }}>
                <Grid item xs={1}>
                  <img
                    src="https://image5.sahibinden.com/cms/files/corporate/news-default-2x.png"
                    alt=""
                    style={{ width: "30px", height: "30px" }}
                  ></img>
                  <Typography
                    variant="h6"
                    noWrap
                    component="a"
                    href="/"
                    sx={{
                      mr: 2,
                      display: { xs: "none", md: "flex" },
                      fontFamily: "monospace",
                      fontWeight: 700,
                      letterSpacing: ".3rem",
                      color: "inherit",
                      textDecoration: "none",
                    }}
                  ></Typography>
                </Grid>
                <Grid
                  item
                  xs={10}
                  sx={{
                    textAlign: "center",
                    fontSize: "16px",
                    fontWeight: "bold",
                    fontFamily: "Lucida Grande",
                  }}
                >
                  Arama
                </Grid>
                <Grid item xs={1}>
                  <SearchIcon></SearchIcon>
                </Grid>
              </Grid>
            </Grid>
          </Toolbar>
        </Container>
      </AppBar>
    </>
  );
};
export default ResponsiveAppBar;
