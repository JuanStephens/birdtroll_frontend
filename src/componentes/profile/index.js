import React, { useEffect, useState } from "react";
import { Container, Header } from "./styles";
import { ProfileContent } from "./profileContent";
import {ProfileBio} from "./profileBio";
import { Posts } from "../home/Posts";
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
      <Header>
      <div className="top">
        <div className="info">
        </div>
      </div>
      <div className="cover">
        <img src="https://picsum.photos/500/300" />
      </div>
      </Header>



      {
          post.map((pos) => (
            <ProfileBio
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
        } 
      
     

    </Container>
  );
};
