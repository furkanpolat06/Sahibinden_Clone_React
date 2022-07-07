import React from "react";
import { Grid, Typography } from "@mui/material";
import Container from "@mui/material/Container";
import PhoneEnabledIcon from "@mui/icons-material/PhoneEnabled";
import HelpIcon from "@mui/icons-material/Help";

import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

const Footer = () => {
  return (
    <>
    <Grid sx={{display:{ xs: "none", md: "flex" }}}><footer
        style={{
          width: "100%",
          backgroundColor: "#f9f9f9",
          borderTop: "1px solid #dfdfdf",          
        }}
      >
        <Container className="footer-container">
          
          <div className="footer-orta">
            <div className="row">
              <div className="col-md-3">
                <div className="row">
                  <div className="col-md-3">
                    <PhoneEnabledIcon
                      style={{
                        backgroundColor: "#D52D38",
                        color: "white",
                        borderRadius: "50%",
                        width: "42px",
                        height: "42px",
                        padding: "5px",
                      }}
                    ></PhoneEnabledIcon>
                  </div>
                  <div className="col-md-9">
                    <p>
                      <span
                        style={{
                          color: "#c55353",
                          marginTop: "2px",
                          fontWeight: "bold",
                          fontSize: "12px",
                          marginLeft: "-20px",
                        }}
                      >
                        7 / 24 Müşteri Hizmetleri
                      </span>{" "}
                      <br />
                      <span
                        style={{
                          color: "#555",
                          fontSize: "12px",
                          marginLeft: "-20px",
                          fontWeight: "bold",
                        }}
                      >
                        0 850 222 44 44
                      </span>
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-md-3">
                <div className="row">
                  <div className="col-md-3">
                    <HelpIcon
                      style={{
                        width: "42px",
                        height: "42px",
                        backgroundColor: "#D52D38",
                        borderRadius: "50%",
                        color: "white",
                        padding: "5px",
                      }}
                    >
                      Help
                    </HelpIcon>
                  </div>
                  <div className="col-md-9">
                    <p>
                      <span
                        style={{
                          color: "#c55353",
                          marginTop: "2px",
                          fontWeight: "bold",
                          fontSize: "12px",
                          marginLeft: "-20px",
                        }}
                      >
                        Yardım Merkezi
                      </span>{" "}
                      <br />
                      <span
                        style={{
                          color: "#555",
                          fontSize: "12px",
                          marginLeft: "-20px",
                          fontWeight: "bold",
                        }}
                      >
                        yardim.sahibinden.com
                      </span>
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-md-2"></div>
              <div className="col-md-3">
                <FormControl sx={{ width: "243px", height: "43px" }}>
                  <InputLabel id="demo-simple-select-label">
                    <p style={{ fontSize: "12px" }}>Dil Seçimi (Language)</p>
                  </InputLabel>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    label="Age"
                  >
                    <MenuItem value={"tr"}>TR</MenuItem>
                    <MenuItem value={"en"}>EN</MenuItem>
                  </Select>
                </FormControl>
              </div>
              <div className="col-md-1">
                <img
                  src="https://www.bg-tek.net/assets/img/icon/damgasi.png"
                  alt=""
                  style={{ width: "42px", height: "42px" }}
                ></img>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-11" style={{ border: "1px dashed #ccc" }}>
              <p
                style={{
                  fontSize: "12px",
                  color: "#888",
                  padding: "12px",
                  backgroundColor: "#fff",
                }}
              >
                sahibinden.com'da yer alan kullanıcıların oluşturduğu tüm
                içerik, görüş ve bilgilerin doğruluğu, eksiksiz ve değişmez
                olduğu, yayınlanması ile ilgili yasal yükümlülükler içeriği
                oluşturan kullanıcıya aittir. Bu içeriğin, görüş ve bilgilerin
                yanlışlık, eksiklik veya yasalarla düzenlenmiş kurallara
                aykırılığından sahibinden.com hiçbir şekilde sorumlu değildir.
                Sorularınız için ilan sahibi ile irtibata geçebilirsiniz. Yer
                Sağlayıcı Belge No : 581
              </p>
              
            </div>
            
            <div className="col-1">
              <img
                src="https://www.e-ticaretsitesi.com/uploads/images/2021/05/image_750x_609eb19837d12.jpg"
                alt=""
                style={{ width: "80px", height: "93px" }}
              />
            </div>
          </div>
        </Container>
      </footer></Grid>
      
    </>
  );
};

export default Footer;
