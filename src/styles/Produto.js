import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
`;

export const ContainerViewProduto = styled.div`
    display: flex;
    justify-content: space-around;
    /* border: 1px solid #111; */
    width: 98%;
    padding: 10px 10px;
    @media only screen and (max-width: 800px) {
        flex-direction: column;
    }
`;

export const LeftViewProduto = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    width: 49.5%;
    /* border: 1px solid red; */
    @media only screen and (max-width: 800px) {
        width: 100%;
    }
`;

export const RigthViewProduto = styled.div`
    padding: 0 20px;
    width: 49.5%;

    @media only screen and (max-width: 800px) {
        width: 100%;
        margin-top: 20px;
        padding: 0;
    }
    /* border: 1px solid blue; */

    h1 {
        font-size: 42px;
        color: #302F2B;
        @media only screen and (max-width: 800px) {
            font-size: 26px;
        }
    }

    p {
        font-size: 20px;
        color: #302F2B;
        margin-bottom: 30px;
        width: 55%;
        letter-spacing: 0.01em;
        @media only screen and (max-width: 800px) {
            font-size: 18px;
            width: 100%;
            margin-bottom: 20px;
        }
    }

    .descricao {
        font-size: 18px;
        margin-top: 20px;
        @media only screen and (max-width: 800px) {
            font-size: 16px;
        }
    }

    h2 {
        font-size: 32px;
        font-weight: 700;
        color: #302F2B;
        @media only screen and (max-width: 800px) {
            font-size: 22px;
        }
    }

    button {
        margin-top: 10px;
        width: 275px;
        font-weight: 700;
        height: 37px;
        border: none;
        background: #FF9A36;
        font-size: 26px;

        :hover {
            cursor: pointer;
            opacity: 0.9;
        }
        @media only screen and (max-width: 800px) {
            width: 205px;
            height: 32px;
            font-size: 18px;
        }
    }
`;

export const ContainerImagemGrande = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    background: #E3568B;
    width: 98%;
    height: 76%;

    img {
        width: 99%;
        height: 99%;
    }

`;

export const ContainerImagensPequenas = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    width: 98%;
    /* border: 1px solid purple; */
    height: 130px;
    @media only screen and (max-width: 800px) {
        width: 100%;
    }

    /* square buttons */
    .rec.rec-arrow {
        border-radius: 0;
    }
    /* round buttons on hover */
    .rec.rec-arrow:hover {
        border-radius: 50%;
    }
    /* hide disabled buttons */
    .rec.rec-arrow:disabled {
        visibility: hidden;
    }
    /* disable default outline on focused items */
    /* add custom outline on focused items */
    .rec-carousel-item:focus {
        outline: none;
        box-shadow: inset 0 0 1px 1px lightgrey;
    }
`;

export const ImagemPequena = styled.div`

    background: #E3568B;
    width: 130px !important;
    height: 120px !important;

    @media only screen and (max-width: 800px) {
        margin-right: 10px;
        height: 90px !important;
    }

    img {
        width: 100%;
        height: 100%;
    }
  
`;

export const CalcularFrete = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    margin-top: 60px;
    @media only screen and (max-width: 800px) {
        margin-top: 30px;
        flex-wrap: wrap;
    }
    h2 {
        font-size: 18px;
        margin-right: 30px;
    }

    input {
        padding: 10px 10px;
        border: none;
        width: 250px;
        height: 40px;
        background: #e8e8e8;
        font-size: 20px;
        @media only screen and (max-width: 800px) {
            margin-top: 30px;
            height: 30px;
            width: 220px;
        }
    }

    button {
        width: 100px;
        height: 30px;
        font-size: 18px;
    }
`;

export const TitleComoFunciona = styled.div`
    display: flex;
    justify-content: center;
    width: 100%;
    margin-top: 50px;
    h1 {
        color: #b24a87;
        font-size: 38px
    }
`

export const ContainerPassos = styled.div`
    display: flex;
    justify-content: center;
    width: 100%;
    height: 5px;
    border: 1px solid #111;

`
