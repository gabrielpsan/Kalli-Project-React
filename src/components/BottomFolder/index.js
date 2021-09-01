import React from 'react'

import { Container, FooterBox, Text} from '../../styles/BottomFolder';
import Line from '../../utils/img/Line.png'
import email from '../../utils/img/Group.png'
import whatsapp from '../../utils/img/Whatsup.png'
import instagram from '../../utils/img/instagram3.png'
import logoPng from '../../utils/img/logoPng.png'
import facebook from '../../utils/img/Face.png'
import twitter from '../../utils/img/twitter.png'
import Linkedin from '../../utils/img/linkedin.png'
import send from '../../utils/img/send.png'
import imgfooter from '../../utils/img/img-footer.png'
import gifLogo from '../../utils/img/gifLogo.gif'
import { Link } from "react-router-dom";



export default function BottomFolderComponent() {

    return (
      <Container>
        <FooterBox>
          <ul className="ulFooter">
            <li><a className="title">Receba as novidades!</a></li>
            {/* <li><a>O que fazemos</a></li> */}
            <div className="li-Input">
              <input placeholder="Seu e-mail"></input>
              <button>enviar</button>
            </div>

          </ul>
          <ul className="ulFooter">
            <li><img src={email}/>Fale com a gente</li>
            <li><a href="mailto:contato@youvisa.com.br" target="_blank">empresa@kalli.com.br</a></li>
            {/* <li><img src={whatsapp}/><a href="https://api.whatsapp.com/send?l=pt_BR&phone=5511987754499&text=Ol%C3%A1,%20tenho%20interesse%20em%20mais%20informa%C3%A7%C3%B5es%20sobre%20vistos!" target="_blank">Whatsapp</a></li> */}
            <ul className="ulFooter2">
              <li><img src={send}/>Seja um membro</li>
              <li><Link to="/cadastrar">Cadastre-se </Link></li>
            </ul>
          </ul>
          <ul className="ulFooter ulFooter3">
            <li>Acompanhe nossas redes</li>
            <li>
              <a><img src={instagram}/></a>
              <a><img src={twitter}/></a>
              <a><img src={Linkedin}/></a>
              </li>
              <li className="cadastur"><img src={logoPng}></img></li>
          </ul> 
        </FooterBox>
        <Text>
            <p>Kalli 2021. Todos os direitos reservados.Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has
             been the industry's standard dummy text ever since the 1500s, when an unknown printer took a <br/>
             galley of type and scrambled it to make a type specimen book. It has survived not only five 
             centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It <br/>
             was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, 
             and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem 
             Ipsum.
            </p>
          </Text>
      </Container>
    )
  }
  