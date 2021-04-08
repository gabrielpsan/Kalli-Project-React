import React, { useState, useEffect } from 'react'
import {
    Container, ContainerPagamento, LeftPagamentoInputs, RightPagamento,
    Passos, Dados, RightConteudo, ProdutoDiv, IdentificacaoDiv, Input, ButtonDiv, EntregaDiv,
    PagamentoDiv
} from '../../styles/Pagamento'
import "aos/dist/aos.css";
import logo from '../../utils/img/logo.PNG'
import fundo from '../../utils/img/fundo.jpeg'
import produto1 from '../../utils/img/produto1.jpg'
import api from '../../services/api'
import { getToken } from '../../services/auth'
import HeaderComponent from '../../components/Header';

// class  extends Component {
const Pagamento = (props) => {
    const [isBox, setBox] = useState(true)
    const [isIdentificacao, setIdentificacao] = useState(false)
    const [isEntrega, setEntrega] = useState(false)
    const [isPagamento, setPagamento] = useState(false)

    const [produtoNome, setProdutoNome] = useState();
    const [produtoId, setProdutoId] = useState();
    const [produtoTexto, setProdutoTexto] = useState();
    const [produtoPreco, setProdutoPreco] = useState();
    const [produtoDescricao, setProdutodDescricao] = useState();


    const fetchProdutoId = () => {

        // Pega o ID do elemento em questão, passado pela URL
        const pessoaId = props.match.params.id;

        return pessoaId;

    };


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

    // SDK de Mercado Pago
    const mercadopago = require('mercadopago');

    // Configura credenciais
    mercadopago.configure({
        access_token: 'TEST-94aee634-6e4e-4d21-83b1-cdd3202bc0ef'
    });

    // Cria um objeto de preferência
    let preference = {
        items: [
            {
                title: 'Meu produto',
                unit_price: 100,
                quantity: 1,
            }
        ]
    };

    mercadopago.preferences.create(preference)
        .then(function (response) {
            // Este valor substituirá a string "<%= global.id %>" no seu HTML
            global.id = response.body.id;
        }).catch(function (error) {
            console.log(error);
        });



    return (
        <Container>
            <HeaderComponent />
            <ContainerPagamento>
                <LeftPagamentoInputs>
                    <Passos>
                        <img src={logo} alt="logo" />
                        <div className="passo">
                            {isIdentificacao || isEntrega || isPagamento ?
                                <div className="numero1 ok">
                                    <h1>1</h1>
                                </div>
                                :
                                <div className="numero1">
                                    <h1>1</h1>
                                </div>
                            }
                            <h2>Box</h2>
                        </div>
                        <div className="passo">
                            {isEntrega || isPagamento ?
                                <div className="numero1 ok">
                                    <h1>2</h1>
                                </div>
                                :
                                <div className="numero1">
                                    <h1>2</h1>
                                </div>
                            }
                            <h2>Identificação</h2>
                        </div>
                        <div className="passo">
                            {isPagamento ?

                                <div className="numero1 ok">
                                    <h1>3</h1>
                                </div>
                                :
                                <div className="numero1">
                                    <h1>3</h1>
                                </div>
                            }
                            <h2>Entrega</h2>
                        </div>
                        <div className="passo">
                            <div className="numero1">
                                <h1>4</h1>
                            </div>
                            <h2>Pagamento</h2>
                        </div>
                    </Passos>
                    <Dados>
                        {isBox ?
                            <ProdutoDiv>
                                <h3>{produtoTexto}</h3>
                                <div className="divImagemProduto">
                                    <img src={produto1}></img>
                                    <div>
                                        <h2>{produtoNome}</h2>
                                        <h1>R$ {produtoPreco}</h1>
                                        <button onClick={() => [setBox(false), setIdentificacao(true)]}>Comprar</button>
                                    </div>
                                </div>
                            </ProdutoDiv>
                            : null}

                        {isIdentificacao ?
                            <IdentificacaoDiv>
                                <form>
                                    <Input>
                                        <h1>E-mail</h1>
                                        <input required />
                                    </Input>
                                    <Input>
                                        <h1>Nome Completo</h1>
                                        <input required />
                                    </Input>

                                    <Input>
                                        <h1>CPF</h1>
                                        <input required />
                                    </Input>
                                    <Input>
                                        <h1>Telefone</h1>
                                        <input required />
                                    </Input>
                                    <ButtonDiv>
                                        <button className="voltar" onClick={() => [setBox(true), setIdentificacao(false)]}>Voltar</button>
                                        <button type="submit" className="proximo" onClick={() => [setBox(false), setIdentificacao(false), setEntrega(true)]}>Próximo</button>
                                    </ButtonDiv>
                                </form>
                            </IdentificacaoDiv>
                            : null}

                        {isEntrega ?
                            <EntregaDiv>
                                <Input>
                                    <h1>CEP</h1>
                                    <input className="cep" required />
                                </Input>
                                <Input>
                                    <h1>Rua</h1>
                                    <input required className="rua" />
                                </Input>

                                <Input>
                                    <h1>Nº</h1>
                                    <input className="numero" required />
                                </Input>
                                <Input>
                                    <h1>Bairro</h1>
                                    <input required />
                                </Input>
                                <Input>
                                    <h1>UF</h1>
                                    <input className="uf" required />
                                </Input>
                                <Input>
                                    <h1>Cidade</h1>
                                    <input required />
                                </Input>
                                <Input>
                                    <h1>Complemento</h1>
                                    <input required />
                                </Input>
                                <ButtonDiv>
                                    <button className="voltar" onClick={() => [setBox(false), setIdentificacao(true), setEntrega(false)]}>Voltar</button>
                                    <button className="proximo" onClick={() => [setIdentificacao(false), setEntrega(false), setPagamento(true)]}>Próximo</button>
                                </ButtonDiv>
                            </EntregaDiv>
                            : null}

                        {isPagamento ?
                            <PagamentoDiv>

                                {/* <form action="/process_payment" method="post" id="paymentForm">
                                    <h3>Detalhe do comprador</h3>
                                    <div>
                                        <div>
                                            <label for="email">E-mail</label>
                                            <input id="email" name="email" type="text" value="test@test.com" />
                                        </div>
                                        <div>
                                            <label for="docType">Tipo de documento</label>
                                            <select id="docType" name="docType" data-checkout="docType" type="text"></select>
                                        </div>
                                        <div>
                                            <label for="docNumber">Número do documento</label>
                                            <input id="docNumber" name="docNumber" data-checkout="docNumber" type="text" />
                                        </div>
                                    </div>
                                    <h3>Detalhes do cartão</h3>
                                    <div>
                                        <div>
                                            <label for="cardholderName">Titular do cartão</label>
                                            <input id="cardholderName" data-checkout="cardholderName" type="text" />
                                        </div>
                                        <div>
                                            <label for="">Data de vencimento</label>
                                            <div>
                                                <input type="text" placeholder="MM" id="cardExpirationMonth" data-checkout="cardExpirationMonth"
                                                    onselectstart="return false" onpaste="return false"
                                                    oncopy="return false" oncut="return false"
                                                    ondrag="return false" ondrop="return false" autocomplete='off' />
                                                <span class="date-separator">/</span>
                                                <input type="text" placeholder="YY" id="cardExpirationYear" data-checkout="cardExpirationYear"
                                                    onselectstart="return false" onpaste="return false"
                                                    oncopy="return false" oncut="return false"
                                                    ondrag="return false" ondrop="return false" autocomplete='off' />
                                            </div>
                                        </div>
                                        <div>
                                            <label for="cardNumber">Número do cartão</label>
                                            <input type="text" id="cardNumber" data-checkout="cardNumber"
                                                onselectstart="return false" onpaste="return false"
                                                oncopy="return false" oncut="return false"
                                                ondrag="return false" ondrop="return false" autocomplete='off' />
                                        </div>
                                        <div>
                                            <label for="securityCode">Código de segurança</label>
                                            <input id="securityCode" data-checkout="securityCode" type="text"
                                                onselectstart="return false" onpaste="return false"
                                                oncopy="return false" oncut="return false"
                                                ondrag="return false" ondrop="return false" autocomplete='off' />
                                        </div>
                                        <div id="issuerInput">
                                            <label for="issuer">Banco emissor</label>
                                            <select id="issuer" name="issuer" data-checkout="issuer"></select>
                                        </div>
                                        <div>
                                            <label for="installments">Parcelas</label>
                                            <select type="text" id="installments" name="installments"></select>
                                        </div>
                                        <div>
                                            <input type="hidden" name="transactionAmount" id="transactionAmount" value="100" />
                                            <input type="hidden" name="paymentMethodId" id="paymentMethodId" />
                                            <input type="hidden" name="description" id="description" />
                                            <br />
                                            <button type="submit">Pagar</button>
                                            <br />
                                        </div>
                                    </div>
                                </form> */}
                                
                                <ButtonDiv>
                                    <button className="voltar" onClick={() => [setBox(false), setIdentificacao(false), setEntrega(true), setPagamento(false)]}>Voltar</button>
                                    <button className="proximo" onClick={() => [setIdentificacao(false), setEntrega(false), setPagamento(true)]}>Próximo</button>
                                </ButtonDiv>
                            </PagamentoDiv>
                            : null}
                    </Dados>
                </LeftPagamentoInputs>
                <RightPagamento>
                    <img src={fundo} alt="fundo" />
                    <RightConteudo>
                        <div className="imgPagamento">
                            <img src={logo} alt="logo" />
                        </div>
                        <h2>Entrega entre os dias 10 e 20 do mês de abril</h2>
                        <h1>Box esmeralda</h1>
                        <h1>R$85,90/mês</h1>
                    </RightConteudo>
                </RightPagamento>
            </ContainerPagamento>
        </Container >
    )
}
export default Pagamento;
