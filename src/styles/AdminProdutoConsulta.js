import styled from 'styled-components';

export const Container = styled.div`
    width: 100%;
    /* border: 1px solid red; */
    
`

export const BoxContent = styled.div`
    display: flex;
    flex-direction: row;
    width: 100%;
    height: 91vh;
    background: #FFFFFF;
`

export const SideMenu = styled.div`
    display: flex;
    justify-content: center;
    width: 15%;
    background: #B24A87;

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
    
    .buttonEnvia {
        width: 200px;
        height: 35px;
        border: none;
        background: #FF9A36;
        border-radius: 5px;
        color: #FFFFFF;
        font-size: 16px;
        font-weight: 700;
        :hover {
            cursor: pointer;
        }
    }
    
`

export const TableData = styled.div`
    width: 80%;
    border-radius: 5px;
    /* -webkit-box-shadow: 0px 0px 22px 8px rgba(0,0,0,0.33); 
    box-shadow: 0px 0px 22px 8px rgba(0,0,0,0.33); */

    ::-webkit-scrollbar-track {
      background-color: #F4F4F4;
    }
    ::-webkit-scrollbar {
      width: 8px;
      background: #F4F4F4;
    }
    ::-webkit-scrollbar-thumb {
      background: #FF9A36;
      border-radius: 2px;
    }
`

export const BoxEstatistica = styled.div`
    h1{
        font-size: 58px;
    }
`