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
import Container from "@mui/material/Container";
import Card from "@mui/material/Card";
import GirisFooter from "../GirisFooter/GirisFooter";
import { Link } from "react-router-dom";
const Giris = () => {
  document.body.style.backgroundColor = "#f8f8f8";
  const [values, setValues] = useState({
    email: "",
    password: "",
    showPassword: false,
  });
  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };
  const handleClickShowPassword = () => {
    setValues({ ...values, showPassword: !values.showPassword });
  };
  return (
    <>
      <Container component="main" maxWidth="xs" sx={{ mb: 10 }}>
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <img
            src="https://iconape.com/wp-content/files/ay/337946/png/sahibinden-com-logo.png"
            alt=""
            style={{ width: "170px", height: "36px" }}
          ></img>

          <Card
            sx={{ mt: 3, border: "1px solid #dfdfdf", borderRadius: "3px" }}
          >
            <Box
              component="form"
              noValidate
              sx={{ p: "50px", mt: 1, height: "501px", width: "442px" }}
            >
              <Typography
                sx={{
                  fontSize: "22px",
                  fontWeight: "600",
                  minHeight: "40px",
                  marginBottom: "12px",
                }}
              >
                Bilgilendirmeleri <br /> görüntülemek için giriş yapın
              </Typography>
              <TextField
                margin="normal"
                fullWidth
                sx={{ height: "50px" }}
                id="email"
                label="E-posta"
                name="email"
                autoComplete="email"
                autoFocus
              />
              <TextField
                margin="normal"
                fullWidth
                sx={{ height: "50px" }}
                name="password"
                value={values.password}
                onChange={handleChange("password")}
                label="Şifre"
                type={values.showPassword ? "text" : "password"}
                id="password"
                autoComplete="current-password"
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton
                        aria-label="Toggle Password"
                        onClick={handleClickShowPassword}
                        edge="end"
                      >
                        {values.showPassword ? (
                          <VisibilityOff />
                        ) : (
                          <Visibility />
                        )}
                      </IconButton>
                    </InputAdornment>
                  ),
                }}
              />
              <div className="row">
                <div className="col-6">
                  <input type="checkbox"></input>
                  <label
                    style={{
                      fontSize: "12px",
                      color: "#333",
                      marginLeft: "3px",
                    }}
                  >
                    Oturum açık kalsın
                  </label>
                </div>
                <div
                  className="col-6"
                  style={{ textAlign: "right", fontSize: "12px" }}
                >
                  <Link to="/">Şifremi Unuttum</Link>
                </div>
              </div>
              <div style={{padding:"11px 22px"}}>
              <button
                type="submit"
              
                style={{
                  width: "100%",
                  height: "44px",
                  fontSize: "16px",
                  fontWeight: "600",
                  backgroundColor: "#489ae9",
                  boxShadow: "1px 0 2px 0 rgb(0 0 0 / 13%)",
                  border:"none",
                  color: "white",
                }}
              >
                Giriş Yap
              </button>
              </div>
             <Grid>
                <Grid item  sx={{textAlign:"center",mt:"30px",fontSize:"14px",color:"#33333"}}>
                    Hesabın yok mu? <Link to="/kayitol">Hesap Aç </Link>
                </Grid>
             </Grid>
            <Grid>
                <Grid item sx={{fontSize:"10px",color:"#36454D",mt:"40px"}}>
                Bu site reCAPTCHA ile korunmaktadır. Google Gizlilik Politikası ve Kullanım Koşulları geçerlidir.
                    </Grid>
            </Grid>
            </Box>
          </Card>
        </Box>
      </Container>
      <GirisFooter />
    </>
  );
};

export default Giris;
