import React from 'react'
import GlobalStyles from './styles/GlobalStyles'
import { Home } from "./componentes/home";
import { Sidebar } from "./componentes/sidebar";
import { Widgets } from "./componentes/widgets";
import { Login } from "./componentes/login";
import {Profile} from "./componentes/profile"
import {
  Routes,
  Route,
} from "react-router-dom";


function App() {
  return (
    <div className="App">
    <Sidebar />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/profile" element={<Profile />} />
    </Routes>
    <Widgets />
    <GlobalStyles />
    </div>
  );
}

export default App;
