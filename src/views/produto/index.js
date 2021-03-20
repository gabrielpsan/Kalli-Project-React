import React, { Component } from 'react'
import {
    Container, ContainerViewProduto, LeftViewProduto, RigthViewProduto, ContainerImagemGrande,
    ContainerImagensPequenas, ImagemPequena, CalcularFrete, TitleComoFunciona, ContainerPassos
} from '../../styles/Produto'
import "aos/dist/aos.css";
import produto1 from '../../utils/img/produto1.jpg'
import produto2 from '../../utils/img/produto2.jpg'
import produto3 from '../../utils/img/produto3.jpg'
import Carousel from 'react-elastic-carousel';
import Aos from 'aos';
import HeaderComponent from '../../components/Header';

class Produto extends Component {

    state = {
        items: [
            { id: 1, title: produto1 },
            { id: 2, title: produto2 },
            { id: 3, title: produto3 },
            { id: 2, title: produto2 },
            { id: 1, title: produto1 },
            { id: 3, title: produto3 },
        ]
    }

    render() {
        const { items } = this.state;

        return (
            <Container>
                <HeaderComponent />
                <ContainerViewProduto>
                    <LeftViewProduto>
                        <ContainerImagemGrande>
                            <img src={items[0].title} alt="imagem_produto"/>
                        </ContainerImagemGrande>
                        <ContainerImagensPequenas >
                            <Carousel itemsToShow={4} pagination={false} showArrows={false}>
                                {items.map(item => <ImagemPequena key={item.id}><img src={item.title} alt="imagem_produto"/></ImagemPequena>)}
                            </Carousel>
                        </ContainerImagensPequenas>
                    </LeftViewProduto>
                    <RigthViewProduto>  
                        <h1>Box Esmeralda</h1>
                        <p>Caixa com produtos de beleza</p>
                        <h2>R$85,90</h2>
                        <p className="descricao">Box esperalda é a nossa caixa de assinatura basiquinha,
                            aquela perfeita pára você que quer conhecer a nossa box.
                           <br/>
                           Box esperalda é a nossa caixa de assinatura basiquinha,
                            aquela perfeita pára você que quer conhecer a nossa box.
                        </p>
                        <button>Assinar</button>
                        <CalcularFrete>
                            <h2>Calcule o frete</h2>
                            <input id="cep"></input>
                            <button>Calcular</button>
                        </CalcularFrete>
                    </RigthViewProduto>
                </ContainerViewProduto>

                <TitleComoFunciona>
                    <h1>Como funciona?</h1>
                </TitleComoFunciona>

                <ContainerPassos>

                </ContainerPassos>
            </Container >
        )
    }
}
export default Produto;
