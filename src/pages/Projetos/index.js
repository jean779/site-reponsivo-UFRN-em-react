import React from 'react'
import "bootstrap/dist/css/bootstrap.min.css"
import { Container } from './styles'
import "./projetos.css"
import codigos from '../../assets/img/coidgos.jpg'
import sites from "../../assets/img/sites2.jpg"
import stonks from "../../assets/img/stonks.jpg"
import etico from "../../assets/img/etico.jpg"
import tecnologia from "../../assets/img/tecnologia.jpg"
import equipe from "../../assets/img/equipe.png"
function Projetos( ){
  return(
      <Container>
        <main  id="proj">
        <header>
        <h1 className="font" id="titulo">Perfil profissional:</h1>
        <p>O profissional egresso do curso de Tecnologia em Análise e Desenvolvimento de Sistemas adquire um elenco de competências e 28 habilidades. Segundo o Catálogo Nacional de Cursos Superiores de Tecnologia este profissional analisa, projeta, desenvolve,
            testa, implanta e mantém sistemas computacionais de informação.</p>
        </header>
        <div class="row">
          <div class="col-lg-4">
            <img class="rounded-circle" src={codigos} alt="" />
            <h2>Ser atento..</h2>
            <p>• Ser atento ao impacto das Tecnologias da Informação e Comunicação no atendimento e antecipação estratégica das necessidades da sociedade e das organizações;</p>
          </div>
          <div class="col-lg-4">
            <img class="rounded-circle" src={sites} alt=""/>
            <h2>Criativo</h2>
            <p>• Ser criativo, crítico e sistêmico na análise, compreensão e resolução de problemas da área de análise e desenvolvimento de sistemas computacionais;</p>
          </div>
          <div class="col-lg-4">
            <img class="rounded-circle" src={stonks}alt="" />
            <h2>Mente empreendedora</h2>
            <p>• Ser empreendedor na geração e identificação de oportunidades de negócios na área de análise e desenvolvimento de sistemas computacionais;</p>
          </div>
          <div class="row">
          <div class="col-lg-4">
            <img class="rounded-circle" src={etico} alt=""/>
            <h2>Ética</h2>
            <p>• Ser ético e responsável perante as questões sociais, profissionais, ambientais, legais, políticas, humanísticas e tecnológicas;</p>
          </div>
          <div class="col-lg-4">
            <img class="rounded-circle" src={tecnologia} alt="" />
            <h2>Comprometimento</h2>
            <p>• Ser comprometido com o desenvolvimento contínuo de conhecimentos, competências e habilidades, e com a evolução da tecnologia, da sociedade e do mundo do trabalho;</p>
          </div>
          <div class="col-lg-4">
            <img class="rounded-circle" src={equipe} alt=""/>
            <h2>Colaboração</h2>
            <p>• Ser colaborativo na atuação em equipes multidisciplinares.</p>
          </div>
        </div>
        </div>

    </main>




      </Container>
  )
};

export default Projetos