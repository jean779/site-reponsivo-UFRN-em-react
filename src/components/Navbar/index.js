import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css"
import {Link} from "react-router-dom";

const Navbar = () => {
  return (
  
    <nav class="navbar navbar-expand-lg navbar-dark bg-info">
                <div class="container-fluid" >
                    <Link class="navbar-brand" to="/">TADS-UFRN</Link>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarTogglerDemo02">
                        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                            <li class="nav-item">
                                <Link class="nav-link" to="/noticias">Noticias</Link>
                            </li>
                            <li class="nav-item">
                                <Link class="nav-link" to="/calendario" tabindex="-1" >Calendário</Link>
                            </li>
                            <li class="nav-item">
                                <Link class="nav-link" to="/projetos" tabindex="-1">Projetos</Link>
                            </li>
                            <li class="nav-item">
                                <Link class="nav-link" to="/contato" tabindex="-1">Contato</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
          
  );
};

export default Navbar;
