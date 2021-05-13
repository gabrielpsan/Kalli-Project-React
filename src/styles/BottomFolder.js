import styled from 'styled-components';

export const Container = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    bottom: 0;
    overflow-x: hidden;
`

export const Text = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    background-color: #E3568B;
    align-items: center;
    color: #fff;
    text-align: left;

  p {
    width: 90%;
    border-top: 2px solid #d6d6d6;
    padding: 20px 0px;
    opacity: 0.8;
    font-size: 14px;
    display: flex;
    justify-content: center;
  }

  img {
    opacity: 0.6;
    background: #fff;
    width: 100%;

  }

  @media only screen and (max-width: 1100px) {
    p {
      padding: 20px 10px 20px 10px;
      text-align: center;
    }
  }
`

export const FooterBox = styled.footer`
    min-width: 100vw;
    border-top: 1px solid #eaeaea;
    display: flex;
    justify-content: space-around;
    background-color: #E3568B;
    padding: 0px 0px 20px 0px;
    a {
        display: flex;
        align-items: center;
        text-decoration: none;
        /* color: #fff; */
        /* opacity: 0.6; */
    }

    .ulFooter { 
        margin-top: 63px;
        /* height: 100%; */
    }

    .ulFooter2 { 
        margin-left: 0% !important;
        margin-top: 10vh !important;
    }

    .li-Input {
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    ul {
        input {
            border: none;
            height: 35px;
            width: 250px;
            padding: 0 5px;
        }

        button {
            width: 100px;
            height: 30px;
            margin-top: 10px;
            border: none;
            background: #FF9A36;
            color: #FFF;
        }
    }


    li {
        margin-bottom: 23px;
        /* color: white; */
        list-style-type: none;
        /* width: 150px; */
        /* padding: 8px; */
        /* opacity: 80%; */
        font-size: 18px;
        align-items: center;
        display: flex;
        color: #fff;

        a {
        color: #fff;
        }

        .title {
        color: #FFF;
        font-weight: 600;
        margin-top: 10%;

        }
    }

    img {
        margin-right: 10px;
    }

    li:hover {
        cursor: pointer;
        text-decoration: underline;
    }

    .cadastur {
        width: 150px;
        height: 50px;
        margin-top: 40%;
        @media only screen and (max-width: 1100px) {
            margin-top: 10px;
        }
        img {
            width: 100%;
            height: 100%;
        }
    }

    @media only screen and (max-width: 1100px) {
        margin: 0px;
        width: 100%;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        display: block;

        .logo {
            margin-top: 10%;
            margin-left: 5% !important;

        }

        .ulFooter {
            width: 100% !important;
            margin: 0 !important;
            text-align: left;
            margin-left: 5% !important;
        }

        .cadastur img {
            margin-top: 20%;
        }

    }
    
  li:first-child {
      color: #FFF;
      font-size: 18px;
      font-weight: 600;
      margin-top: 10%;
  }


`
