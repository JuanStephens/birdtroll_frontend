import React from "react";
import { Container, Avatar, PostBody, PostDescription, Images, PostFooter } from "./styles";
import VerifiedUserIcon from "@mui/icons-material/VerifiedUser";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
import RepeatIcon from "@mui/icons-material/Repeat";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import PublishIcon from "@mui/icons-material/Publish";

export const ProfileBio = ({
  name,
  userName,
  verified,
  text,
  timestamp,
  avatar,
  imagePost
}) => {
  return (
    <Container>
      <div className="post-avatar">
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
             
            </PostFooter>
          </div>
        </PostBody>
      </div>
    </Container>
  );
};