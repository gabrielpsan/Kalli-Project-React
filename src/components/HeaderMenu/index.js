import React, { useState, useEffect } from 'react';
import { Container, BoxContent, DivMinhaBox, DivUsuario, DadosPessoais } from '../../styles/HeaderMenu'
import { getToken } from '../../services/auth'
import api from '../../services/api'
import { Link } from "react-router-dom"
import user from '../../utils/img/user.png'

const HeaderMenu = () => {

    const [isMinhaBox, setMinhaBox] = useState(false);
    const [admin, setAdmin] = useState();
    const [usuarioLogado, setUsuarioLogado] = useState([]);
    const [isDados, setDados] = useState(false);
    async function consultaDados() {
        const token = getToken();
        const header_config = { 'x-access-token': `${token}` };

        console.log(header_config);

        await api.get(`/usuario`, { headers: header_config }).then(res => {
            if (res.data) {
                setAdmin(true);
                console.log("é admmin");
            }
        });
    }


    async function consultaUsuarioLogado() {
        const token = getToken();
        const header_config = { 'x-access-token': `${token}` };

        console.log("aquii: ", header_config);


        await api.post(`/refresh`, {}, { headers: header_config }).then(res => {
            setUsuarioLogado(res.data)
            // usuarioLogado = res.data
            console.log("dataLogado header: ", res.data);
        });
    }


    useEffect(() => {
        consultaDados();
        consultaUsuarioLogado();
    }, [])

    return (
        <Container>
            <BoxContent>
                {getToken() ?
                    <ul>
                        {isDados ?
                            <>
                                <DivUsuario onClick={() => setDados(false)}>
                                    <span><img src={user} /></span>
                                    <a>Olá {usuarioLogado.username}!</a>
                                </DivUsuario>
                                <DadosPessoais>
                                    <h3>Nome:</h3><br />
                                    <h3>{usuarioLogado.nome}</h3><br />
                                    <h3>Email:</h3><br />
                                    <h3>{usuarioLogado.email}</h3><br />
                                    <h3>Telefone:</h3><br />
                                    <h3>{usuarioLogado.telefone}</h3><br />
                                </DadosPessoais>
                            </>
                            :
                            <DivUsuario onClick={() => setDados(true)}>
                                <span><img src={user} /></span>
                                <a>Olá {usuarioLogado.username}!</a>
                            </DivUsuario>
                        }
                        <Link to='/questionario'><li>Questionário</li></Link>
                        <a><li>Assinatura</li></a>
                        {isMinhaBox ?
                            <li className="subLi" onClick={() => setMinhaBox(false)}>Minha Box</li>
                            : <li className="subLi" onClick={() => setMinhaBox(true)}>Minha Box</li>}
                        {isMinhaBox ?
                            <DivMinhaBox>
                                <span>- Quantas já pagou?</span>
                                <span>- Chega em</span>
                                <span>- Status</span>
                            </DivMinhaBox>
                            : null}
                        {admin ?
                            <Link to='/admin_estatisticas'><li>Administração</li></Link>
                            : null}

                    </ul>
                    : null}
                <ul className="separa">
                    <a href="/#produtos"><li>Box Kalli</li></a>
                    <a href="/#perguntas"><li>FAQ</li></a>
                    <li>A marca</li>
                </ul>
            </BoxContent>
        </Container>

    )
}
export default HeaderMenu;