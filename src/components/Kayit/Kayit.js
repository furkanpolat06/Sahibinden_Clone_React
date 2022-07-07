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
const Kayit = () => {
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
              sx={{ p: "50px", mt: 1, height: "804px", width: "442px" }}
            >
              <Typography
                sx={{
                  fontSize: "22px",
                  fontWeight: "600",
                  minHeight: "40px",
                  marginBottom: "12px",
                }}
              >
                Hesap Aç
              </Typography>
              <div className="row">
                <div className="col-6">
                  <TextField
                    margin="normal"
                    fullWidth
                    sx={{ height: "50px" }}
                    id="email"
                    label="Adınız"
                    name="email"
                    autoComplete="email"
                    autoFocus
                  />
                </div>
                <div className="col-6">
                  <TextField
                    margin="normal"
                    fullWidth
                    sx={{ height: "50px" }}
                    id="email"
                    label="Soyadınız"
                    name="email"
                    autoComplete="email"
                    autoFocus
                  />
                </div>
              </div>
              <TextField
                margin="normal"
                fullWidth
                sx={{ height: "50px" }}
                id="email"
                label="E-posta adresiniz"
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
              <div
                className="checkbox"
                style={{ marginBottom: "10px", marginTop: "20px" }}
              >
                <input type="checkbox" />
                <label
                  style={{
                    display: "inline",
                    marginLeft: "8px",
                    fontSize: "13px",
                  }}
                >
                  <span>
                    Bireysel Hesap Sözleşmesi ve Ekleri'ni kabul ediyorum.
                  </span>
                </label>
              </div>
              <div className="checkbox">
                <input type="checkbox" />
                <label
                  style={{
                    display: "inline",
                    marginLeft: "8px",
                    fontSize: "13px",
                  }}
                >
                  <span>
                    İletişim bilgilerime kampanya, tanıtım ve reklam içerikli
                    ticari elektronik ileti gönderilmesine, bu amaçla kişisel
                    verilerimin işlenmesine ve tedarikçilerinizle paylaşılmasına
                    izin veriyorum.
                  </span>
                </label>
              </div>
              <div style={{ padding: "11px 22px" }}>
                <button
                  type="submit"
                  style={{
                    width: "100%",
                    height: "44px",
                    fontSize: "16px",
                    fontWeight: "600",
                    backgroundColor: "#489ae9",
                    boxShadow: "1px 0 2px 0 rgb(0 0 0 / 13%)",
                    border: "none",
                    color: "white",
                  }}
                >
                  Hesap aç
                </button>
              </div>
              <Grid>
                <Grid
                  item
                  sx={{
                    textAlign: "center",
                    
                    fontSize: "14px",
                    color: "#33333",
                  }}
                >
                  Hesabın var mı? <Link to="/giris"> Giriş Yap </Link>
                </Grid>
              </Grid>
              <Grid>
                <Grid
                  item
                  sx={{
                    textAlign: "center",
                    mt: "30px",
                    fontSize: "14px",
                    color: "#33333",
                  }}
                >
                  İşletme sahibi misin?{" "}
                  <Link to="/giris"> Kurumsal Hesap Aç </Link>
                </Grid>
              </Grid>
              <Grid>
                <Grid
                  item
                  sx={{ fontSize: "10px", color: "#999", mt: "40px" }}
                >
                  Bu sayfadaki bilgiler sahibinden.com hesabı ve fatura
                  gönderimi dahil olmak üzere tüm bilgilendirmelerimiz için
                  alınmaktadır. Kişisel verilerin korunması hakkında detaylı
                  bilgiye buradan ulaşabilirsiniz. Bu site reCAPTCHA ile
                  korunmaktadır. Google Gizlilik Politikası ve Kullanım
                  Koşulları geçerlidir.
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

export default Kayit;
