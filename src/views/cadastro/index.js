import React, { useEffect } from 'react'
import { Container, BoxLogin, ContentBoxLogin } from '../../styles/Cadastro'
import "aos/dist/aos.css";
import Aos from 'aos';
import olho from '../../utils/img/olho.png';
import api from "../../services/api";

const Cadastro = () => {

    useEffect(() => {
        Aos.init({duration: 1000});
    }, [])

    async function sendCadastro() {
        await api.post(`/usuario`).then(res => {
          console.log(res.data);
        });
      }

    function showValue() {
        let input = document.querySelector('#pass');
        console.log("input: ", input);
        if(input.getAttribute('type') === 'password'){
            input.setAttribute('type', 'text');
        } else {
            input.setAttribute('type', 'password');
        }
    };

    function handleSubmit(){
        sendCadastro()
    }

    return (
        <Container>
            <form method="post">
                <h1>Cadastrar</h1>
                <input placeholder="Nome Completo" type="text"/>
                <input placeholder="E-mail" type="text"/>
                <input placeholder="Data de Nascimento" type="date"/>
                <div className="divInputOlho">
                    <input id="pass" placeholder="Senha" type="password" required/>
                    <img onClick={() => showValue()} id="olho" src={olho}></img>
                </div>
                <button onClick={() => handleSubmit()}>Cadastrar</button>
            </form>
        </Container>
    )
  };

  export default Cadastro;