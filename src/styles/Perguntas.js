import styled from "styled-components";

export const ContainerPerguntas = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    background: #b24a87;
    margin-top: 100px;
    @media only screen and (max-width: 800px) {
        margin-top: 75px;
    }
`

export const BoxPerguntas = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 80%;
    border-radius: 30px;
    background: #FFF6EE;
    margin-top: 70px;
    margin-bottom: 70px;
    padding: 60px 60px;
    @media only screen and (max-width: 800px) {
        width: 92%;
        padding: 30px 30px;
        margin-top: 40px;
        margin-bottom: 40px;
    }
`

export const Pergunta = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: column;
    width: 100%;
    margin-bottom: 30px;

    transition: 0.5s;
    transform-origin: left;
    transform: scaleX(1);

`

export const TextPergunta = styled.div`
    display: flex;
    justify-content: space-between;
    width: 100%;
    border-radius: 20px;
    :hover {
        cursor: pointer;
    }

    h1 {
        font-size: 24px;
        color: #302F2B;
        @media only screen and (max-width: 800px) {
            font-size: 20px;
        }
    }

    button {
        border: none;
        background: rgba(255, 255,255, 0.0001);
        :hover {
            cursor: pointer;
        }
    }

    img {
        width: 20px;
        height: 20px;
        @media only screen and (max-width: 800px) {
            width: 15px;
            height: 15px;
        }
    }
`

export const BarraPergunta = styled.div`
    width: 100%;
    height: 3px;
    background: #302F2B;
    border-radius: 20px;
    margin-top: 20px;

`

export const HidenResposta = styled.div`
    margin-top: 20px;
    width: 100%;
    animation: surgir 0.2s ease-in-out;
    height: 100px;


    h1 {    
        font-size: 21px;
        animation: surgirTexto 0.5s ease-in-out;
        @media only screen and (max-width: 800px) {
            font-size: 16px;
            color: #2C2C2C;
        }
    }

    @keyframes surgirTexto {
        from{
            opacity: 0.0;
        }
        to {
            opacity: 1;
        }
    }

    @keyframes surgir {
        from{
            height: 0px;
        }
        to {
            height: 100px;
        }
    }
`