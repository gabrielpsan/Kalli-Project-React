import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;

    form {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        width: 30%;
        height: 70%;
        /* border: 1px solid #111; */

        @media only screen and (max-width: 1000px) {
            width: 100%;
        }

        h1 {
            color: rgb(78, 84, 100);
            font-size: 38px;
            margin-bottom: 30px;
        }

        .divInputOlho {
            display: flex;
            justify-content: center;
            width: 100%;
            margin-left: 12px;

            img {
                position: relative;
                right: 25px;
                top: 15px;
                width: 16px;
                height: 16px;

                :hover {
                    cursor: pointer;
                }
            }
        }

        input {
            border: none;
            width: 80%;
            height: 40px;
            background: rgba(255, 255, 255, 0.0000001);
            border-bottom: 1px solid rgba(78, 84, 100, 0.5);
            color: rgb(78, 84, 100);
            margin-bottom: 30px;
            padding: 5px 5px;
        }

        a {
            text-decoration: underline;
            color: rgb(33, 197, 229);
            margin-bottom: 30px;
            font-size: 13px;
            :hover {
                cursor: pointer;
            }
        }

        button {
            width: 115px;
            height: 38px;
            border: none;
            border-radius: 5px;
            background: rgb(33, 197, 229);
            color: #FFFFFF;
            font-size: 14px;
            font-weight: 700;
            margin-bottom: 30px;

            :hover {
                cursor: pointer;
            }
        }

        h2 {
            font-size: 14px !important;
            color: rgb(78, 84, 100);
            font-weight: 600;
            margin-bottom: 30px;

            a {
                text-decoration: none;
                font-weight: 700 !important;
                font-size: 15px !important;

                :hover {
                    cursor: pointer;
                }
            } 
        }

        .erroLogin {
            font-size: 12px;
            margin-bottom: 20px;
            color: red;
        }
    }
`
