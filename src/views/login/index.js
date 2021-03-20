import React, { useEffect } from 'react'
import { Container, BoxLogin, ContentBoxLogin } from '../../styles/Login'
import "aos/dist/aos.css";
import olho from '../../utils/img/olho.png';
import Aos from 'aos';

const Login = () => {

    useEffect(() => {
        Aos.init({duration: 1000});
  
    }, [])

     function showValue() {
        let input = document.querySelector('#pass');
        console.log("input: ", input);
        if(input.getAttribute('type') === 'password'){
            input.setAttribute('type', 'text');
        } else {
            input.setAttribute('type', 'password');
        }
    };

    return (
        <Container>
            <form method="post">
                <h1>Login</h1>
                <input placeholder="E-mail" type="text" required/>
                <div className="divInputOlho">
                    <input id="pass" placeholder="Senha" type="password" required/>
                    <img onClick={() => showValue()} class="olho" src={olho}></img>
                </div>

                <a>Esqueci minha senha</a>
                <button>Entrar</button>
                <h2>Ainda não possui uma assinatura? <a href="/cadastrar"> Associe-se</a></h2>
            </form>
        </Container>
    )
  };

  export default Login;