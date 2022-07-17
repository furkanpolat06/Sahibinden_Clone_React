import React from 'react'
import GirisFooter from '../GirisFooter/GirisFooter'
import Navbar from "../Navbar/Navbar"
import Container from "@mui/material/Container"
import Card from "@mui/material/Card"
import Typography from "@mui/material/Typography"
import HomeIcon from "@mui/icons-material/Home";
import DirectionsCarFilledIcon from "@mui/icons-material/DirectionsCarFilled";
import DirectionsCarIcon from '@mui/icons-material/DirectionsCar';
import ConstructionIcon from '@mui/icons-material/Construction';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import AgricultureIcon from '@mui/icons-material/Agriculture';
import FormatPaintIcon from '@mui/icons-material/FormatPaint';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import EngineeringIcon from '@mui/icons-material/Engineering';
import ChildFriendlyIcon from '@mui/icons-material/ChildFriendly';
import PetsIcon from '@mui/icons-material/Pets';
import './IlanVer.Module.css'
const IlanVer = () => {
    document.body.style.backgroundColor = "#FAFAFA";
  return (
    <>
        <Navbar />
        <Container>
        <div className="progress-holder" style={{height:"121px",width:"980px"}}>

</div>
            <Card >
                
                <Card item sx={{height:"700px"}}> 
                    
                <Container>
                    
                    <Typography sx={{fontSize:"16px",fontWeight:"bold",margin:"15px 10px 15px 0",color:"#333"}}>
                        Adım Adım Kategori Seç
                    </Typography>
                   
                   <div className="row">
                    <div className="col" style={{borderTop:"5px solid #FCAE1A",marginLeft:"16px",height:"114px",width:"176px",borderRadius:"5px"}}>
                       <p style={{textAlign:"center"}}><HomeIcon style={{marginTop:"15%",color:"white",backgroundColor:"#FCAE1A",borderRadius:"50%",width:"30px",height:"30px",padding:"4px"}} /><br/><span style={{fontWeight:"bold",color:"#333",fontSize:"14px"}}>Emlak</span></p> 
                    </div>
                    <div className="col" style={{borderTop:"5px solid #F32B2D",marginLeft:"16px",height:"114px",width:"176px" ,borderRadius:"5px"}}><p style={{textAlign:"center"}}><DirectionsCarIcon style={{marginTop:"15%",color:"white",backgroundColor:"#F32B2D",borderRadius:"50%",width:"30px",height:"30px",padding:"4px"}} /><br/><span style={{fontWeight:"bold",color:"#333",fontSize:"14px"}}>Vasıta</span></p> 
                  </div>
                    <div className="col" style={{borderTop:"5px solid #09B8BD",marginLeft:"16px",height:"114px",width:"176px" ,borderRadius:"5px"}}><p style={{textAlign:"center"}}><ConstructionIcon style={{marginTop:"15%",color:"white",backgroundColor:"#09B8BD",borderRadius:"50%",width:"30px",height:"30px",padding:"4px"}} /><br/><span style={{fontWeight:"bold",color:"#333",fontSize:"14px"}}>Yedek Parça , Aksesuar Donanım & Tuning</span></p> 
                  </div>
                    <div className="col" style={{borderTop:"5px solid #6C6FFC",marginLeft:"16px",height:"114px",width:"176px" ,borderRadius:"5px"}}><p style={{textAlign:"center"}}><ShoppingCartIcon style={{marginTop:"15%",color:"white",backgroundColor:"#6C6FFC",borderRadius:"50%",width:"30px",height:"30px",padding:"4px"}} /><br/><span style={{fontWeight:"bold",color:"#333",fontSize:"14px"}}>İkinci El ve Sıfır Alışveriş</span></p> 
                  </div>
                    <div className="col" style={{borderTop:"5px solid #A55FFD",marginLeft:"16px",marginRight:"16px",height:"114px",width:"176px" ,borderRadius:"5px"}}><p style={{textAlign:"center"}}><AgricultureIcon style={{marginTop:"15%",color:"white",backgroundColor:"#A55FFD",borderRadius:"50%",width:"30px",height:"30px",padding:"4px"}} /><br/><span style={{fontWeight:"bold",color:"#333",fontSize:"14px"}}>İş Makineleri & Sanayi</span></p> 
                  </div>
                </div>
                
                   <div className="row" style={{marginTop:"20px"}}>
                    <div className="col" style={{borderTop:"5px solid #459CE1",marginLeft:"16px",height:"114px",width:"176px" ,borderRadius:"5px"}}>
                       <p style={{textAlign:"center"}}><FormatPaintIcon style={{marginTop:"15%",color:"white",backgroundColor:"#459CE1",borderRadius:"50%",width:"30px",height:"30px",padding:"4px"}} /><br/><span style={{fontWeight:"bold",color:"#333",fontSize:"14px"}}>Ustalar ve Hizmetler</span></p> 
                    </div>
                    <div className="col" style={{borderTop:"5px solid #51B27C",marginLeft:"16px",height:"114px",width:"176px" ,borderRadius:"5px"}}><p style={{textAlign:"center"}}><MenuBookIcon style={{marginTop:"15%",color:"white",backgroundColor:"#51B27C",borderRadius:"50%",width:"30px",height:"30px",padding:"4px"}} /><br/><span style={{fontWeight:"bold",color:"#333",fontSize:"14px"}}>Özel Ders Verenler</span></p> 
                  </div>
                    <div className="col" style={{borderTop:"5px solid #94BB3E",marginLeft:"16px",height:"114px",width:"176px" ,borderRadius:"5px"}}><p style={{textAlign:"center"}}><EngineeringIcon style={{marginTop:"15%",color:"white",backgroundColor:"#94BB3E",borderRadius:"50%",width:"30px",height:"30px",padding:"4px"}} /><br/><span style={{fontWeight:"bold",color:"#333",fontSize:"14px"}}>İş İlanları</span></p> 
                  </div>
                    <div className="col" style={{borderTop:"5px solid #FE7A18",marginLeft:"16px",height:"114px",width:"176px" ,borderRadius:"5px"}}><p style={{textAlign:"center"}}><ChildFriendlyIcon style={{marginTop:"15%",color:"white",backgroundColor:"#FE7A18",borderRadius:"50%",width:"30px",height:"30px",padding:"4px"}} /><br/><span style={{fontWeight:"bold",color:"#333",fontSize:"14px"}}>Yardımcı Arayanlar</span></p> 
                  </div>
                    <div className="col" style={{borderTop:"5px solid #19BAE8",marginLeft:"16px",marginRight:"16px",height:"114px",width:"176px" ,borderRadius:"5px"}}><p style={{textAlign:"center"}}><PetsIcon style={{marginTop:"15%",color:"white",backgroundColor:"#19BAE8",borderRadius:"50%",width:"30px",height:"30px",padding:"4px"}} /><br/><span style={{fontWeight:"bold",color:"#333",fontSize:"14px"}}>Hayvanlar Alemi</span></p> 
                  </div>
                </div>
                   </Container>
                </Card>
                
            </Card>
        </Container>
        <GirisFooter />
    </>
  )
}

export default IlanVer