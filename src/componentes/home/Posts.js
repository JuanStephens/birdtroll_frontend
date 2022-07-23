import React, { useState, useEffect } from "react";
import { Post, Avatar, PostBody, PostDescription, Images, PostFooter } from "./styles";
import VerifiedUserIcon from "@mui/icons-material/VerifiedUser";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
import RepeatIcon from "@mui/icons-material/Repeat";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import PublishIcon from "@mui/icons-material/Publish";
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
//import { deletePost } from "../../../../birdtrol_backend/src/controllers/posts.controllers";

export const Posts = ({
  id,
  name,
  userName,
  verified,
  text,
  timestamp,
  avatar,
  imagePost
}) => {

  const [isOpen, setIsOpen] = useState(false);
  const optionTogle = (isBool) =>{
    const optionActive = isBool ? setIsOpen(false) : setIsOpen(true)

  }

  return (
    <Post> 
      <div className="post-avatar">
      <div className = "post-more"> <br/>
      <MoreHorizIcon fontSize="small" onClick={() => optionTogle(isOpen)}  />
      { isOpen ? (<Stack direction="row" spacing={2}>

        <Button variant="outlined" color="secondary">Editar</Button>
        <Button variant="outlined" color="error" /*</section>onClick={() => deletePost(id)}*/>Borrar</Button>
        </Stack>):("") 
      }
      </div>
        <Avatar src={avatar} /> 
        <PostBody>
          <div>
            <div>
              <h3>
                {name}
                <span>
                  <VerifiedUserIcon className="post_icon" />
                {userName}
                </span>
              </h3>
              <PostDescription>
                  <p>{text}</p>
              </PostDescription>
            </div>
            <Images src={imagePost} />
            <PostFooter>
              <ChatBubbleOutlineIcon fontSize="small" />
              <RepeatIcon fontSize="small" />
              <FavoriteBorderIcon fontSize="small" />
              <PublishIcon fontSize="small" />
            </PostFooter>
          </div>
        </PostBody>
      </div>
    </Post>
  );
};
