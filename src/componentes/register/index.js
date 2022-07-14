
import React, { useState } from "react"
import { Button, FormGroup, InputGroup } from "@blueprintjs/core"
import { Link } from 'react-router-dom';
import { Container, Header } from "./styles";


export const Register = () => {
  const [firstName, setFirstName] = useState("")
  const [lastName, setLastName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  return (
    
    <Container>

      <Header>
      <h1>Prueba</h1>
      </Header>
<section>
    <>
      <form className="auth-form">
        <FormGroup label="First Name" labelFor="firstName">
          <InputGroup
            id="firstName"
            placeholder="First Name"
            onChange={e => setFirstName(e.target.value)}
            value={firstName}
          />
        </FormGroup>
        <FormGroup label="Last Name" labelFor="firstName">
          <InputGroup
            id="lastName"
            placeholder="Last Name"
            onChange={e => setLastName(e.target.value)}
            value={lastName}
          />
        </FormGroup>
        <FormGroup label="Email" labelFor="email">
          <InputGroup
            id="email"
            type="email"
            placeholder="Email"
            onChange={e => setEmail(e.target.value)}
            value={email}
          />
        </FormGroup>
        <FormGroup label="Password" labelFor="password">
          <InputGroup
            id="password"
            placeholder="Password"
            type="password"
            onChange={e => setPassword(e.target.value)}
            value={password}
          />
        </FormGroup>
        <Button intent="primary" text="Register" fill type="submit" />
      </form>
    </>
    </section>
    </Container>

  )
}

export default Register