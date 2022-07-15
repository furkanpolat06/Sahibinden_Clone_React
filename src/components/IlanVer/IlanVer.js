import React from 'react'
import Footer from '../Footer/Footer'
import Navbar from "../Navbar/Navbar"
import Container from "@mui/material/Container"
import Card from "@mui/material/Card"
import Typography from "@mui/material/Typography"
const IlanVer = () => {
  return (
    <>
        <Navbar />
        <Container>
            <Card>
                <Card item>
                <Container>
                    <Typography sx={{fontSize:"16px",fontWeight:"bold",margin:"15px 10px 15px 0",color:"#333"}}>
                        Adım Adım Kategori Seç
                    </Typography>
                   
                   <div className="row">
                    <div className="col" style={{borderTop:"5px solid #FCAE1A",marginLeft:"16px",height:"114px",width:"176px",boxShadow:"0 0 5px 0 rgb(0 0 0 / 30%)",borderRadius:"5px"}}>a</div>
                    <div className="col" style={{borderTop:"5px solid #F32B2D",marginLeft:"16px",height:"114px",width:"176px",boxShadow:"0 0 5px 0 rgb(0 0 0 / 30%)",borderRadius:"5px"}}>b</div>
                    <div className="col" style={{borderTop:"5px solid #09B8BD",marginLeft:"16px",height:"114px",width:"176px",boxShadow:"0 0 5px 0 rgb(0 0 0 / 30%)",borderRadius:"5px"}}>c</div>
                    <div className="col" style={{borderTop:"5px solid #6C6FFC",marginLeft:"16px",height:"114px",width:"176px",boxShadow:"0 0 5px 0 rgb(0 0 0 / 30%)",borderRadius:"5px"}}>d</div>
                    <div className="col" style={{borderTop:"5px solid #A55FFD",marginLeft:"16px",marginRight:"16px",height:"114px",width:"176px",boxShadow:"0 0 5px 0 rgb(0 0 0 / 30%)",borderRadius:"5px"}}>e</div>
                </div>
                   </Container>
                </Card>
                
            </Card>
        </Container>
        <Footer />
    </>
  )
}

export default IlanVer