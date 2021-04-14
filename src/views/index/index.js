import React, { useEffect, useState } from 'react'
import {
    Container, TextSubSlider, BoxRedes, Redes, TextSubRedes, BoxProdutosPequenos, ContainerProdutosPequenos,
    ImageBox, TextPartBox, ContainerProdutosGrandes, BoxProdutosGrandes, ImageBoxGrandes,
    ImageBoxGrandesDark, TextPartBoxGrandes, ContainerVoceJaConhece, TitleRedes, TitlePerguntas, TitleFeedback,
    ContainerFeedback, Feedback, BordaFeedback, ContainerVantagens, Vantagem, ImgVantagem, TextVantagem,
    ContainerNovidades, TopNovidades, BottomNovidades, RedesSociaisNovidades, EsquerdaNovidade, MeioNovidade,
    DireitaNovidade, ButtonInicio
} from '../../styles/LandingPage'
import "aos/dist/aos.css";

import instagram from '../../utils/img/instagram.png'
import arrow from '../../utils/img/arrow-up.png'
import facebook from '../../utils/img/facebook.png'
import produto1 from '../../utils/img/produto1.jpg'
import produto2 from '../../utils/img/produto2.jpg'
import produto3 from '../../utils/img/produto3.jpg'
import truck from '../../utils/img/truck.jpeg'
import cartao from '../../utils/img/cartao.jpeg'
import seguranca from '../../utils/img/seguranca.jpeg'
import imgNovo from '../../utils/img/imgNovo.PNG'
import Slider from '../../components/Slider/Index'
import Perguntas from '../../components/Perguntas'
import Aos from 'aos';
import HeaderComponent from '../../components/Header';
import { useHistory } from "react-router-dom";
import api from '../../services/api'
import { getToken } from '../../services/auth'

const LandingPage = () => {


    const [usuarios, setUsuarios] = useState([]);
    const [produtos, setProdutos] = useState([]);
    const [usuarioLogado, setUsuarioLogado] = useState();

    async function consultaDados() {
        const token = getToken();
        const header_config = { 'x-access-token': `${token}` };

        // console.log(header_config);

        await api.get(`/usuario`, { headers: header_config }).then(res => {
            setUsuarios(res.data);
            // console.log("data: ", res.data);
        });
    }

    async function consultaProdutos() {
        const token = getToken();
        const header_config = { 'x-access-token': `${token}` };

        // console.log(header_config);

        await api.get(`/produtos`, { headers: header_config }).then(res => {
            setProdutos(res.data);
            // console.log("data: ", res.data);
        });
    }

    // console.log("dados", usuarios);

    let history = useHistory();

    function handleClick(id) {
        history.push(`/produto/${id}`);
    }
    
    // async function consultaUsuarioLogado() {
    //     const token = getToken();
    //     const header_config = { 'x-access-token': `${token}` };

    //     console.log("aquii: ", header_config);


    //     await api.post(`/refresh`, {}, { headers: header_config }).then(res => {
    //         setUsuarioLogado(res.data)
    //         console.log("dataLogado: ", res.data);
    //     });
    // }

    // var userFeed = new Instafeed({
	// 	get: 'user',
	// 	target: "instafeed-container",
    // 	resolution: 'low_resolution',
	// 	accessToken: 'YOUR_INSTAGRAM_ACCESS_TOKEN_GOES_HERE'
	// });
	// userFeed.run();

    useEffect(() => {


        // consultaUsuarioLogado();
        consultaDados();
        consultaProdutos();
        Aos.init({ duration: 1000 });
    }, [])

    return (
        <Container>
            <HeaderComponent id="top"/>
            <Slider />
            <TextSubSlider>
                <h1 id="produtos">A sua box de assinatura de produtos de beleza</h1>
                <img src={imgNovo} alt="kalli" />
            </TextSubSlider>

            <ContainerProdutosPequenos>
                {produtos.map((produto) => (
                    <BoxProdutosPequenos>
                        <ImageBox>
                            <img src={produto1} alt="produto1" />
                        </ImageBox>
                        <TextPartBox>
                            <h1>{produto.nome}</h1>
                            <p>{produto.descricao_open}</p>
                            <h2>R$ {produto.preco}</h2>
                            <button onClick={() => handleClick(produto.id)}>Quero</button>
                        </TextPartBox>
                    </BoxProdutosPequenos>
                ))}
            </ContainerProdutosPequenos>

            <ContainerProdutosGrandes>
                <BoxProdutosGrandes>
                    <ImageBoxGrandes>
                        <img src={produto2} alt="produto2" />
                    </ImageBoxGrandes>
                    <TextPartBoxGrandes>
                        <h1>Box kalli hair basic</h1>
                        <p>Box de produtos de cabelos sortidos</p>
                        <h2>R$ 85,90</h2>
                        <button>Quero</button>
                    </TextPartBoxGrandes>
                </BoxProdutosGrandes>
                <BoxProdutosGrandes>
                    <ImageBoxGrandesDark>
                        <img src={produto1} alt="produto1" />
                    </ImageBoxGrandesDark>
                    <TextPartBoxGrandes>
                        <h1>Box kalli hair basic</h1>
                        <p>Box de produtos de cabelos sortidos</p>
                        <h2>R$ 85,90</h2>
                        <button>Quero</button>
                    </TextPartBoxGrandes>
                </BoxProdutosGrandes>
            </ContainerProdutosGrandes>

            <ContainerVoceJaConhece>
                <h1 data-aos="fade-up" data-aos-offset="200">Você já conhece a box kalli?</h1>
                <button data-aos="fade-down" data-aos-offset="200">Quero conhecer</button>
            </ContainerVoceJaConhece>

            <TitleRedes>
                <h1>Se liga nas nossas redes</h1>
            </TitleRedes>

            <BoxRedes>
                <Redes>
                    <div id="instafeed-container"></div>
                </Redes>
                <Redes></Redes>
                <Redes></Redes>
            </BoxRedes>

            <TextSubRedes>
                <h1>
                    "Kalli é uma marca brasiliense que nasceu pra entregar<br />
                    produtos de qualidade dentro de uma box personalizada<br />
                    todo mês pra você"
                </h1>
            </TextSubRedes>

            <TitlePerguntas>
                <h1>Perguntas frequentes</h1>
                <h2>Qualquer outra dúvida entre em contato pelo nosso Instagram ou pelo<br />
                    email kallicomvc@gmail.com
                </h2>
            </TitlePerguntas>

            <Perguntas />

            <TitleFeedback>
                <h1>
                    Feedback de quem já estar com a sua
                    box kalli
                </h1>
            </TitleFeedback>

            <ContainerFeedback>
                <Feedback>
                    <h1>
                        "adorei a box que chegou aqui em casa,<br />
                        não conhecia a maioria dos produtos,<br />
                        porém amei"<br />
                        @carolsales
                    </h1>
                    <BordaFeedback />
                </Feedback>
                <Feedback>
                    <h1>
                        "adorei a box que chegou aqui em casa,<br />
                        não conhecia a maioria dos produtos,<br />
                        porém amei"<br />
                        @carolsales
                    </h1>
                    <BordaFeedback />
                </Feedback>
                <Feedback>
                    <h1>
                        "adorei a box que chegou aqui em casa,<br />
                        não conhecia a maioria dos produtos,<br />
                        porém amei"<br />
                        @carolsales
                    </h1>
                    <BordaFeedback />
                </Feedback>
                <Feedback>
                    <h1>
                        "adorei a box que chegou aqui em casa,<br />
                        não conhecia a maioria dos produtos,<br />
                        porém amei"<br />
                        @carolsales
                    </h1>
                    <BordaFeedback />
                </Feedback>
            </ContainerFeedback>

            <ContainerVantagens>
                <Vantagem>
                    <ImgVantagem>
                        <img src={truck} alt="caminhao" />
                    </ImgVantagem>
                    <TextVantagem>
                        <h1>Enviamos sua box</h1>
                        <p>Para todo o Brasil</p>
                    </TextVantagem>
                </Vantagem>
                <Vantagem>
                    <ImgVantagem>
                        <img className="cartao" alt="cartao" src={cartao} />
                    </ImgVantagem>
                    <TextVantagem>
                        <h1>Pague fácilmente</h1>
                        <p>Várias maeniras de pagamento</p>
                    </TextVantagem>
                </Vantagem>
                <Vantagem>
                    <ImgVantagem>
                        <img className="seguranca" alt="seguranca" src={seguranca} />
                    </ImgVantagem>
                    <TextVantagem>
                        <h1>Compre com segurança</h1>
                        <p>Seus dados protegidos.</p>
                    </TextVantagem>
                </Vantagem>
            </ContainerVantagens>

            <ContainerNovidades>
                <TopNovidades>
                    <EsquerdaNovidade>
                        <h1>
                            Receba nossas novidades<br />
                            e dicas de beleza
                        </h1>
                    </EsquerdaNovidade>
                    <MeioNovidade>
                        <input placeholder="Seu e-mail"></input>
                        <button>enviar</button>
                    </MeioNovidade>
                    <DireitaNovidade>
                    </DireitaNovidade>
                </TopNovidades>
                <BottomNovidades>
                    <h1>
                        Fale com a gente<br />
                        kallicomvc@gmail.com
                    </h1>
                    <RedesSociaisNovidades>
                        <h1>
                            Nos acompanhe nas redes<br />
                        </h1>
                        <a href="https://instagram.com" target="_blank" rel="noreferrer"><img src={instagram} alt="instagram" /></a>
                        <a href="https://facebook.com" target="_blank" rel="noreferrer"><img src={facebook} alt="facebook" /></a>
                    </RedesSociaisNovidades>
                    <h1>
                        Política de vendas<br />
                    </h1>
                </BottomNovidades>
            </ContainerNovidades>
            <ButtonInicio>
                <a href="#top"><button><img src={arrow}/></button></a>
            </ButtonInicio>
        </Container>
    )
};
export default LandingPage;