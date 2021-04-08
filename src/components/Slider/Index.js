import React from 'react'
import { Container, ContentSlider, TitleSlider } from '../../styles/Slider'
import imgInicio from '../../utils/img/Kalli2.jpg'

const Slider = () => {
    return (
        <Container>
            <ContentSlider>
                {/* <TitleSlider>
                    <h1>Como funciona?</h1>
                </TitleSlider> */}
                <img src={imgInicio} alt="imagem-inicio"/>
            </ContentSlider>
        </Container>
    )
  };
  export default Slider;