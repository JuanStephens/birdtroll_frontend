import React from "react";
import { Post, Avatar, PostBody, PostDescription, Images, PostFooter } from "../home/styles";
import VerifiedUserIcon from "@mui/icons-material/VerifiedUser";

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
    <Post>
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
  </Post>
  );
};
