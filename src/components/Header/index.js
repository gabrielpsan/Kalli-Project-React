import React, { useState, useEffect } from 'react'
import { Header, TopHeader, BottomHeader, RigthMenu } from '../../styles/Header'
import user from '../../utils/img/user.png'
import enter from '../../utils/img/enter.png'
import quit from '../../utils/img/saida.png'
import menu from '../../utils/img/list.png'
import gifLogo from '../../utils/img/gifLogo.gif'
import management from '../../utils/img/management.png'
import Aos from 'aos';
import api from '../../services/api'
import { logout, getToken } from '../../services/auth'
import "aos/dist/aos.css";
import HeaderMenu from '../HeaderMenu'
import { useHistory } from "react-router-dom";
import { Link } from "react-router-dom";

const HeaderComponent = () => {

    let history = useHistory();
    const [admin, setAdmin] = useState();
    const [isAparece, setAparece] = useState(false);

    useEffect(() => {
        Aos.init({ duration: 500 });
    }, [])

    function deslogar() {
        logout()
    }

    function goToLogin(){
        history.push(`/login_user`);

    }

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

    useEffect(() => {
        consultaDados();
    }, [])

    return (
        <Header>
            <TopHeader>
                <h1 >Brasília frete grátis</h1>
            </TopHeader>
            <BottomHeader>
                <div>
                    {isAparece ?
                        <img onClick={() => setAparece(false)} src={menu} alt="menu" />
                    :<img onClick={() => setAparece(true)} src={menu} alt="menu" />}
                </div>

                <Link to="/"><img className="logo" src={gifLogo} alt="logo" /></Link>
                <RigthMenu>
                    <img src={user} alt="user"></img>
                    {getToken()?
                        <img src={quit} alt="shopping" onClick={() => deslogar()}></img>
                    :<img src={enter} alt="shopping" onClick={() => goToLogin()}></img>}
                </RigthMenu>
            </BottomHeader>
            {isAparece ?
                <HeaderMenu />
                : null}
        </Header>

    )
}
export default HeaderComponent;