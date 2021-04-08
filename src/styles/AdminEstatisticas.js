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

export const BoxEstatistica = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    /* border: 5px solid #E3568B; */
    border-radius: 10px;
    background: #e9e9e9;
    width: 250px;
    height: 150px;
    margin-right: 10px;
    padding: 10px 10px;
    h1 {
        font-size: 24px;
        font-weight: 700;
        color: #606060;
    }

    h2 {
        font-size: 30px;
        font-weight: 600;
        color: #606060;
    }
`

export const ContainerEstatisticas = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: row;
    height: 320px;
    width: 90%;
    -webkit-box-shadow: 0px 0px 24px 1px rgba(0,0,0,0.29); 
    box-shadow: 0px 0px 24px 1px rgba(0,0,0,0.29);
    border-radius: 5px;
`

export const Graficos = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-around;
    width: 90%;
    margin-top: 30px;
`

export const ContainerGraficosCadastros = styled.div`
    width: 47.5%;
    height: 300px;
    -webkit-box-shadow: 0px 0px 24px 1px rgba(0,0,0,0.29); 
    box-shadow: 0px 0px 24px 1px rgba(0,0,0,0.29);
`

export const ContainerGraficosVendas = styled.div`
    width: 47.5%;
    height: 300px;
    -webkit-box-shadow: 0px 0px 24px 1px rgba(0,0,0,0.29); 
    box-shadow: 0px 0px 24px 1px rgba(0,0,0,0.29);
    border-radius: 5px;
`

