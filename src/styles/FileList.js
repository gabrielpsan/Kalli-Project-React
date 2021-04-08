import styled from 'styled-components';

export const Container = styled.ul`
    margin-top: 20px;
    height: 158px;
    overflow-y: scroll;
    

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

    li {
        display: flex;
        justify-content: space-between;
        color: #444;

        & + li {
            margin-top: 15px;
        }
    }

    .icons {
        display: flex;
        align-items: center;
    }
  
`;


export const FileInfo = styled.div `
    display: flex;
    align-items: center;

    div {
        display: flex;
        flex-direction: column;
        span{
            font-size: 12px;
            color: #999;

            button{
                font-size: 12px;
                border: 0;
                background: transparent;
                color: #e57878;
                width: 100px;
                margin-left: 5px;
                margin-top: 0;
                cursor: pointer;
            }
        }   
    }
`;

export const Preview = styled.div `
    width: 36px;
    height: 36px;
    border-radius: 5px;
    background-image: url(${props => props.src});
    background-repeat: no-repeat;
    background-size: cover;
    background-position: 50% 50%;
    margin-right: 5px;
`;
