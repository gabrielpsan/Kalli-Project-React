import React, { useState, useEffect } from 'react'
import { Header, TopHeader, BottomHeader, RigthMenu } from '../../styles/Header'
import user from '../../utils/img/user.png'
import shopping from '../../utils/img/shopping-cart.png'
import menu from '../../utils/img/list.png'
import gifLogo from '../../utils/img/gifLogo.gif'
import Aos from 'aos';
import "aos/dist/aos.css";

const HeaderComponent = () => {


    useEffect(() => {
        Aos.init({ duration: 500 });
    }, [])

    return (
        <Header>
            <TopHeader>
                <h1 >Brasília frete grátis</h1>
            </TopHeader>
            <BottomHeader>
                <img src={menu} alt="menu" />
                <a href="/"><img className="logo" src={gifLogo} alt="logo" /></a>
                <RigthMenu>
                    <img src={user} alt="user"></img>
                    <img src={shopping} alt="shopping"></img>
                </RigthMenu>
            </BottomHeader>
        </Header>
    )
}
export default HeaderComponent;