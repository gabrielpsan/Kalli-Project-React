import React, { useState, useEffect } from 'react'
import {
    Container, ContainerPagamento, LeftPagamentoInputs, RightPagamento,
    Passos, Dados, RightConteudo, ProdutoDiv, IdentificacaoDiv, Input, ButtonDiv, EntregaDiv,
    PagamentoDiv, DadosEntrega
} from '../../styles/Pagamento'
import "aos/dist/aos.css";
import logo from '../../utils/img/logo.PNG'
import fundo from '../../utils/img/fundo.jpeg'
import produto1 from '../../utils/img/produto1.jpg'
import ok from '../../utils/img/ok.png'
import api from '../../services/api'
import { getToken } from '../../services/auth'
import HeaderComponent from '../../components/Header';
import { isEmpty } from 'lodash';
import Swal from 'sweetalert2'

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



    const [email, setEmail] = useState('');
    const [nome, setNome] = useState('');
    const [cpf, setCpf] = useState('');
    const [telefone, setTelefone] = useState('');

    const [cep, setcep] = useState('');
    const [rua, setRua] = useState('');
    const [numero, setNumero] = useState('');
    const [bairro, setBairro] = useState('');
    const [uf, setUf] = useState('');
    const [cidade, setCidade] = useState('');
    const [complemento, setComplemento] = useState('');



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

    const submitIdentificacao = () => {
        const identificacao = {
            'nome': nome,
            'email': email,
            'cpf': cpf,
            'telefone': telefone
        }

        var faltaInput = 0;

        if (isEmpty(identificacao.nome)) {
            console.log("preencha o seu nome");
            faltaInput = 1;
        }
        if (isEmpty(identificacao.email)) {
            console.log("preencha o seu email");
            faltaInput = 1;
        }

        if (isEmpty(identificacao.cpf)) {
            console.log("preencha o seu cpf");
            faltaInput = 1;
        }

        if (isEmpty(identificacao.telefone)) {
            console.log("preencha o seu telefone");
            faltaInput = 1;
        }

        if (faltaInput) {
            console.log("Faltam dados, por favor preencha");
            Swal.fire({
                title: 'OPS! Preencha todos os dados.',
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
            console.log("Indo para a proxima etapa");
            setIdentificacao(false);
            setEntrega(true);
        }
    }


    const submitEntrega = () => {

        const entrega = {
            'cep': cep,
            'rua': rua,
            'numero': numero,
            'bairro': bairro,
            'uf': uf,
            'cidade': cidade,
            'complemento': complemento,
        }

        var faltaInput = 0;

        if (isEmpty(entrega.cep)) {
            console.log("preencha o seu cep");
            faltaInput = 1;
        }
        if (isEmpty(entrega.rua)) {
            console.log("preencha o seu rua");
            faltaInput = 1;
        }

        if (isEmpty(entrega.numero)) {
            console.log("preencha o seu numero");
            faltaInput = 1;
        }

        if (isEmpty(entrega.bairro)) {
            console.log("preencha o seu bairro");
            faltaInput = 1;
        }

        if (isEmpty(entrega.uf)) {
            console.log("preencha o seu uf");
            faltaInput = 1;
        }

        if (isEmpty(entrega.cidade)) {
            console.log("preencha o seu cidade");
            faltaInput = 1;
        }

        if (isEmpty(entrega.complemento)) {
            console.log("preencha o seu complemento");
            faltaInput = 1;
        }

        if (faltaInput) {
            console.log("Faltam dados, por favor preencha");
            Swal.fire({
                title: 'OPS! Preencha todos os dados.',
                width: 600,
                padding: '3em',
                background: '#FFF url(/images/trees.png)',
                color: '#FFF',
                confirmButtonText: 'Continuar',
                confirmButtonColor: '#B24A87',
                backdrop: `
                  rgba(1, 1, 1, 0.3)
                  url("/images/nyan-cat.gif")
                  left top
                  no-repeat
                `
            })
        } else {
            console.log("Indo para a proxima etapa");
            setIdentificacao(false);
            setEntrega(false);
            setPagamento(true);
        }
    }

    // MercadoPago.setPublishableKey("TEST-94aee634-6e4e-4d21-83b1-cdd3202bc0ef");

    function guessPaymentMethod() {
        let cardnumber = document.getElementById("cardNumber").value;
        if (cardnumber.length >= 6) {
            let bin = cardnumber.substring(0, 6);
            window.Mercadopago.getPaymentMethod(
                {
                    bin: bin,
                },
                this.setPaymentMethod
            );
        }
    }

    function setPaymentMethod(status, response) {
        if (status == 200) {
            let paymentMethod = response[0];
            document.getElementById("paymentMethodId").value = paymentMethod.id;

            this.getIssuers(paymentMethod.id);
        } else {
            alert(`payment method info error: ${response}`);
        }
    }

    function getIssuers(paymentMethodId) {
        window.Mercadopago.getIssuers(paymentMethodId, this.setIssuers);
    }

    function setIssuers(status, response) {
        if (status == 200) {
            let issuerSelect = document.getElementById("issuer");
            response.forEach((issuer) => {
                let opt = document.createElement("option");
                opt.text = issuer.name;
                opt.value = issuer.id;
                issuerSelect.appendChild(opt);
            });

            this.getInstallments(
                document.getElementById("paymentMethodId").value,
                document.getElementById("transactionAmount").value,
                issuerSelect.value
            );
        } else {
            alert(`issuers method info error: ${response}`);
        }
    }

    function getInstallments(paymentMethodId, transactionAmount, issuerId) {
        window.Mercadopago.getInstallments(
            {
                payment_method_id: paymentMethodId,
                amount: parseFloat(transactionAmount),
                issuer_id: parseInt(issuerId),
            },
            this.setInstallments
        );
    }

    function setInstallments(status, response) {
        if (status == 200) {
            document.getElementById("installments").options.length = 0;
            response[0].payer_costs.forEach((payerCost) => {
                let opt = document.createElement("option");
                opt.text = payerCost.recommended_message;
                opt.value = payerCost.installments;
                document.getElementById("installments").appendChild(opt);
            });
        } else {
            alert(`installments method info error: ${response}`);
        }
    }

    function getCardToken(event) {
        event.preventDefault();
        if (!this.doSubmit) {
            let $form = document.getElementById("paymentForm");
            window.Mercadopago.createToken($form, this.setCardTokenAndPay);
            return false;
        }
    }

    function setCardTokenAndPay(status, response) {
        if (status == 200 || status == 201) {
            let form = document.getElementById("paymentForm");
            let card = document.createElement("input");
            card.setAttribute("name", "token");
            card.setAttribute("type", "hidden");
            card.setAttribute("value", response.id);
            form.appendChild(card);
            this.doSubmit = true;
            form.submit();
        } else {
            alert("Verify filled data!\n" + JSON.stringify(response, null, 4));
        }
    }
    // Mercadoago.getIdentificationTypes();

    // useEffect(() => {

    //     document.getElementById('cardNumber').addEventListener('change', this.guessPaymentMethod);
    //     document.getElementById('paymentForm').addEventListener('submit', this.getCardToken);
    // }, [])

    return (
        <Container>
            <HeaderComponent />
            <ContainerPagamento>
                <LeftPagamentoInputs>
                    <Passos>
                        <img className="logo" src={logo} alt="logo" />
                        <div className="passo">
                            {isIdentificacao || isEntrega || isPagamento ?
                                <div className="numero1 ok">
                                    <img src={ok} />
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
                                    <img src={ok} />
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
                                    <img src={ok} />
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
                                <Input>
                                    <h1>E-mail</h1>
                                    <input value={email} required onChange={e => setEmail(e.target.value)} />
                                </Input>
                                <Input>
                                    <h1>Nome Completo</h1>
                                    <input value={nome} required onChange={e => setNome(e.target.value)} />
                                </Input>

                                <Input>
                                    <h1>CPF</h1>
                                    <input value={cpf} required onChange={e => setCpf(e.target.value)} />
                                </Input>
                                <Input>
                                    <h1>Telefone</h1>
                                    <input value={telefone} required onChange={e => setTelefone(e.target.value)} />
                                </Input>
                                <ButtonDiv>
                                    <button className="voltar" onClick={() => [setBox(true), setIdentificacao(false)]}>Voltar</button>
                                    {/* <button type="submit" className="proximo" onClick={() => [setBox(false), setIdentificacao(false), setEntrega(true), submitIdentificacao]}>Próximo</button> */}
                                    <button type="submit" className="proximo" onClick={submitIdentificacao}>Próximo</button>
                                </ButtonDiv>
                            </IdentificacaoDiv>
                            : null}

                        {isEntrega ?
                            <EntregaDiv>
                                <Input>
                                    <h1>CEP</h1>
                                    <input value={cep} className="cep" required onChange={e => setcep(e.target.value)} />
                                </Input>
                                <Input>
                                    <h1>Rua</h1>
                                    <input value={rua} required className="rua" onChange={e => setRua(e.target.value)} />
                                </Input>

                                <Input>
                                    <h1>Nº</h1>
                                    <input value={numero} className="numero" required onChange={e => setNumero(e.target.value)} />
                                </Input>
                                <Input>
                                    <h1>Bairro</h1>
                                    <input value={bairro} required onChange={e => setBairro(e.target.value)} />
                                </Input>
                                <Input>
                                    <h1>UF</h1>
                                    <input value={uf} className="uf" required onChange={e => setUf(e.target.value)} />
                                </Input>
                                <Input>
                                    <h1>Cidade</h1>
                                    <input value={cidade} required onChange={e => setCidade(e.target.value)} />
                                </Input>
                                <Input>
                                    <h1>Complemento</h1>
                                    <input value={complemento} required onChange={e => setComplemento(e.target.value)} />
                                </Input>
                                <ButtonDiv>
                                    <button className="voltar" onClick={() => [setBox(false), setIdentificacao(true), setEntrega(false)]}>Voltar</button>
                                    {/* <button className="proximo" onClick={() => [setIdentificacao(false), setEntrega(false), setPagamento(true)]}>Próximo</button> */}
                                    <button className="proximo" onClick={submitEntrega}>Próximo</button>
                                </ButtonDiv>
                            </EntregaDiv>
                            : null}

                        {isPagamento ?
                            <PagamentoDiv>
                                <div id="Home" className="divPrincipal">
                                    <form
                                        action="http://localhost:4000/process_payment"
                                        method="post"
                                        id="paymentForm"
                                    >
                                        <h3 class="textoComprador">Detalhe do comprador</h3>
                                        <div className="divComprador">
                                            <div className="divEmail">
                                                <label for="email">E-mail</label>
                                                <input id="email" name="email" type="text" />
                                            </div>
                                            <div className="divEmail">
                                                <label for="docType">Tipo de documento</label>
                                                <select
                                                    id="docType"
                                                    name="docType"
                                                    data-checkout="docType"
                                                    type="text"
                                                ></select>
                                            </div>
                                            <div className="divEmail">
                                                <label for="docNumber">Número do documento</label>
                                                <input
                                                    id="docNumber"
                                                    name="docNumber"
                                                    data-checkout="docNumber"
                                                    type="text"
                                                />
                                            </div>
                                        </div>
                                        <h3 className="textoComprador">Detalhes do cartão</h3>
                                        <div className="divComprador">
                                            <div className="divEmail">
                                                <label for="cardholderName">Titular do cartão</label>
                                                <input
                                                    id="cardholderName"
                                                    data-checkout="cardholderName"
                                                    type="text"
                                                />
                                            </div>
                                            <div className="divEmail">
                                                <label for="">Data de vencimento</label>
                                                <div>
                                                    <input
                                                        type="text"
                                                        placeholder="MM"
                                                        id="cardExpirationMonth"
                                                        data-checkout="cardExpirationMonth"
                                                        onSelectstart="return false"
                                                        onPaste="return false"
                                                        onCopy="return false"
                                                        onCut="return false"
                                                        onDrag="return false"
                                                        onDrop="return false"
                                                        autoComplete="off"
                                                    />
                                                    <span class="date-separator">/</span>
                                                    <input
                                                        type="text"
                                                        placeholder="YY"
                                                        id="cardExpirationYear"
                                                        data-checkout="cardExpirationYear"
                                                        onSelectstart="return false"
                                                        onPaste="return false"
                                                        onCopy="return false"
                                                        onCut="return false"
                                                        onDrag="return false"
                                                        onDrop="return false"
                                                        autoComplete="off"
                                                    />
                                                </div>
                                            </div>
                                            <div className="divEmail">
                                                <label for="cardNumber">Número do cartão</label>
                                                <input
                                                    type="text"
                                                    id="cardNumber"
                                                    data-checkout="cardNumber"
                                                    onSelectstart="return false"
                                                    onPaste="return false"
                                                    onCopy="return false"
                                                    onCut="return false"
                                                    onDrag="return false"
                                                    onDrop="return false"
                                                    autoComplete="off"
                                                />
                                            </div>
                                            <div className="divEmail">
                                                <label for="securityCode">Código de segurança</label>
                                                <input
                                                    id="securityCode"
                                                    data-checkout="securityCode"
                                                    type="text"
                                                    onSelectstart="return false"
                                                    onPaste="return false"
                                                    onCopy="return false"
                                                    onCut="return false"
                                                    onDrag="return false"
                                                    onDrop="return false"
                                                    auCocomplete="off"
                                                />
                                            </div>
                                            <div id="issuerInput" className="divEmail">
                                                <label for="issuer">Banco emissor</label>
                                                <select id="issuer" name="issuer" data-checkout="issuer"></select>
                                            </div>
                                            <div className="divEmail">
                                                <label for="installments">Parcelas</label>
                                                <select type="text" id="installments" name="installments"></select>
                                            </div>
                                            <div className="send">
                                                <input
                                                    type="hidden"
                                                    name="transactionAmount"
                                                    id="transactionAmount"
                                                    value="100"
                                                />
                                                <input type="hidden" name="paymentMethodId" id="paymentMethodId" />
                                                <input type="hidden" name="description" id="description" />
                                                <br />
                                                <button type="submit" className="proximo">Pagar</button>
                                                <br />
                                            </div>
                                        </div>
                                    </form>
                                </div>
                                {/* <ButtonDiv>
                                    <button className="voltar" onClick={() => [setBox(false), setIdentificacao(false), setEntrega(true), setPagamento(false)]}>Voltar</button>
                                    <button className="proximo" onClick={() => [setIdentificacao(false), setEntrega(false), setPagamento(true)]}>Próximo</button>
                                </ButtonDiv> */}
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
                        <h1>{produtoNome}</h1>
                        <h1>R$ {produtoPreco}/mês</h1><br />
                        <DadosEntrega>
                            <br />
                            <h2>Contato:</h2>
                            <p>{email}, {nome}, {cpf}, {telefone}</p><br />
                            <h2>Endereço:</h2>
                            <p>{cep}, {bairro}, {cidade}, {rua}, {numero}, {complemento}</p>
                            <br />
                        </DadosEntrega>
                    </RightConteudo>
                </RightPagamento>
            </ContainerPagamento>

        </Container >
    )
}
export default Pagamento;
