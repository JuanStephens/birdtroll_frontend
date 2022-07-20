import React, { useEffect, useState } from "react";
import { Container, Header } from "./styles";
import { ProfileBio } from "./ProfileBio";
import { ProfileContent } from "./ProfileContent";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import axios from 'axios';

export const Profile = () => {
  const [post, setPost] = useState([]);

  const URI = "http://localhost:4000/";
  
  const getPost = async () => {
    try {
      const posts = [];
      const { data } = await axios.get(`${URI}api/posts`);
      data.map((doc) =>  
      posts.push({...doc}) 
      )
        setPost(posts);
        console.log(posts);
    } catch (e) {
      console.log("Error getting cached document:", e);
    }
  };

  useEffect(() => {
    getPost();
  }, []);

  return (
    <Container>
      {/* header */}
      <Header>
      <div className="top">
        <div className="info">
         {/* 
         Donde se almacenan los post del main
         <h1>   {
          post.map((pos) => (
            <ProfileContent
              key={pos.id}
              name={pos.name}
              userName={pos.userName}
              verified={pos.verified}
              text={pos.text}
              timestamp={pos.timestamp}
              avatar={pos.avatar}
              imagePost={pos.imagePost}
            />
          ))
          } </h1>*/}
          <span className="info__tweets-count">Tweets</span>
        </div>
      </div>
      <div className="cover">
        <img src="https://picsum.photos/500/300" />
      </div>
      </Header>
      <ProfileBio/>

  
    </Container>
  );
};
