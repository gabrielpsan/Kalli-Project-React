import React, { useEffect, useState } from "react";
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom'
import IndexPage from './views/index/index'
import Login from './views/login/index'
import Cadastro from './views/cadastro/index'
import Produto from './views/produto/index'
import AdminNewProduto from './views/AdminProdutoInsere/index'
import AdminSearchProduto from './views/AdminProdutoConsulta/index'
import AdminEstatisticas from './views/AdminEstatisticas/index'
import Pagamento from './views/pagamento/index'
import api from './services/api'
import { isAuthenticated } from "./services/auth"
import { getToken } from './services/auth'


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

  const [admin, setAdmin] = useState(false);

  async function consultaDados() {
    const token = getToken();
    const header_config = { 'x-access-token': `${token}` };


    await api.get(`/usuario`, { headers: header_config }).then(res => {
      if (res.data) {
        setAdmin(true);
        console.log("é admmin");
      }
    });
  }
  useEffect(() => {
    consultaDados();
  }, [])


  return (
    <BrowserRouter>
      <Route path="/login_user" component={Login} exact />
      <Route path="/cadastrar" component={Cadastro} exact />
      <Route path="/" component={IndexPage} exact />
      {admin ?
        <>
          <PrivateRoute path="/admin_produtos_insere" component={AdminNewProduto} exact />
          <PrivateRoute path="/admin_produtos_insere/:id" component={AdminNewProduto} exact />
          <PrivateRoute path="/admin_produtos_consulta" component={AdminSearchProduto} exact />
          <PrivateRoute path="/admin_estatisticas" component={AdminEstatisticas} exact />
          <PrivateRoute path="/pagamento/produto:id" component={Pagamento} exact/>
        </>
        : null}
      <Route path="/produto/:id" component={Produto} exact />

    </BrowserRouter>
  );
}