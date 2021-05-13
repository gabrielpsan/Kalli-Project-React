import styled from 'styled-components';

export const Container = styled.div`
    background: #ffffff;
    position: absolute;
    text-align: center;
    top: 75px;
    right: 10px;
    /* bottom: 0; */
    /* left: 0; */
    z-index: 99999;
    animation: slideDown 0.4s ease-out;
    -webkit-box-shadow: 0px 1px 9px -3px rgba(0,0,0,0.75);
    -moz-box-shadow: 0px 1px 9px -3px rgba(0,0,0,0.75);
    box-shadow: 0px 1px 9px -3px rgba(0,0,0,0.75);

    
    @media only screen and (max-width: 800px) {
        left: 0px;
        width: 200px;
    }
`;


export const BoxContent = styled.div`
    display: flex;
    flex-direction: row;

    @media only screen and (max-width: 800px) {
        flex-direction: column;

        .separa {
            border-top: 1px solid #b4b4b4;
        }
    }



    ul{
        list-style-type: none;
        width: 200px;

    }


    a {
            color: #B24A87;
            text-decoration: none;
        }

    li {
        display: flex;
        align-items: center;
        justify-content: center;
        height: 40px;
        font-size: 17px;
        color: #B24A87;
        font-weight: 600;
        :hover {
            cursor: pointer;
            background: rgba(0,0,0,0.05);
            border: 1px solid #dadada;
        }
    }   

`

export const DivMinhaBox = styled.div`
        display: flex;
        flex-direction: column;
        width: 100%;
        span {
            font-weight: 600;
            color: #FF9A36;
        }
`

export const DivUsuario = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    margin-bottom: 10px;
    padding: 10px 0;
    border: 1px solid #f1e0ea;

    span{
        display: flex;
        justify-content: center;
        align-items: center;
        width: 45px;
        height: 45px;
        border-radius: 50%;
        background: #f1e0ea;
        margin-right: 5px;
        img {
            width: 25px;
            height: 25px;
        }
    }

    a {
        font-weight: 600;
        font-size: 13px;
    }

    :hover {
        cursor: pointer;
    }


`


export const DadosPessoais = styled.div`
    h3 {
        font-size: 12px;
        color: #B24A87;
    }
`