import styled, { css } from 'styled-components';

export const Container = styled.div`
    width: 100%;
    /* border: 1px solid red; */
    
`

export const BoxContent = styled.div`
    display: flex;
    flex-direction: row;
    width: 100%;
    /* height: 91vh; */
    background: #FFFFFF;
`

export const SideMenu = styled.div`
    display: flex;
    justify-content: center;
    width: 15%;
    background: #B24A87;
    height: 91.5vh;

    ul {
        list-style-type: none;
        padding: 10px 0;
    }

    li{
        display: flex;
        margin-bottom: 20px;
        height: 30px;
    }

    a {
        color: #FFFFFF;
        text-decoration: none;
    }

    li:hover {
        cursor: pointer;
    }

    h1 {
        font-size: 20px;
        font-weight: 600;
        color: #FFFFFF;
    }

    h2 {
        font-size: 18px;
        font-weight: 600;
        color: #FFFFFF;
    }

    span img {
        margin-right: 10px;
    }

`

export const ContentPage = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    width: 85%;
    padding: 50px 0;
    /* border: 10px solid #E3568B; */

    .inputArea{
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: row;
        width: 50%;

        img {
            margin-left: 10px;
            margin-bottom: 30px;
        }
    }

    h2 {
        color: red;
        font-size: 14px;
        margin-bottom: 20px;
        font-weight: 400;
    }

    .input {
        width: 350px;
        height: 40px;
        border: none;
        border-radius: 5px;
        margin-bottom: 30px;
        padding: 0 15px;
        -webkit-box-shadow: 0px 3px 14px 1px rgba(0,0,0,0.37); 
        box-shadow: 0px 3px 14px 1px rgba(0,0,0,0.37);
        font-size: 15px;
    }

    textarea {
        height: 100px;
        width: 350px;
        border: none;
        border-radius: 5px;
        margin-bottom: 30px;
        padding: 5px 15px;
        -webkit-box-shadow: 0px 3px 14px 1px rgba(0,0,0,0.37); 
        box-shadow: 0px 3px 14px 1px rgba(0,0,0,0.37);
        font-size: 14px;
    }

    button {
        width: 170px;
        height: 35px;
        background: #FF9A36;
        font-size: 20px;
        font-weight: 700;
        margin-top: 10px;
        border: none;
        border-radius: 5px;
        margin-top: 20px;
        color: #FFFFFF;
        :hover {
            opacity: 0.8;
            cursor: pointer;
        }
    }
`
