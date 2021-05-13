import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    width: 100%;
`;

export const ContainerPagamento = styled.div`
    display: flex;
    flex-direction: row;
    width: 80%;
    background: #FFFFFF;
    border-radius: 5px;
    -webkit-box-shadow: 0px 0px 24px 1px rgba(0,0,0,0.29); 
    box-shadow: 0px 0px 24px 1px rgba(0,0,0,0.29);
    margin-top: 50px;
    margin-bottom: 50px;
    @media only screen and (max-width: 800px) {
        width: 100%;
        flex-direction: column;
    } 
`;


export const LeftPagamentoInputs = styled.div`
    width: 70%;
    margin-bottom: 50px;
    @media only screen and (max-width: 800px) {
        width: 100%;
    }
`;

export const RightPagamento = styled.div`
    width: 30%;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    @media only screen and (max-width: 800px) {
        display: none;
    } 

    
    img {
        width: 100%;
        height: 100%;
    }
`;


export const RightConteudo = styled.div`
    position: absolute;
    width: 75%;
    background: #FFFFFF;
    height: 90%;
    border-radius: 20px;
    z-index: 999999;
    padding: 40px 20px;

    @media only screen and (max-width: 1200px) {
        display: none;
    } 

    .imgPagamento {
        width: 130px;
        margin-bottom: 10px;
        @media only screen and (max-width: 1300px) {
            width: 100px;
        }
    }

    h2 {
        font-size: 17px;
        margin-bottom: 20px;
        @media only screen and (max-width: 1300px) {
            font-size: 14px;
        }
    }

    h1{ 
        margin-bottom: 10px;
        font-size: 28px;
        @media only screen and (max-width: 1300px) {
            font-size: 22px;
        }
        @media only screen and (max-width: 800px) {
            font-size: 18px;
        } 
    }
`;


export const Passos = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 70px;
    padding: 10px;
    flex-wrap: wrap;

    @media only screen and (max-width: 800px) {
        justify-content: space-around;
    } 
    img {
        margin-right: 50px;
        height: 100%;
        @media only screen and (max-width: 1300px) {
            height: 80%;
            margin-right: 10px;
        }
    }

    .logo {
        @media only screen and (max-width: 800px) {
            display: none;
        } 
    }

    .passo {
        display: flex;
        align-items: center;
        margin-right: 10px;

        @media only screen and (max-width: 800px) {
            flex-direction: column;
            justify-content: center;
        } 

        h2{
            margin-left: 10px;
            font-weight: 400;
            font-size: 18px;
            @media only screen and (max-width: 1300px) {
                font-size: 15px;
            }
            @media only screen and (max-width: 800px) {
                margin-left: 0px;
            }

        }
    }

    .numero1 {
        display: flex;
        justify-content: center;
        align-items: center;
        color: #b24a87;
        width: 40px;
        height: 40px;
        border-radius: 50px;
        border: 3px solid #b24a87;
        font-size: 11px;
        @media only screen and (max-width: 1300px) {
            width: 35px;
            height: 35px;
            font-size: 10px;
        }

        img {
            width: 24px;
            height: 24px;
            margin: 0;
        }
    }

    .ok {
        display: flex;
        justify-content: center;
        align-items: center;
        background: #FF9A36;
        border: none;
        color: #FFFFFF;


    }
`;

export const Dados = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 120px;
    @media only screen and (max-width: 800px) {
        margin-top: 20px;
    } 
`;


export const ProdutoDiv = styled.div`
    width: 450px;
    height: 350px;
    border: 5px solid #FF9A36;
    padding: 20px;
    background: #FFF6EE;

    @media only screen and (max-width: 900px) {
        width: 350px;
        height: 250px;
    }

    h3 {
        color: #111;
        margin-bottom: 30px;
        font-size: 20px;
        @media only screen and (max-width: 900px) {
            margin-bottom: 0px;
            font-size: 14px;
        }
    }

    .divImagemProduto {
        display: flex;
        align-items: center;
        margin-top: 40px;

        @media only screen and (max-width: 900px) {
            margin-top: 10px;
        }

        img {
            width: 150px;
            height: 170px;
            margin-right: 20px;
            border-radius: 5px;

            @media only screen and (max-width: 900px) {
                width: 100px;
                height: 100px;
            }
        }

        h1 {
            font-weight: 700;
            color: #b24a87;

            @media only screen and (max-width: 900px) {
                font-size: 20px;
            }
        }

        h2 {
            font-size: 20px;
            color: #111;
            margin-bottom: 10px;

            
            @media only screen and (max-width: 900px) {
                font-size: 16px;
            }
        }

        button {
            width: 200px;
            height: 40px;
            border: none;
            background: #FF9A36;
            border-radius: 5px;
            color: #FFFF;
            font-size: 16px;
            font-weight: 600;
            margin-top: 20px;
            :hover {
                cursor: pointer;
            }

            @media only screen and (max-width: 900px) {
                width: 120px;
                height: 30px;
            }
        }
    }
`;


export const IdentificacaoDiv = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: row;
    flex-wrap: wrap;
    margin-bottom: 20px;
`


export const EntregaDiv = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: row;
    flex-wrap: wrap;
    margin-bottom: 20px;
`


export const Input = styled.div`
    display: flex;
    flex-direction: column;
    margin-bottom: 40px;
    margin-right: 10px;

    @media only screen and (max-width: 900px) {
        margin-top: 20px;
    }

    input {
        padding: 0 10px;
        width: 30vw;
        height: 40px;
        border: none;
        border-bottom: 3px solid #b4b4b4;
        font-size: 16px;

        @media only screen and (max-width: 900px) {
            height: 35px;
            border-bottom: 1px solid #b4b4b4;
        }
    }

    .cep {
        width: 20vw;
    }

    .numero {
        width: 10vw;
    }

    .uf {
        width: 10vw;
    }

    .rua {
        width: 15vw;
    }

    h1 {
        color: #8b8b8b;
        font-size: 16px;
        font-weight: 500;

        @media only screen and (max-width: 900px) {
            font-size: 14px;
        }
    }

`

export const ButtonDiv = styled.div`

    display: flex;
    justify-content: center;
    width: 100%;


    .voltar {
        width: 200px;
        height: 45px;
        border: 3px solid #FF9A36;
        color: #FF9A36;
        font-size: 20px;
        font-weight: 600;
        border-radius: 5px;
        background: #FFFFFF;
        margin-right: 10px;
        :hover {
            cursor: pointer;
        }
        @media only screen and (max-width: 900px) {
            width: 150px;
            height: 40px;
            font-size: 16px;
        }
    }

    .voltar:active {
        background: #FF9A36;
        color: #FFFFFF;
    }

    .proximo {
        width: 200px;
        height: 45px;
        border: none;
        color: #FFFFFF;
        font-size: 20px;
        font-weight: 600;
        border-radius: 5px;
        background: #FF9A36;

        :hover {
            cursor: pointer;
        }

        @media only screen and (max-width: 900px) {
            width: 150px;
            height: 40px;
            font-size: 16px;
        }
    }

    .proximo:active {
        background: #ffa851;
    }
`

export const PagamentoDiv = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
    width: 100%;

    form {
        padding: 20px 20px;
        margin-bottom: 50px;
        width: 90%;
        background: #f3f3f3;
    }

    .divPrincipal {
        display: flex;
        justify-content: center;
        width: 90%;
    }

    .divComprador {
        padding: 20px 20px;
        /* border: 3px solid #d3d3d3; */
        border-radius: 5px;
    }

    .divEmail {
        display: flex;
        flex-direction: column;

        label {
            font-weight: 600;
            font-size: 16px;
            color: #4D4D4D;
        }

        input {
            font-size: 16px;
            font-weight: 500;
            width: 300px;
            height: 30px;
            padding: 0 3px;
            margin-bottom: 10px;
            border: none;
            border-bottom: 3px solid #a3a3a3;
            background: #efefef;
            color: #4D4D4D;
        }

    }

    select {
        width: 350px;
        height: 30px;
        background: #efefef;
        margin-bottom: 10px;
        border: none;
        border-bottom: 3px solid #a3a3a3;
    }

    .textoComprador {
        font-size: 20px;
        font-weight: 600;
        color: #33C5F0;
    }

    .proximo {
        width: 200px;
        height: 45px;
        border: none;
        color: #FFFFFF;
        font-size: 20px;
        font-weight: 600;
        border-radius: 5px;
        background: #FF9A36;

        :hover {
            cursor: pointer;
        }

        @media only screen and (max-width: 900px) {
            width: 150px;
            height: 40px;
            font-size: 16px;
        }
    }

    .proximo:active {
        background: #ffa851;
    }

    .send {
        display: flex;
        justify-content: center;
        align-items: center;
        margin-top: 20px;
    }
`


export const DadosEntrega = styled.div`

    width: 100%;
    border: 3px solid #b24a87;
    
`
