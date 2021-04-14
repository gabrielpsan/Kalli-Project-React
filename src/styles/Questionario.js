import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    height: 100%;
`;


export const ContainerQuestionario = styled.div`
    width: 60%;
    display: flex;
    align-items: center;
    flex-direction: column;
    background: #E3568B;
    border-radius: 10px;
    padding: 20px 0;

    @media only screen and (max-width: 1100px) {
        width: 90%;
    }
`;


// export const ImgHeader = styled.div`
//     width: 100%;
//     height: 200px;

//     img {
//         width: 100%;
//         height: 100%;
//     }

            
//     @media only screen and (max-width: 800px) {
//         height: 150px;
//     }

// `;


export const TextoHeader = styled.div`
    width: 100%;
    text-align: center;

    h2 {
        font-weight: 700;
        color: #FFFFFF;

        
        @media only screen and (max-width: 800px) {
            font-size: 19px;
        }
    }
`;


export const HeaderQuestionario = styled.div`
    width: 90%;
    height: 100px;
    display: flex;
    justify-content: center;
    align-items: center;
    /* @media only screen and (max-width: 800px) {
        height: 250px;
    } */
`;


export const Borda = styled.div`
    width: 90%;
    height: 10px;
    border-top: 10px solid #FF9A36;
    border-radius: 5px;
    margin-bottom: 5px;
    margin-top: 10px;
`;


export const Pergunta = styled.div`
    width: 90%;
    height: 200px;
    background: #FFFFFF;
    border-radius: 10px;
    padding: 10px 20px; 
    margin-bottom: 15px;

    h1 {
        font-size: 24px;
        color: #302F2B;

        @media only screen and (max-width: 800px) {
            font-size: 20px;
        }
    }

    @media only screen and (max-width: 800px) {
        height: 170px;
    }
`;


export const Inputs = styled.div`
    margin-top: 10px;
    .inputs {
        display: flex;
        flex-direction: column;
    }

    .inputR{
        margin-bottom: 5px;
    }
    
    label {
        font-size: 18px;
        font-weight: 700;
        color: #504e47;
        margin-left: 10px;
        @media only screen and (max-width: 800px) {
            font-size: 16px;
        }
    }
`;


export const ButtonQuestionario = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;

    button {
        width: 200px;
        height: 40px;
        border: none;
        background: #FF9A36;
        border-radius: 5px;
        color: #FFFFFF;
        font-size: 18px;
        font-weight: 600;
        cursor: pointer;

        :hover {
            opacity: 0.8;
        }
    }

`;
