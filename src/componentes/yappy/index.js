import React from 'react';
import axios from "axios";
//import ReactDOM from 'react-dom/client';
import { Link } from 'react-router-dom';
import { Container, Header } from "./styles";
import {YappyButton} from "./yappy";
import {useRef, useState, useEffect} from 'react';
import WorkspacePremiumIcon from '@mui/icons-material/WorkspacePremium';
import { IconOption } from "../sidebar/IconOption";
import EditIcon from '@mui/icons-material/Edit';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import VerifiedIcon from '@mui/icons-material/Verified';


export const Yappy = () => {

  const [url, setUrl] = useState("");
  const [activeOption, setActiveOption] = useState("inicio")

  
  const activaOption = (text, e) => {
    setActiveOption(text);
  };

  
  const onFindUrl  = async () => {
    
  
    const { data } = await axios.post(
      'http://localhost:3000/api/pagosbg', 
      
    );
    
    setUrl(data.url)

  }


  return (


    <Container>
      {/* header */}
      <Header>
      <img class ="yappy-logo" width={200} height={50} src={require('.//img/yappy-logo.png')}/>
      </Header>
<section>
      <form id="bird-form" action="">
        
      <h1>Haste Premium!</h1>
      <br/>
      
      <IconOption

         active={false}
         text="Tendras una marca de verificación"
         Icon={WorkspacePremiumIcon}/> <br/>
    
      <IconOption
      
          active={false}
          text="Podrás borrar y editar mensajes"
          Icon={EditIcon}/> 
     
      <br/>

      <IconOption
      
          active={false}
          text="Por solo 0.07 centavos"
          Icon={AttachMoneyIcon}/> 

         
     
      <br/>

      
 <div onClick={onFindUrl}>
        <IconOption 
          active={true}
          primary
          text="Cambiar a Premium!"
          Icon={VerifiedIcon}
        />
  
  </div>


 { url !== ""  ? (<YappyButton  urlYappy = {url}/>) :(false)}


     
  </form>
      </section>
    

      </Container>

  
    
  )
}