import React from 'react';
import styled from "styled-components";
import Menu from '../../componentes/Menu'
import dadosIniciais from '../../data/dados_iniciais.json';
import BannerMain from '../../componentes/BannerMain';
import Carousel from '../../componentes/Carousel';
import Footer from '../../componentes/Footer';

const AppWrapper = styled.div`
background: var(--grayDark);
`;

function Home() {
  return (
    <AppWrapper>
      <Menu />

      <BannerMain videoTitle={dadosIniciais.categorias[0].videos[0].titulo}
      url={dadosIniciais.categorias[0].videos[0].url}
      videoDescription={"Quer saber qual o segredo da vida?"}
      ></BannerMain>

      <Carousel
      ignoreFirstVideo
      category={dadosIniciais.categorias[0]}
      ></Carousel>

      <Carousel
      ignoreFirstVideo
      category={dadosIniciais.categorias[1]}
      ></Carousel>

      <Carousel
      ignoreFirstVideo
      category={dadosIniciais.categorias[2]}
      ></Carousel>

      <Carousel
      ignoreFirstVideo
      category={dadosIniciais.categorias[3]}
      ></Carousel>

      <Footer></Footer>

    </AppWrapper>
  );
}

export default Home;