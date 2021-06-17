import React from 'react'
import { Container } from './styles'
import "bootstrap/dist/css/bootstrap.min.css"
import logo from '../../assets/img/logo.jpg'
import fundo from '../../assets/img/fundo.jpg'
import fundo2 from '../../assets/img/fundo2.jpg'

function Noticias( ){
  return(
    <Container>

    
        <main role="main" class="container">
            <div class="d-flex align-items-center p-3 my-3 text-white-50 bg-purple rounded shadow-sm">
                <img class="mr-3" src={logo} alt="" width="48" height="48"/>
                <div class="lh-100">
                    <h6 class="mb-0 text-white lh-100">Bootstrap</h6>
                    <small>Desde 2011</small>
                </div>
            </div>

            <div class="my-3 p-3 bg-white rounded shadow-sm">
                <h6 class="border-bottom border-gray pb-2 mb-0">Noticías recentes:</h6>
                <div class="media text-muted pt-3">
                    <img data-src="holder.js/32x32?theme=thumb&amp;bg=007bff&amp;fg=007bff&amp;size=1" alt="32x32" class="mr-2 rounded" src={fundo} data-holder-rendered="true" width="40" height="20"/>
                    <p class="media-body pb-3 mb-0 small lh-125 border-bottom border-gray">
                        <strong class="d-block text-gray-dark">10/02/2021 10:11</strong> Semana de defesa de Trabalhos de Conclusão de Curso - Ano/Semestre 2020.2.
                    </p>
                </div>
                <div class="media text-muted pt-3">
                    <img data-src="holder.js/32x32?theme=thumb&amp;bg=e83e8c&amp;fg=e83e8c&amp;size=1" alt="32x32" class="mr-2 rounded" src={fundo} data-holder-rendered="true" width="40" height="20"/>
                    <p class="media-body pb-3 mb-0 small lh-125 border-bottom border-gray">
                        <strong class="d-block text-gray-dark">10/02/2021 10:10</strong> Calendário para projeto de Trabalho de Conclusão de Curso Ano/Semestre 2021.1.
                    </p>
                </div>
                <div class="media text-muted pt-3">
                    <img data-src="holder.js/32x32?theme=thumb&amp;bg=6f42c1&amp;fg=6f42c1&amp;size=1" alt="32x32" class="mr-2 rounded" src={fundo} data-holder-rendered="true" width="40" height="20"/>
                    <p class="media-body pb-3 mb-0 small lh-125 border-bottom border-gray">
                        <strong class="d-block text-gray-dark">10/02/2021 10:08</strong> Plano de curso das turmas de 2020.2.
                    </p>
                </div>

            </div>

            <div class="my-3 p-3 bg-white rounded shadow-sm">
                <h6 class="border-bottom border-gray pb-2 mb-0">+Noticías:</h6>
                <div class="media text-muted pt-3">
                    <img data-src="holder.js/32x32?theme=thumb&amp;bg=007bff&amp;fg=007bff&amp;size=1" alt="32x32" class="mr-2 rounded" src={fundo2} data-holder-rendered="true" width="40" height="20"/>
                    <div class="media-body pb-3 mb-0 small lh-125 border-bottom border-gray">
                        <div class="d-flex justify-content-between align-items-center w-100">
                            <strong class="text-gray-dark">17/08/2020 09:34</strong>

                        </div>
                        <span class="d-block">Calendário para projeto de Trabalho de Conclusão de Curso Ano/Semestre 2020.2</span>
                    </div>
                </div>
                <div class="media text-muted pt-3">
                    <img data-src="holder.js/32x32?theme=thumb&amp;bg=007bff&amp;fg=007bff&amp;size=1" alt="32x32" class="mr-2 rounded" src={fundo2} data-holder-rendered="true" width="40" height="20" />
                    <div class="media-body pb-3 mb-0 small lh-125 border-bottom border-gray">
                        <div class="d-flex justify-content-between align-items-center w-100">
                            <strong class="text-gray-dark">17/08/2020 09:32</strong>

                        </div>
                        <span class="d-block">Semana de defesa de Trabalhos de Conclusão de Curso - Ano/Semestre 2020.1</span>
                    </div>
                </div>
                <div class="media text-muted pt-3">
                    <img data-src="holder.js/32x32?theme=thumb&amp;bg=007bff&amp;fg=007bff&amp;size=1" alt="32x32" class="mr-2 rounded" src={fundo2} data-holder-rendered="true" width="40" height="20"/>
                    <div class="media-body pb-3 mb-0 small lh-125 border-bottom border-gray">
                        <div class="d-flex justify-content-between align-items-center w-100">
                            <strong class="text-gray-dark">12/08/2020 19:54</strong>

                        </div>
                        <span class="d-block">Plano de curso das turmas de 2020.1 - Retomada</span>
                    </div>
                </div>

            </div>
        </main>


    </Container>
  )
};

export default Noticias