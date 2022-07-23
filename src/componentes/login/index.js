import React from 'react';
//import ReactDOM from 'react-dom/client';
import { Button, Callout, FormGroup, InputGroup } from "@blueprintjs/core"
import { Link } from 'react-router-dom';
import { Container, Header } from "./styles";
import {useRef, useContext, useState, useEffect} from 'react';
import { UserContext } from "../../context/UserContext"


export const Login = () => {
 const URI = process.env.URI || "http://localhost:4000/";
 const userRef = useRef();
 const errRef = useRef();

 const [email, setEmail] = useState("")
 const [password, setPassword] = useState("")
 const [isSubmitting, setIsSubmitting] = useState(false)
 const [error, setError] = useState("")
 const [userContext, setUserContext] = useContext(UserContext);

 const formSubmitHandler = e => {
  e.preventDefault()
  setIsSubmitting(true)
  setError("")

  const genericErrorMessage = "Something went wrong! Please try again later."
  console.log({ username: email, password });
  console.log(URI + "auth/login");
  fetch(URI + "auth/login", {
    method: "POST",
    credentials: "include",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ username: email, password }),
  })
    .then(async response => {
      console.log('segunod')
      setIsSubmitting(false)
      if (!response.ok) {
        if (response.status === 400) {
          setError("Please fill all the fields correctly!")
        } else if (response.status === 401) {
          setError("Invalid email and password combination.")
        } else {
          setError(genericErrorMessage)
        }
      } else {
        const data = await response.json()
        setUserContext(oldValues => {
          return { ...oldValues, token: data.token }
        })
      }
    })
    .catch(error => {
      setIsSubmitting(false)
      setError(genericErrorMessage)
      console.log(error)
    })
}

 useEffect(() => {
  userRef.current.focus();
 }, [])
 
 useEffect(() => {
 }, [email, password])

  return (
    
    <Container>
      {/* header */}
      <Header>
      <h1>Login</h1>
      </Header>
        <>
        <section>
           {error && <Callout intent="danger">{error}</Callout>}
           <h1>Ingresar</h1>
           <form onSubmit = {formSubmitHandler} >

            <label htmlFor= "username">Usuario: </label>
            <input 
            type="text"  
            id="username"
            ref={userRef}
            onChange={(e) => setEmail(e.target.value)}
            value = {email}
            required                
            />


            <label htmlFor= "password">Contraseña: </label>
            <input 
            type="password"  
            id="password"
            onChange={(e) => setPassword(e.target.value)}
            value = {password}
            required                
            />

            <Button
          intent="primary"
          disabled={isSubmitting}
          text={`${isSubmitting ? "Signing In" : "Sign In"}`}
          fill
          type="submit"
        />
           </form>
           <p>
            Nececitas una cuenta? <br/>
            <span className="line">
             <Link to ="/register">Registro</Link>
            </span>
           </p>
        </section>
  </> 
      </Container>
  )
}


