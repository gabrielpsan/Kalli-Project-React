import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import api from "../../services/api";
import { login } from "../../services/auth";
import { Container } from "../../styles/Login";
import olho from '../../utils/img/olho.png';
import Swal from 'sweetalert2';
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
        console.log(response)
        this.props.history.push("/");
        const Toast = Swal.mixin({
          toast: true,
          position: 'center-left',
          showConfirmButton: false,
          timer: 4000,
          timerProgressBar: true,
          didOpen: (toast) => {
            toast.addEventListener('mouseenter', Swal.stopTimer)
            toast.addEventListener('mouseleave', Swal.resumeTimer)
          }
        })
        Toast.fire({
          icon: 'success',
          title: `Bem-vindo ${username}!` 
        })
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