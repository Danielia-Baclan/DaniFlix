import React from 'react';
import { FooterBase } from './styles';
import Logo from '../../assets/imagens/Logo-verde-agua.png'

function Footer() {
  return (
    <FooterBase>
      <a href="/">
      <img className="Logo" src={Logo} alt="DaniFlix"></img>    
      </a>
      <p>
        Orgulhosamente criado durante a
        {' '}
        <a href="https://www.alura.com.br/">
          Imersão React da Alura
        </a>
      </p>
    </FooterBase>
  );
}

export default Footer;
