import React, { useState, useEffect } from 'react'
import {
    Container, ContainerViewProduto, LeftViewProduto, RigthViewProduto, ContainerImagemGrande,
    ContainerImagensPequenas, ImagemPequena, CalcularFrete, TitleComoFunciona, ContainerPassos,
    Passo, ImagemPasso, TextoPasso, TitleEntender, ContainerEntender, Topico, TtitleTopico, RespostaTopico
} from '../../styles/Produto'
import "aos/dist/aos.css";
import produto1 from '../../utils/img/produto1.jpg'
import produto2 from '../../utils/img/produto2.jpg'
import produto3 from '../../utils/img/produto3.jpg'
import Carousel from 'react-elastic-carousel'
import passo1 from '../../utils/img/passo1.jpeg'
import passo2 from '../../utils/img/passo2.jpeg'
import passo3 from '../../utils/img/passo3.jpeg'
import numero1 from '../../utils/img/numero1.png'
import numero2 from '../../utils/img/numero2.png'
import numero3 from '../../utils/img/numero3.png'
import HeaderComponent from '../../components/Header';
import api from '../../services/api'
import { getToken } from '../../services/auth'
import { useHistory } from "react-router-dom";
import Swal from 'sweetalert2'
// class  extends Component {
const Produto = (props) => {

    const state = {
        items: [
            { id: 1, title: produto1 },
            { id: 2, title: produto2 },
            { id: 3, title: produto3 },
            { id: 2, title: produto2 },
            { id: 1, title: produto1 },
            { id: 3, title: produto3 },
        ]
    }
    const [produtoNome, setProdutoNome] = useState();
    const [produtoId, setProdutoId] = useState();
    const [produtoTexto, setProdutoTexto] = useState();
    const [produtoPreco, setProdutoPreco] = useState();
    const [produtoDescricao, setProdutodDescricao] = useState();
    const [produto, setProduto] = useState();
    let history = useHistory();


    const fetchProdutoId = () => {

        // Pega o ID do elemento em questão, passado pela URL
        const pessoaId = props.match.params.id;


        return pessoaId;

    };

    function handleClick(id) {
        const token = getToken();

        if(!token){
            Swal.fire({
                title: 'OPS! Faça o Login para prosseguir com a compra.',
                width: 600,
                padding: '3em',
                background: '#FFF url(/images/trees.png)',
                color: '#FFF', 
                confirmButtonText: 'Login',
                confirmButtonColor: '#B24A87',
                backdrop: `
                  rgba(1, 1, 1, 0.3)
                  url("/images/nyan-cat.gif")
                  left top
                  no-repeat
                `
              })
        } else {
            history.push(`/pagamento/produto${id}`);
        }
        // console.log("produto clicado: ", id)
    }

    useEffect(() => {

        async function consultaProdutos() {
            const token = getToken();
            const header_config = { 'x-access-token': `${token}` };

            var id_busca = fetchProdutoId();

            console.log(header_config);

            await api.get(`/produtos/${id_busca}`, { headers: header_config }).then(res => {
                setProdutoNome(res.data.nome);
                setProdutoId(res.data.id);
                setProdutoTexto(res.data.texto);
                setProdutodDescricao(res.data.descricao_close);
                setProdutoPreco(res.data.preco);
                console.log("data: ", res.data);
            });
        }

        consultaProdutos();
    }, [])

    const { items } = state;

    return (
        <Container>
            <HeaderComponent />
            <ContainerViewProduto id="produto-ver-mais">
                <LeftViewProduto>
                    <ContainerImagemGrande>
                        <img src={items[0].title} alt="imagem_produto" />
                    </ContainerImagemGrande>
                    <ContainerImagensPequenas >
                        <Carousel itemsToShow={4} pagination={false} showArrows={false}>
                            {items.map(item => <ImagemPequena key={item.id}><img src={item.title} key={item.id} alt="imagem_produto" /></ImagemPequena>)}
                        </Carousel>
                    </ContainerImagensPequenas>
                </LeftViewProduto>
                <RigthViewProduto>
                    <h1>{produtoNome}</h1>
                    <p>{produtoDescricao}</p>
                    <h2>R$ {produtoPreco}</h2>
                    <p className="descricao">{produtoTexto}</p>

                    <button onClick={() => handleClick(produtoId)}>Assinar</button>
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
                <Passo>
                    <ImagemPasso>
                        <img src={passo1} alt="primeiro_passo" />
                    </ImagemPasso>
                    <div className="numero">
                        <img src={numero1} />
                    </div>
                    <TextoPasso>
                        <h1>Preencha o questionário</h1>
                    </TextoPasso>
                </Passo>
                <Passo>
                    <ImagemPasso>
                        <img src={passo2} alt="primeiro_passo" />
                    </ImagemPasso>
                    <div className="numero">
                        <img src={numero2} />
                    </div>
                    <TextoPasso>
                        <h1>Escolha a sua box e assine</h1>
                    </TextoPasso>
                </Passo>
                <Passo>
                    <ImagemPasso>
                        <img src={passo3} alt="primeiro_passo" />
                    </ImagemPasso>
                    <div className="numero3">
                        <img src={numero3} />
                    </div>
                    <TextoPasso>
                        <h1>Agora é só esperar sua box personalizada chegar todo mês na sua casa</h1>
                    </TextoPasso>
                </Passo>
            </ContainerPassos>

            <TitleEntender>
                <h1>Vamos entender melhor a BOX</h1>
            </TitleEntender>

            <ContainerEntender>
                <Topico>
                    <TtitleTopico>
                        <h2>Qual a diferença entre as box?</h2>
                    </TtitleTopico>
                    <RespostaTopico>
                        <h3>A única diferença entre as box são os valores, as de valores mais alto
                                 vc irá receber mais produtos.</h3>
                    </RespostaTopico>
                </Topico>
                <Topico>
                    <TtitleTopico>
                        <h2>Como escolhemos os produtos?</h2>
                    </TtitleTopico>
                    <RespostaTopico>
                        <h3>Os produtos são selecionados a partor do questionário que vc respondeu de acordo com seus
                                gostos, tipo de pele, cabelo e etc.<br /> O maior diferencial é que os produtos são
                                selecionados especialmente para você por especialistas da área da beleza.
                            </h3>
                    </RespostaTopico>
                </Topico>
                <Topico>
                    <TtitleTopico>
                        <h2>Quais marcas irei receber?</h2>
                    </TtitleTopico>
                    <RespostaTopico>
                        <h3>Além de marcas mais conhecidas como neutrogena, nivea, haskell, affrend. Nossa proposta é
                        te entregar marcas diferentes da área da estética como elementti, extratos da terra, mutari, c4enka.
                            </h3>
                    </RespostaTopico>
                </Topico>
            </ContainerEntender>
        </Container >
    )
}
export default Produto;
