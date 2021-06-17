import React from 'react'
import "bootstrap/dist/css/bootstrap.min.css"
import { Container } from "./styles.js"

function Calendario( ){
  return(
      <Container> 
        <h1>Calendario Acadêmico:</h1>
     <div>
      <div>
        <main>
          <div class="table-responsive">
            <table class="table table-striped table-sm">
              <thead>
                <tr>
                  <th>Semestre:</th>
                  <th>Data:</th>
                  <th>Assunto</th>
                </tr>
              </thead>
              <tbody>
                <tr>
               
                  <td className="cor">2020.1</td>
                  <td>04/01/2021 à 11/01/2021</td>
                  <td>→ Matrícula para o período 2020.1.</td>
            
                </tr>
                <tr>
                  <td>-</td>
                  <td>18/01/2021 à 19/01/2021</td>
                  <td>→ Re-matrícula para o período 2020.1.</td>
                  
                </tr>
                <tr>
                  <td>-</td>
                  <td>18/01/2021</td>
                  <td>→ Início do período letivo 2020.1.</td>
                 
                </tr>
                <tr>
                  <td>-</td>
                  <td>25/01/2021</td>
                  <td>→ Início do período trancamento de turma 2020.1.</td>
                 
                </tr>
                <tr>
                  <td>-</td>
                  <td>19/02/2021</td>
                  <td>→ Término do período trancamento de turma 2020.1.</td>
                 
                </tr>
                <tr>
                  <td>-</td>
                  <td>30/04/2021</td>
                  <td>→ Término do período letivo 2020.1.</td>
                 
                </tr>
    
              </tbody>
            </table>
          </div>
        </main>
      </div>
    </div>
    <div class="table-responsive">
            <table id="tb2" class="table table-striped table-sm">
              <thead>
                <tr>
                  <th>Semestre:</th>
                  <th>Data:</th>
                  <th>Assunto:</th>
                </tr>
              </thead>
              <tbody>
                <tr>
               
                  <td className="cor">2020.2</td>
                  <td>04/01/2021 à 11/01/2021</td>
                  <td>→ Matrícula para o período 2020.2.</td>
            
                </tr>
                <tr>
                  <td>-</td>
                  <td>18/01/2021 à 19/01/2021</td>
                  <td>→ Re-matrícula para o período 2020.2.</td>
                  
                </tr>
                <tr>
                  <td>-</td>
                  <td>18/01/2021</td>
                  <td>→ Início do período letivo 2020.2.</td>
                 
                </tr>
                <tr>
                  <td>-</td>
                  <td>25/01/2021</td>
                  <td>→ Início do período trancamento de turma 2020.2.</td>
                 
                </tr>
                <tr>
                  <td>-</td>
                  <td>19/02/2021</td>
                  <td>→ Término do período trancamento de turma 2020.2.</td>
                 
                </tr>
                <tr>
                  <td>-</td>
                  <td>30/04/2021</td>
                  <td>→ Término do período letivo 2020.2.</td>
                 
                </tr>
    
              </tbody>
            </table>
          </div>
  
      </Container>

  )
};

export default Calendario