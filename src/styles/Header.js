import styled from 'styled-components';

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
    height: 25px;

    h1 {
        position: relative;
        display: inline-block;
        font-size: 20px;
        color: #111111;
        font-weight: 700;

        @media only screen and (max-width: 800px) {
            font-size: 14px;
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
            width: 70px;
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
            width: 23px;
        }
    }
`

export const RigthMenu = styled.div`

    img:hover {
        opacity: 0.8;
        cursor: pointer;
    }

`