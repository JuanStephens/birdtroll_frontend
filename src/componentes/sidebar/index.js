import React, { useEffect, useState } from "react";
import { Contenedor } from "./styles";
import TwitterIcon from "@mui/icons-material/Twitter";
import HomeIcon from "@mui/icons-material/Home";
import LoginIcon from '@mui/icons-material/Login';
import HowToRegIcon from '@mui/icons-material/HowToReg';
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import BookmarkBorderOutlinedIcon from "@mui/icons-material/BookmarkBorderOutlined";
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import PermIdentityOutlinedIcon from "@mui/icons-material/PermIdentityOutlined";
import WorkspacePremiumIcon from '@mui/icons-material/WorkspacePremium';
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
      
      <Link onClick={(e) => activaOption("Perfil", e)} className="mediasocial-option" to="/profile">
        <IconOption
          active={activeOption === "Perfil" ? true : false}
          primary
          text="Perfil"
          link="/profile"
          Icon={PermIdentityOutlinedIcon}
        />
      </Link>

      <Link onClick={(e) => activaOption("Premium", e)} className="mediasocial-option" to="/yappy">
        <IconOption
          active={activeOption === "Premium" ? true : false}
          primary
          text="Premium"
          link="/yappy"
          Icon={WorkspacePremiumIcon}
        />
      </Link>

      <Button variant="outlined" fullWidth>
        Tweet
      </Button>
    </Contenedor>
  );
};
