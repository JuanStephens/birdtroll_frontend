import React from 'react';
//import ReactDOM from 'react-dom/client';
import { Link } from 'react-router-dom';
import { Container, Header } from "./styles";
import {useRef, useState, useEffect} from 'react';
import WorkspacePremiumIcon from '@mui/icons-material/WorkspacePremium';
import { IconOption } from "./IconOption";
import EditIcon from '@mui/icons-material/Edit';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';




export const Yappy = () => {
 
  return (
    
    <Container>
      {/* header */}
      <Header>
      <img class ="yappy-logo" width={200} height={50} src={require('.//img/yappy-logo.png')}/>
      </Header>
<section>
      <form id="poke-shop-form" class="poke-shop gradient-border" action="">
        
      <h1>Haste Premium!</h1>
      <br/>
      
      <IconOption
       
         text="Tendras una marca de verificación"
         Icon={WorkspacePremiumIcon}/> <br/>
    
      <IconOption
          text="Podrás borrar y editar mensajes"
          Icon={EditIcon}/> 
     
      <br/>

      <IconOption
          text="Por solo 0.07 centavos"
          Icon={AttachMoneyIcon}/> 
     
      <br/>


      <div class="yappy-button hidden">
        <a id="yappy-anchor" href="#">
          <span>Pagar con</span>
          <span>yappy</span>
        </a>
      </div>
      </form>
      </section>
    
  
      </Container>
  )
}

