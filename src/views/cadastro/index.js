
import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Container, BoxLogin, ContentBoxLogin } from '../../styles/Cadastro'
import "aos/dist/aos.css";
import Aos from 'aos';
import api from '../../services/api';
import olho from '../../utils/img/olho.png';


class Cadastro extends Component {
    state = {
        nome: "",
        email: "",
        data_nascimento: "",
        telefone: "",
        username: "",
        password: "",
        error: ""
    };

    handleSignUp = async e => {
        e.preventDefault();
        const { nome, username, email, data_nascimento, telefone, password } = this.state;
        if (!username || !email || !password || !data_nascimento || !nome || !telefone) {
            this.setState({ error: "Preencha todos os dados para se cadastrar" });
        } else {
            try {
                await api.post("/usuario", { nome, email, data_nascimento, telefone, username, password });
                this.props.history.push("/");
            } catch (err) {
                console.log(err);
                this.setState({ error: "Ocorreu um erro ao registrar sua conta. T.T" });
            }
        }
    };

    render() {

        function showValue() {
            let input = document.querySelector('#pass');
            console.log("input: ", input);
            if (input.getAttribute('type') === 'password') {
                input.setAttribute('type', 'text');
            } else {
                input.setAttribute('type', 'password');
            }
        };

        return (
            <Container>
                <form onSubmit={this.handleSignUp}>
                    {this.state.error && <p>{this.state.error}</p>}
                    <h1>Cadastrar</h1>
                    <input
                        placeholder="Nome Completo"
                        type="text"
                        onChange={e => this.setState({ nome: e.target.value })}
                    />
                    <input
                        placeholder="E-mail"
                        type="text"
                        onChange={e => this.setState({ email: e.target.value })}
                    />
                    <input
                        placeholder="Data de Nascimento"
                        type="date"
                        onChange={e => this.setState({ data_nascimento: e.target.value })}
                    />
                    <input
                        placeholder="Telefone"
                        type="text"
                        onChange={e => this.setState({ telefone: e.target.value })}
                    />
                    <input
                        placeholder="Nome de usuário"
                        type="text"
                        onChange={e => this.setState({ username: e.target.value })}
                    />
                    <div className="divInputOlho">
                        <input
                            id="pass"
                            placeholder="Senha"
                            type="password"
                            onChange={e => this.setState({ password: e.target.value })}
                        />
                        <img onClick={() => showValue()} id="olho" src={olho}></img>
                    </div>
                    <button type="submit">Cadastrar</button>
                    <h2>Já possui uma assinatura? <a href="/login_user">Faça o Login</a></h2>
                </form>
            </Container>
        );
    }
}

export default Cadastro;