import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    width: 100%;
`;


export const ContentSlider = styled.div`
    width: 100%;
    height: 450px;
    background: #B24A87;

    @media only screen and (max-width: 800px) {
        height: 400px;
    }
`

export const TitleSlider = styled.div`
    display: flex;
    justify-content: center;
    margin-top: 20px;
    h1 {
        font-size: 46px;
        color: #FFFFFF;

        @media only screen and (max-width: 800px) {
            font-size: 34px;
        }
    }
`