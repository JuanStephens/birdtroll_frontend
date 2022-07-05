import React from 'react'
import GlobalStyles from './styles/GlobalStyles'
import { Home } from "./componentes/home";
import { Sidebar } from "./componentes/sidebar";
import { Widgets } from "./componentes/widgets";


function App() {
  return (
    <div className="App">
    <Sidebar />

    <Home />

    <Widgets /> 

    <GlobalStyles/>
    </div>
  );
}

export default App;
