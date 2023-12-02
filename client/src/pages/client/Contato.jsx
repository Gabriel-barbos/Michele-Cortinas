import {
  TextField,
  InputAdornment,
  Icon,
  IconButton,
  Button,
} from "@mui/material";
  import "../../assets/css/contato.css";
  import { useCallback } from "react";
import wpp from "../../assets/icons/wpp.svg"
import insta from "../../assets/icons/insta.svg"
export function Contato(){
  const onInstaIconImageClick = useCallback(() => {
    window.open(
      "https://www.instagram.com/sem/campaign/emailsignup/?campaign_id=13534421690&extra_1=s%7Cc%7C547348930972%7Ce%7Cinstagram%20%27%7C&placement=&creative=547348930972&keyword=instagram%20%27&partner_id=googlesem&extra_2=campaignid%3D13534421690%26adgroupid%3D126262409974%26matchtype%3De%26network%3Dg%26source%3Dnotmobile%26search_or_content%3Ds%26device%3Dc%26devicemodel%3D%26adposition%3D%26target%3D%26targetid%3Dkwd-1321618851291%26loc_physical_ms%3D1001773%26loc_interest_ms%3D%26feeditemid%3D%26param1%3D%26param2%3D&gclid=CjwKCAiApaarBhB7EiwAYiMwqnaDOu3UoTtYJUwvxmrA8USwukv8e_RwzK3RpkYWxO6Q88G5mGTXIRoCFRIQAvD_BwE"
    );
    
  }, []);

  const onInstaIconImageClick2 = useCallback(() => {
    window.open(
      "https://api.whatsapp.com/send/?phone=11994407006&text&type=phone_number&app_absent=0"
    );
    
  }, []);

  return(
    <div className="contato-page">


<form action="https://formsubmit.co/heitormorais2003@gmail.com" method="POST">


      <div className="contato-card">
    <div className="right-box" />
    <h1 className="contate-nos">Contate-nos </h1>

    <div className="left-box" />
    <TextField
        className="form-nome"
        color="primary"
        label="Nome"
        placeholder="Digite seu nome"
        sx={{ width: 603 }}
        variant="outlined"
      />
      <TextField
        className="form-email"
        color="primary"
        label="Email"
        placeholder="Digite seu Email"
        sx={{ width: 603 }}
        variant="outlined"
      />
      <TextField
        className="form-msg"
        color="primary"
        label="Mensagem"
        placeholder="Envie sua mensagem"
        sx={{ width: 603 }}
        variant="filled"
        multiline
      />
      <h1 className="localizao">{`Localização `}</h1>
      <h3 className="rua">
        <p className="rua-nome">Rua José tal, 56</p>
      </h3>
      <h3 className="bairro">Bairro das Cortina</h3>
      <h2 className="siga-nos">Siga-nos</h2>
      <img className="insta-icon" alt="" src={insta} 
       onClick={onInstaIconImageClick}
       />
      <img className="wpp-icon" alt="" src={wpp}
        onClick={onInstaIconImageClick2} />
      <Button
        className="enviar-botao"
        sx={{ width: 190 }}
        color="primary"
        variant="contained"
      >
        enviar
      </Button>

      </div>
      </form>
  </div>
  
  )
}