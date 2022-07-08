import React, { useState, useEffect } from "react";
import { Tweetbox, Form, Div, Avatar, DivBox, File } from "./styles";
import InsertPhotoOutlinedIcon from "@mui/icons-material/InsertPhotoOutlined";
import GifBoxOutlinedIcon from "@mui/icons-material/GifBoxOutlined";
import SentimentSatisfiedOutlinedIcon from "@mui/icons-material/SentimentSatisfiedOutlined";
import { Button } from "@mui/material";
import axios from "axios";
import User from "../../img/usuario.png";

export const ProfileContent= () => {
  const [images, setImages] = useState("");
  const [tweetImg, setTweetimg] = useState("");
  const [usuario, setUsuario] = useState("");
  const [tweetMsg, settweetMsg] = useState("");

  const URI = process.env.URI || "http://localhost:4000/";
  const URIIMAGE_POST = process.env.URIIMAGE_POST || "http://localhost:4000/img/imgpost";
  const URIIMAGE_PROFILE = process.env.URIIMAGE_PROFILE || "http://localhost:4000/img/imgprofile";

  useEffect(() => {
    localStorage.setItem("Perfil", JSON.stringify(images));
  }, [images]);

  const sendTweet = async (e) => {
    e.preventDefault();
    if (usuario.length < 1) {
      return alert("Debes ingresar un nombre de usuario");
    }
    if (images.length < 1) {
      return alert("Debes ingresar una foto de usuario");
    }
    if (tweetMsg < 5) {
      return alert("tu Tweet debe ser mayor a 5 caracteres");
    }
    if (tweetMsg > 300) {
      return alert("tu Tweet debe ser mayor a 300 caracteres");
    } else {
      try {
        const { data } = await axios.post(`${URI}api/posts`, {
          name: usuario,
          userName: usuario,
          verified: true,
          text: tweetMsg,
          timestamp: Date.now(),
          avatar: images,
          imagePost: tweetImg,
        });
        console.log("Document written with ID: ", data);
      } catch (e) {
        console.error("Error adding document: ", e);
      }

      setTweetimg("");
      settweetMsg("");
      setUsuario("");
    }
  };

  const handleSubir = async (e) => {
      const file = e.target.files[0];
      let InstFormData = new FormData();
      InstFormData.append("file", file);
      const { data } = await axios.post(`${URI}api/imgprofile`, InstFormData, {
        headers: { "content-type": "multipart/form-data" },
      })
      .catch((error) => {
        console.log(error.toJSON());
      });
      setImages(`${URIIMAGE_PROFILE}/${data.name}`);
  };

  const handlePost = async (e) => {
    const file = e.target.files[0];
    let InstFormData = new FormData();
    InstFormData.append("file", file);
      const { data } = await axios.post(`${URI}api/imgpost`, InstFormData, {
        headers: { "content-type": "multipart/form-data" },
      }) 
      .catch((error) => {
        console.log(error.toJSON());
      });
      setTweetimg(`${URIIMAGE_POST}/${data.name}`);    
  };

  return (
    <Tweetbox>
      <Form>
        <Div>
          <Avatar src={images ? images : User} />

          <File type="file" onChange={handleSubir} />
          <div className="columns">
            <input
              type="text"
              placeholder="¿Qué está pensando?"
              value={tweetMsg}
              onChange={(e) => settweetMsg(e.target.value)}
            />
            <input
              type="text"
              placeholder="Usuario:"
              value={usuario}
              onChange={(e) => setUsuario(e.target.value)}
            />
          </div>
        </Div>
        <Div>
          <DivBox>
            <File type="file" primary onChange={handlePost} />
            <InsertPhotoOutlinedIcon />
            <GifBoxOutlinedIcon />
            <SentimentSatisfiedOutlinedIcon />
          </DivBox>
          <File type="file" onChange={handlePost} />
          <input
            type="text"
            placeholder="Opcional: Url de la imagen/gif"
            value={tweetImg}
            onChange={(e) => setTweetimg(e.target.value)}
          />
          <Button onClick={sendTweet}>Tweet</Button>
        </Div>
      </Form>
    </Tweetbox>
  );
};
