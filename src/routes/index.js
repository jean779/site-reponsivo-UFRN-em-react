import React from 'react'
import { Switch, Route, BrowserRouter } from 'react-router-dom'
import Home from "../pages/Home/index"
import Noticias from "../pages/Noticias/index.js"
import Navbar from "../components/Navbar/index"
import Projetos from "../pages/Projetos/index"
import Calendario from "../pages/Calendario/index"
import Contato from "../pages/Contato/index"
import Footer from "../components/footer/footer.js"

function Routes() {

  return (
    <BrowserRouter>
      <Navbar></Navbar>
      
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/Noticias" component={Noticias} />
        <Route path="/Projetos" component={Projetos} />
        <Route path="/calendario" component={Calendario} />
        <Route path="/contato" component={Contato} />
      </Switch>
      <Footer></Footer>
    </BrowserRouter>

  )
}

export default Routes
