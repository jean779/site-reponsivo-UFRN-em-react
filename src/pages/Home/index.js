import React from 'react'
import "./home.css"
import { Container } from './styles'
import "bootstrap/dist/css/bootstrap.min.css"


function Home( ){
  return(
     <Container>
           
<main>
  <div class="container py-4">

    <div class="p-5 mb-4 bg-light rounded-3">
      <div class="container-fluid py-5">
        <h1 class="display-5 fw-bold">Em poucas palavras..</h1>
        <p class="col-md-8 fs-4 cor" >O Curso Superior de Tecnologia em Análise e Desenvolvimento de Sistemas (TADS) tem como objetivo a formação de profissionais capazes de compreender o processo de construção e reconstrução do conhecimento no domínio da análise e desenvolvimento
                    de sistemas e, dessa forma, realizar atividades de concepção, especificação</p>
       
      </div>
    </div>

    <div class="row align-items-md-stretch">
      <div class="col-md-6">
        <div class="h-100 p-5 text-white bg-dark rounded-3">
          <h2>Noticias..</h2>
          <p>10/02/2021 10:11 Semana de defesa de Trabalhos de Conclusão de Curso - Ano/Semestre 2020.2 10/02/2021 10:10 Calendário para projeto de Trabalho de Conclusão de Curso Ano/Semestre 2021.1..</p>
          
        </div>
      </div>
      <div class="col-md-6">
        <div class="h-100 p-5 bg-light border rounded-3">
          <h2>Mais um pouco sobre o TADS.. </h2>
          <p className="cor">Desenvolvimento de Sistemas (TADS) tem como objetivo a formação de profissionais capazes de compreender o processo de construção e reconstrução do conhecimento no domínio da análise e desenvolvimento de sistemas e, dessa forma,
                    realizar atividades de concepção, especificação, projeto, implementação, avaliação, suporte e manutenção de sistemas computacionais, orientando sua ação na sociedade em geral e no mundo do trabalho em particular para a
                    busca de soluções para o setor produtivo (notadamente o setor primário da economia) e para a melhoria da qualidade de vida das populações. Os profissionais formados atuarão na área de análise e desenvolvimento de sistemas,
                    podendo exercer atividades no campo da análise de sistemas, engenharia de software, gerência de projetos e administração de bancos de dados. Além da formação geral em Tecnologia em Análise e Desenvolvimento de Sistemas.</p>
          
        </div>
      </div>
    </div>

  </div>
</main>
   
     
      </Container>
  )
};

export default Home