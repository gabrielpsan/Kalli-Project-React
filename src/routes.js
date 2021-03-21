import React from "react";
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom'
import IndexPage from './views/index/index'
import Login from './views/login/index'
import Cadastro from './views/cadastro/index'
import Produto from './views/produto/index'
import api from './services/api'
import { isAuthenticated } from "./services/auth";

const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={props =>
      isAuthenticated() ? (
        <Component {...props} />
      ) : (
        <Redirect to={{ pathname: "/login_user", state: { from: props.location } }} />
      )
    }
  />
);

export default function Routes() {

  return (
    <BrowserRouter>
      <Route path="/login_user" component={Login} exact/>
      <Route path="/cadastrar" component={Cadastro} exact/>
      <PrivateRoute path="/" component={IndexPage} exact/>
      <PrivateRoute path="/produto" component={Produto} exact/>

    </BrowserRouter>
  );
}