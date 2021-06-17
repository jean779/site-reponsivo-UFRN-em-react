import styled from 'styled-components'

import posterBG from '../../assets/img/equipe.png'

export const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content:center;
    min-width: auto;
    min-height: 100vh;
    background-color: black;
    *{
      position: relative;
      top:0rem;
    }

`

export const Content = styled.div`
    display: flex;
    flex-direction: row;
    width: 80%;
    form {
        flex:1;
        min-width:390px;
        color: white;
        background-color: #15cdfc;
        border: none;

        & button{
            background-color: black;
            font-weight: bold;
        }
    }
`

export const Poster = styled.div`
    background: #f0f0f5 url(${posterBG}) no-repeat 30% top;
    flex: 1%;

    @media(max-width: 912px){

    }
`


