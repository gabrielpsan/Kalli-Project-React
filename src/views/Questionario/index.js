import React, { useState, useEffect } from 'react'
import HeaderComponent from '../../components/Header'
import {
    Container, ContainerQuestionario, Pergunta, HeaderQuestionario,
    ImgHeader, Borda, Inputs, TextoHeader, ButtonQuestionario
} from '../../styles/Questionario'
import Swal from 'sweetalert2'
import { useHistory } from "react-router-dom";

const Questionario = (props) => {

    const [pele, setPele] = useState('');
    const [cabelo, setCabelo] = useState('');

    let history = useHistory();

    function SubmitIdentificacao() {
        const identificacao = {
            'pele': pele,
            'cabelo': cabelo,
        }

        if (!identificacao.pele) {
            var faltaInput = 1;
        }

        if (!identificacao.cabelo) {
            var faltaInput = 1;
        }

        if (faltaInput) {
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
            Swal.fire({
                title: 'Resposta enviada, já sabemos a box perfeita para você!',
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
            
            history.push(`/`);
        }
        console.log(identificacao);
        var faltaInput = 0;
    }

    return (
        <Container>
            <HeaderComponent />
            <ContainerQuestionario>
                <HeaderQuestionario>
                    {/* <ImgHeader>
                        <img src={fundo} />
                    </ImgHeader> */}
                    <TextoHeader>
                        <h2>
                            Responda esse questionário e você receberá box's personalizadas próprias para você!
                        </h2>
                    </TextoHeader>
                </HeaderQuestionario>
                <Borda />
                <Pergunta>
                    <h1>Qual é seu tipo de pele?</h1>

                    <Inputs>
                        <div className="inputs">
                            <div className="inputR" >
                                <input type="radio" value="normal" name="campo-radio1" id="campo-radio1" onChange={e => setPele(e.target.value)} />
                                <label for="campo-radio1">Normal</label>
                            </div>
                            <div className="inputR">
                                <input type="radio" value="seca" name="campo-radio1" id="campo-radio2" onChange={e => setPele(e.target.value)} />
                                <label for="campo-radio2">Seca</label>
                            </div>
                            <div className="inputR">
                                <input type="radio" value="oleosa" name="campo-radio1" id="campo-radio3" onChange={e => setPele(e.target.value)} />
                                <label for="campo-radio3">Oleosa</label>
                            </div>
                            <div className="inputR">
                                <input type="radio" value="mista" name="campo-radio1" id="campo-radio4" onChange={e => setPele(e.target.value)} />
                                <label for="campo-radio4">Mista</label>
                            </div>
                        </div>
                    </Inputs>
                </Pergunta>

                <Pergunta>
                    <h1>Qual o tipo do seu cabelo?</h1>

                    <Inputs>
                        <div className="inputs">
                            <div className="inputR">
                                <input type="radio" value="ondulado" name="campo-radio2" id="campo-radio5" onChange={e => setCabelo(e.target.value)} />
                                <label for="campo-radio5">Ondulados </label>
                            </div>
                            <div className="inputR">
                                <input type="radio" value="cacheados" name="campo-radio2" id="campo-radio6" onChange={e => setCabelo(e.target.value)} />
                                <label for="campo-radio6">Cacheados </label>
                            </div>
                            <div className="inputR">
                                <input type="radio" value="crespos" name="campo-radio2" id="campo-radio7" onChange={e => setCabelo(e.target.value)} />
                                <label for="campo-radio7">Crespos </label>
                            </div>
                            <div className="inputR">
                                <input type="radio" value="lisos" name="campo-radio2" id="campo-radio8" onChange={e => setCabelo(e.target.value)} />
                                <label for="campo-radio8">Lisos </label>
                            </div>
                        </div>
                    </Inputs>
                </Pergunta>

                <ButtonQuestionario>
                    <button onClick={SubmitIdentificacao}>Enviar resposta</button>
                </ButtonQuestionario>
            </ContainerQuestionario>
        </Container >
    )
}
export default Questionario;
