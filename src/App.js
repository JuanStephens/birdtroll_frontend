import React from 'react'
import { useState } from "react"
import { Card, Tab, Tabs } from "@blueprintjs/core"
import GlobalStyles from './styles/GlobalStyles'
import { Home } from "./componentes/home";
import { Sidebar } from "./componentes/sidebar";
import { Widgets } from "./componentes/widgets";
import { Login } from "./componentes/login";
import { Register } from "./componentes/register";
import {Profile} from "./componentes/profile";
import {Yappy} from "./componentes/yappy";
import {
  Routes,
  Route,
  Switch,
  Link,
  Redirect
} from "react-router-dom";


function App() {

  const [currentTab, setCurrentTab] = useState("login")

  return (

    <div className="App">
      
    {/* div className="App">
         <Card elevation="1">
      <Tabs id="Tabs" onChange={setCurrentTab} selectedTabId={currentTab}>
        <Tab id="login" title="Login" panel={<Login />} />
        <Tab id="register" title="Register" panel={<Register />} />
        <Tabs.Expander />
      </Tabs>
    </Card> */}
    
  <Sidebar />
    <Routes>
      <Route path="/" element={<Home />}>
        


      </Route>
      
      <Route path="/login" element={<Login />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/yappy" element={<Yappy />} />
    </Routes>
    <Widgets />
    <GlobalStyles /> 
  
    </div>
  );
}

export default App;
