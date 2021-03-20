import React, { useState, useEffect } from 'react'
import { ContainerPerguntas, BoxPerguntas, Pergunta, TextPergunta, BarraPergunta, HidenResposta } from '../../styles/Perguntas'
import abrir from '../../utils/img/abrir.png'
import fechar from '../../utils/img/fechar.png'
import Aos from 'aos';
import "aos/dist/aos.css";

const Perguntas = () => {

    const [pergunta1, setPergunta1] = useState(false);
    const [pergunta2, setPergunta2] = useState(false);
    const [pergunta3, setPergunta3] = useState(false);
    const [pergunta4, setPergunta4] = useState(false);
    const [pergunta5, setPergunta5] = useState(false);
    const [pergunta6, setPergunta6] = useState(false);
    const [pergunta7, setPergunta7] = useState(false);

    useEffect(() => {
        Aos.init({duration: 500});
    }, [])

    return (
        <ContainerPerguntas>
                <BoxPerguntas>
                    <Pergunta>
                        <div data-aos="fade-right"data-aos-offset="200">
                            {pergunta1?
                            <TextPergunta  onClick={() => setPergunta1(false)}>
                                <h1>pergunta pergunta pergunta pergunta</h1>
                                {pergunta1?
                                    <button><img src={fechar} alt="abrir"></img></button>
                                :   <button><img src={abrir} alt="abrir"></img></button>}
                            </TextPergunta>
                            : 
                            <TextPergunta  onClick={() => setPergunta1(true)}>
                                <h1>pergunta pergunta pergunta pergunta</h1>
                                {pergunta1?
                                    <button><img src={fechar} alt="abrir"></img></button>
                                :   <button><img src={abrir} alt="abrir"></img></button>}
                            </TextPergunta>}
                            {pergunta1?
                                <HidenResposta>
                                    <h1>Resposta</h1>
                                </HidenResposta>
                            :null}
                            <BarraPergunta />
                        </div>
                    </Pergunta>
                    <Pergunta>
                        <div data-aos="fade-right" data-aos-offset="200">
                        {pergunta2?
                        <TextPergunta  onClick={() => setPergunta2(false)}>
                            <h1>pergunta pergunta pergunta pergunta</h1>
                            {pergunta2?
                                <button><img src={fechar} alt="abrir"></img></button>
                            :   <button><img src={abrir} alt="abrir"></img></button>}
                        </TextPergunta>
                        : 
                        <TextPergunta  onClick={() => setPergunta2(true)}>
                            <h1>pergunta pergunta pergunta pergunta</h1>
                            {pergunta2?
                                <button><img src={fechar} alt="abrir"></img></button>
                            :   <button><img src={abrir} alt="abrir"></img></button>}
                        </TextPergunta>}
                        {pergunta2?
                            <HidenResposta>
                                <h1>Resposta</h1>
                            </HidenResposta>
                        :null}
                        <BarraPergunta />
                        </div>
                    </Pergunta>
                    <Pergunta>
                        <div data-aos="fade-right" data-aos-offset="200">
                        {pergunta3?
                        <TextPergunta  onClick={() => setPergunta3(false)}>
                            <h1>pergunta pergunta pergunta pergunta</h1>
                            {pergunta3?
                                <button><img src={fechar} alt="abrir"></img></button>
                            :   <button><img src={abrir} alt="abrir"></img></button>}
                        </TextPergunta>
                        : 
                        <TextPergunta  onClick={() => setPergunta3(true)}>
                            <h1>pergunta pergunta pergunta pergunta</h1>
                            {pergunta3?
                                <button><img src={fechar} alt="abrir"></img></button>
                            :   <button><img src={abrir} alt="abrir"></img></button>}
                        </TextPergunta>}
                        {pergunta3?
                            <HidenResposta>
                                <h1>Resposta</h1>
                            </HidenResposta>
                        :null}
                        <BarraPergunta />
                        </div>
                    </Pergunta>
                    <Pergunta>
                        <div data-aos="fade-right" data-aos-offset="200">
                        {pergunta4?
                        <TextPergunta  onClick={() => setPergunta4(false)}>
                            <h1>pergunta pergunta pergunta pergunta</h1>
                            {pergunta4?
                                <button><img src={fechar} alt="abrir"></img></button>
                            :   <button><img src={abrir} alt="abrir"></img></button>}
                        </TextPergunta>
                        : 
                        <TextPergunta  onClick={() => setPergunta4(true)}>
                            <h1>pergunta pergunta pergunta pergunta</h1>
                            {pergunta4?
                                <button><img src={fechar} alt="abrir"></img></button>
                            :   <button><img src={abrir} alt="abrir"></img></button>}
                        </TextPergunta>}
                        {pergunta4?
                            <HidenResposta>
                                <h1>Resposta</h1>
                            </HidenResposta>
                        :null}
                        <BarraPergunta />
                        </div>
                    </Pergunta>
                    <Pergunta>
                        <div data-aos="fade-right">
                        {pergunta5?
                        <TextPergunta  onClick={() => setPergunta5(false)}>
                            <h1>pergunta pergunta pergunta pergunta</h1>
                            {pergunta5?
                                <button><img src={fechar} alt="abrir"></img></button>
                            :   <button><img src={abrir} alt="abrir"></img></button>}
                        </TextPergunta>
                        : 
                        <TextPergunta  onClick={() => setPergunta5(true)}>
                            <h1>pergunta pergunta pergunta pergunta</h1>
                            {pergunta5?
                                <button><img src={fechar} alt="abrir"></img></button>
                            :   <button><img src={abrir} alt="abrir"></img></button>}
                        </TextPergunta>}
                        {pergunta5?
                            <HidenResposta>
                                <h1>Resposta</h1>
                            </HidenResposta>
                        :null}
                        <BarraPergunta />
                        </div>
                    </Pergunta>
                    <Pergunta>
                        <div data-aos="fade-right" data-aos-offset="200">
                        {pergunta6?
                        <TextPergunta  onClick={() => setPergunta6(false)}>
                            <h1>pergunta pergunta pergunta pergunta</h1>
                            {pergunta6?
                                <button><img src={fechar} alt="abrir"></img></button>
                            :   <button><img src={abrir} alt="abrir"></img></button>}
                        </TextPergunta>
                        : 
                        <TextPergunta  onClick={() => setPergunta6(true)}>
                            <h1>pergunta pergunta pergunta pergunta</h1>
                            {pergunta6?
                                <button><img src={fechar} alt="abrir"></img></button>
                            :   <button><img src={abrir} alt="abrir"></img></button>}
                        </TextPergunta>}
                        {pergunta6?
                            <HidenResposta>
                                <h1>Resposta</h1>
                            </HidenResposta>
                        :null}
                        <BarraPergunta />
                        </div>
                    </Pergunta>
                    <Pergunta>
                        <div data-aos="fade-right" data-aos-offset="200">
                        {pergunta7?
                        <TextPergunta  onClick={() => setPergunta7(false)}>
                            <h1>pergunta pergunta pergunta pergunta</h1>
                            {pergunta7?
                                <button><img src={fechar} alt="abrir"></img></button>
                            :   <button><img src={abrir} alt="abrir"></img></button>}
                        </TextPergunta>
                        : 
                        <TextPergunta  onClick={() => setPergunta7(true)}>
                            <h1>pergunta pergunta pergunta pergunta</h1>
                            {pergunta7?
                                <button><img src={fechar} alt="abrir"></img></button>
                            :   <button><img src={abrir} alt="abrir"></img></button>}
                        </TextPergunta>}
                        {pergunta7?
                            <HidenResposta>
                                <h1>Resposta</h1>
                            </HidenResposta>
                        :null}
                        <BarraPergunta />
                        </div>
                    </Pergunta>
                </BoxPerguntas>
            </ContainerPerguntas>
    )
  };
  export default Perguntas;