import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    width: 100%;

`;

export const Header = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
`

export const TopHeader = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    background: #FF9A36;
    height: 35px;    
    @font-face {
        font-family: 'RecoletaAlt';
        src: local(RecoletaAlt), url('../../assets/fonts/RecoletaAlt-Regular.woff'), format('woff');
    }

    h1 {
        position: relative;
        display: inline-block;
        font-size: 20px;
        color: #111111;
        font-weight: 700;
        font-family: 'RecoletaAlt';

        @media only screen and (max-width: 800px) {
            font-size: 18px;
        }
    }
`

export const BottomHeader = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 50px;
    padding: 0 20px;

    h1 {
        font-size: 30px;
        color: #b24a87;
        font-weight: 700;

        :hover {
            cursor: pointer;
        }
    }

    .logo {
        width: 90px;
        margin-left: 40px;
        @media only screen and (max-width: 800px) {
            width: 85px;
        }
    }

    img {
        width: 25px;
    }

    img:hover {
        opacity: 0.8;
        cursor: pointer;
    }

    @media only screen and (max-width: 800px) {
        img {
            width: 25px;
        }
    }
`

export const RigthMenu = styled.div`

    img:hover {
        opacity: 0.8;
        cursor: pointer;
    }

`

export const TextSubSlider = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    margin-top: 75px;
    margin-bottom: 75px;
    text-align: center;
    
    @media only screen and (max-width: 800px) {
        width: 95%;
        flex-direction: column;
    }
    h1 {
        font-size: 38px;
        color: #302F2B;
        @media only screen and (max-width: 800px) {
            font-size: 28px;
        }
    }

    img {
        width: 70px;
        margin-left: 20px;
        @media only screen and (max-width: 800px) {
            margin-left: 0px;
            margin-top: 10px;
        }
    }
`

export const ContainerProdutosPequenos = styled.div`
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
    width: 90%;
    @media only screen and (max-width: 800px) {
        justify-content: center;
    }
`

export const BoxProdutosPequenos = styled.div`
    height: 425px;
    @media only screen and (max-width: 800px) {
        width: 95%;
        height: 400px;
        margin-bottom: 10px;
    }

`

export const ImageBox = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 375px;
    height: 260px;
    background: #E3568B;

    @media only screen and (max-width: 800px) {
        width: 100%;
        height: 200px;
        margin-bottom: 10px;
    }

    img {
        width: 97.9%;
        height: 97%;
    }
`

export const TextPartBox = styled.div`
    h1 {
        font-size: 28px;
        margin-top: 2px;

        @media only screen and (max-width: 800px) {
            font-size: 24px;
        }
    }

    h2 {
        font-size: 26px;
        margin-top: 10px;

        @media only screen and (max-width: 800px) {
            font-size: 22px;
        }
    }

    p{
        font-size: 16px;
        color: #302F2B;
        opacity: 0.9;
        margin-top: 10px;
    }

    button {
        width: 170px;
        height: 41px;
        background: #FF9A36;
        font-size: 20px;
        font-weight: 700;
        margin-top: 10px;
        border: none;
        :hover {
            opacity: 0.8;
            cursor: pointer;
        }

        @media only screen and (max-width: 800px) {
            width: 150px;
            height: 35px;
        }
    }
`

export const ContainerProdutosGrandes = styled.div`
    display: flex;
    justify-content: space-between;
    width: 100%;
    margin-top: 100px;
    flex-wrap: wrap;
`

export const BoxProdutosGrandes = styled.div`
    height: 467px;
    width: 650px;

    @media only screen and (max-width: 800px) {
        width: 100%;
    }
`

export const ImageBoxGrandes = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 300px;
    background: #E3568B;

    @media only screen and (max-width: 800px) {
        width: 100%;    
        height: 225px;
        margin-bottom: 10px;
    }

    img {
        width: 99%;
        height: 97.9%;
    }
`

export const ImageBoxGrandesDark = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 300px;
    background: #302F2B;

    img {
        width: 99%;
        height: 97.7%;
    }
`

export const TextPartBoxGrandes = styled.div` 
    margin-left: 10px;

    h1 {
        font-size: 28px;
        margin-top: 2px;
        color: #302F2B;

        @media only screen and (max-width: 800px) {
            font-size: 24px;
        }
    }

    h2 {
        font-size: 26px;
        margin-top: 10px;
        color: #302F2B;

        @media only screen and (max-width: 800px) {
            font-size: 22px;
        }
    }

    p{
        font-size: 16px;
        color: #111;
        opacity: 0.9;
        margin-top: 10px;
        color: #302F2B;

        @media only screen and (max-width: 800px) {
            font-size: 14x;
        }
    }

    button {
        width: 170px;
        height: 41px;
        background: #FF9A36;
        font-size: 20px;
        font-weight: 700;
        margin-top: 10px;
        border: none;
        :hover {
            opacity: 0.8;
            cursor: pointer;
        }

        @media only screen and (max-width: 800px) {
            width: 150px;
            height: 35px;
            font-size: 18px;
        }
    }
`

export const ContainerVoceJaConhece = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    width: 100%;
    height: 450px;
    background: #B24A87;
    margin-top: 75px;
    text-align: center;

    @media only screen and (max-width: 800px) {
        height: 350px;
    }

    h1 {
        font-size: 50px;
        color: #FFFFFF;
        
        @media only screen and (max-width: 800px) {
            font-size: 26px;
            width: 97%;
        }
    }

    button {
        width: 275px;
        height: 45px;
        background: #FF9A36;
        font-size: 20px;
        font-weight: 700;
        margin-top: 70px;
        border: none;
        :hover {
            opacity: 0.8;
            cursor: pointer;
        }

        @media only screen and (max-width: 800px) {
            height: 40px;
            width: 205px;
            font-size: 16px;
        }
    }
`

export const TitleRedes = styled.div`
    display: flex;
    justify-content: center;
    width: 100%;
    height: 60px;
    margin-top: 75px;
    text-align: center;

    h1 {
        font-size: 44px;
        color: #302F2B;

        @media only screen and (max-width: 800px) {
            font-size: 24px;
        }
    }

`

export const BoxRedes = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
    width: 90%;
    margin-top: 75px;
    flex-wrap: wrap;
    @media only screen and (max-width: 800px) {
        margin-top: 50px;
    }
`

export const Redes = styled.div`
    width: 375px;
    height: 300px;
    background: #b24a87;
    margin-bottom: 20px;
    @media only screen and (max-width: 800px) {
        width: 235px;
        height: 210px;
    }
`

export const TextSubRedes = styled.div`
    margin-top: 100px;

    @media only screen and (max-width: 800px) {
        margin-top: 50px;
        width: 99%;
    }

    h1 {
        color: #b24a87;
        text-align: center;
        @media only screen and (max-width: 800px) {
            font-size: 20px;
        }
    }
`

export const TitlePerguntas = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    flex-direction: column;
    width: 100%;
    margin-top: 100px;

    @media only screen and (max-width: 800px) {
        margin-top: 50px;
    }

    h1 {
        font-size: 50px;
        color: #b24a87;
        @media only screen and (max-width: 800px) {
            font-size: 26px;
            margin-top: 30px;
        }
    }

    h2 {
        margin-top: 20px;
        font-size: 24px;
        color: #302F2B;
        @media only screen and (max-width: 800px) {
            font-size: 16px;
        }
    }
`

export const TitleFeedback = styled.div`
    margin-top: 75px;
    h1 {
        color: #b24a87;
        text-align: center;
        font-size: 48px;
        @media only screen and (max-width: 800px) {
            font-size: 24px;
        }
    }
`

export const ContainerFeedback = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-around;
    flex-wrap: wrap;
    margin-top: 100px;
    width: 90%;

    @media only screen and (max-width: 800px) {
        margin-top: 50px;
    }
`

export const Feedback = styled.div`
    width: 460px;
    margin-bottom: 30px;
    h1{
        font-size: 20px;
        color: #302F2B;
        text-align: center;
        @media only screen and (max-width: 800px) {
            font-size: 14px;
        }
    }
`

export const BordaFeedback = styled.div`
    height: 30px;
    margin-top: 20px;
    background: #b24a87;
    @media only screen and (max-width: 800px) {
        margin-top: 10px;
        height: 24px;
    }
`


export const ContainerVantagens = styled.div`
    display: flex;
    width: 100%;
    justify-content:center;
    align-items: center;
    flex-direction: row;
    flex-wrap: wrap;
    margin-top: 75px;
    @media only screen and (max-width: 800px) {
        margin-top: 45px;
    }
`

export const Vantagem = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: row;
    /* height: 200px; */
`

export const ImgVantagem = styled.div`
    img {
        width: 140px;
        margin-right: 10px;
    }

    .seguranca {
        width: 155px;
        height: 145px;
    }

    .cartao {
        width: 130px;
        margin-top: 10px;
    }
`

export const TextVantagem = styled.div`
    h1 {
        font-size: 26px;
        color: #b24a87;
        margin-bottom: 5px;
        @media only screen and (max-width: 800px) {
            font-size: 20px;
        }
    }

    p {
        font-size: 22px;
        color: #b24a87;
        font-weight: 700;
        margin-left: 10px;
        @media only screen and (max-width: 800px) {
            font-size: 18px;
        }
    }

`

export const ContainerNovidades = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
    flex-direction: column;
    width: 100%;
    height: 400px;
    background: #b24a87;
    margin-top: 40px;
`

export const TopNovidades = styled.div`
    display: flex;
    justify-content: space-around;
    /* flex-direction: row; */
    flex-wrap: wrap;
    width: 100%;

    @media only screen and (max-width: 1000px) {
        justify-content: center;
        flex-direction: column;
        align-items: center;
        margin-top: 20px;
    }
    h1 {
        font-size: 22px;
        color: #FFFFFF;
        text-align: center;
        margin-right: 40px;
        @media only screen and (max-width: 1000px) {
            margin-right: 0px;
            font-size: 18px;
        }
    }

    input {

        width: 460px;
        height: 50px;
        border: none;
        padding: 10px 10px;
        margin-right: 40px;
        font-size: 20px;
        color: #b24a87;
        font-weight: 700;
        @media only screen and (max-width: 1000px) {
            margin: 0;
            margin-bottom: 20px;
            margin-top: 20px;
            width: 75%;
            height: 40px;
        }

        ::-webkit-input-placeholder{
            padding: 10px 10px;
            font-size: 20px;
            font-weight: 700;
            color: #b24a87;
            @media only screen and (max-width: 1000px) {
                font-size: 18px;
            }
        }
    }

    button {
        width: 150px;
        height: 45px;
        border: none;
        background: #FF9A36;
        font-size: 28px;
        color: #b24a87;
        font-weight: 600;

        :hover {
            cursor: pointer;
            opacity: 0.8;
        }
        @media only screen and (max-width: 1000px) {
            width: 35%;
            height: 40px;
            font-size: 18px;
        }
    }
`

export const BottomNovidades = styled.div`
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
    width: 100%;
    @media only screen and (max-width: 1000px) {
        flex-direction: column;
        margin-top: 20px;
    }
    h1 {
        font-size: 22px;
        color: #FFFFFF;
        text-align: center;
        margin-right: 40px;
        font-weight: 700;
        @media only screen and (max-width: 1000px) {
            margin-right: 0px;
            /* margin-bottom: 20px; */
            font-size: 14px;
        }
    }
`

export const RedesSociaisNovidades = styled.div`

    @media only screen and (max-width: 1000px) {
        text-align: center;
        margin-bottom: 20px;
        margin-top: 20px;
    }
    img {
        width: 40px;
        margin-right: 20px;
        @media only screen and (max-width: 1000px) {
            width: 30px;
        }
    }

`

export const EsquerdaNovidade = styled.div`
    width: 33%;
    display: flex;
    justify-content: center;
    @media only screen and (max-width: 1000px) {
        width: 100%;
    }
`

export const MeioNovidade = styled.div`
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    width: 60%;
    @media only screen and (max-width: 1000px) {
        width: 100%;
    }
`

export const DireitaNovidade = styled.div`
    display: flex;
    justify-content: center;
    width: 33%;
    @media only screen and (max-width: 1000px) {
        width: 100%;
    }
`


export const ButtonInicio = styled.div`
    position: fixed;
    bottom: 10px;
    right: 10px;
    width: 50px;
    height: 50px;
    .back_to_top-show {
        display: block;
    }
    button {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100%;
        height: 100%;
        border: none;
        border-radius: 50%;
        background: #FF9A36;
        border: 3px solid #FFF;
        cursor: pointer;
    }
`


