import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import api from "../../services/api";
import { login } from "../../services/auth";
import { Container } from "../../styles/Login";
import olho from '../../utils/img/olho.png';

class SignIn extends Component {
  state = {
    username: "",
    password: "",
    error: ""
  };

  handleSignIn = async e => {
    e.preventDefault();
    const { username, password } = this.state;
    if (!username || !password) {
      this.setState({ error: "Preencha nome de usuário e senha para continuar!" });
    } else {
      try {
        const response = await api.post("/login", { username, password });
        login(response.data.token);
        this.props.history.push("/");
      } catch (err) {
        this.setState({
          error:
            "Houve um problema com o login, verifique suas credenciais. T.T"
        });
      }
    }
  };

  render() {

    
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
            <form onSubmit={this.handleSignIn}>
                <h1>Login</h1>
                <input
                    placeholder="Usuário"
                    type="text"
                    required
                    onChange={e => this.setState({ username: e.target.value })}
                />
                <div className="divInputOlho">
                    <input
                        id="pass" 
                        placeholder="Senha" 
                        type="password" 
                        required
                        onChange={e => this.setState({ password: e.target.value })}
                    />
                    <img onClick={() => showValue()} class="olho" src={olho}></img>
                </div>

                <a>Esqueci minha senha</a>
                <button type="submit">Entrar</button>
                <h2>Ainda não possui uma assinatura? <a href="/cadastrar"> Associe-se</a></h2>
            </form>
        </Container>
    );
  }
}

export default withRouter(SignIn);