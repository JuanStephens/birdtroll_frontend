import React, { useEffect, useState } from "react";
import { Contenedor } from "./styles";
import TwitterIcon from "@mui/icons-material/Twitter";
import HomeIcon from "@mui/icons-material/Home";
import LoginIcon from '@mui/icons-material/Login';
import HowToRegIcon from '@mui/icons-material/HowToReg';
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import BookmarkBorderOutlinedIcon from "@mui/icons-material/BookmarkBorderOutlined";
import FeaturedPlayListOutlinedIcon from "@mui/icons-material/FeaturedPlayListOutlined";
import PermIdentityOutlinedIcon from "@mui/icons-material/PermIdentityOutlined";
import MoreHorizOutlinedIcon from "@mui/icons-material/MoreHorizOutlined";
import { IconOption } from "./IconOption";
import { Button } from "@mui/material";
import { Link } from "react-router-dom";

export const Sidebar = () => {
  const [activeOption, setActiveOption] = useState("Inicio");

  const activaOption = (text, e) => {
    setActiveOption(text);
  };

  return (
    <Contenedor>
      <TwitterIcon className="mediasocial-logo" />

      <Link onClick={(e) => activaOption("Inicio", e)} className="mediasocial-option" to="/">
        <IconOption
          active={activeOption === "Inicio" ? true : false}
          text="Inicio"
          link="/"
          Icon={HomeIcon}
        />
      </Link>
      <Link onClick={(e) => activaOption("Login", e)} className="mediasocial-option" to="/login">
        <IconOption
          active={activeOption === "Login" ? true : false}
          text="Login"
          link="/login"
          Icon={LoginIcon}
        />
      </Link>
      <Link onClick={(e) => activaOption("Register", e)} className="mediasocial-option" to="/register">
        <IconOption
          active={activeOption === "Register" ? true : false}
          text="Registro"
          link="/register"
          Icon={HowToRegIcon}
        />
      </Link>
{/*<Link onClick={(e) => activaOption("Mensajes", e)} className="mediasocial-option" to="/">
        <IconOption
          active={activeOption === "Mensajes" ? true : false}
          text="Mensajes"
          link="/"
          Icon={MailOutlineIcon}
        />
      </Link>

      <Link onClick={(e) => activaOption("Opcion", e)} className="mediasocial-option" to="/">
        <IconOption
          active={activeOption === "Opcion" ? true : false}
          primary
          text="Más Opciones"
          link="/"
          Icon={MoreHorizOutlinedIcon}
        />
      </Link>


      <Link onClick={(e) => activaOption("Guardados", e)} className="mediasocial-option" to="/">
        <IconOption
          active={activeOption === "Guardados" ? true : false}
          primary
          text="Guardados"
          link="/"
          Icon={BookmarkBorderOutlinedIcon}
        />
      </Link>
      <Link onClick={(e) => activaOption("Listas", e)} className="mediasocial-option" to="/">
        <IconOption
          active={activeOption === "Listas" ? true : false}
          primary
          text="Listas"
          link="/"
          Icon={FeaturedPlayListOutlinedIcon}
        />
      </Link>*/}
      
      <Link onClick={(e) => activaOption("Perfil", e)} className="mediasocial-option" to="/profile">
        <IconOption
          active={activeOption === "Perfil" ? true : false}
          primary
          text="Perfil"
          link="/profile"
          Icon={PermIdentityOutlinedIcon}
        />
      </Link>
      

      <Button variant="outlined" fullWidth>
        Tweet
      </Button>
    </Contenedor>
  );
};
