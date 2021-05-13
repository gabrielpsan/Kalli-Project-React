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