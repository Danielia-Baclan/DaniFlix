import React, { Fragment } from 'react';
import styled from 'styled-components';
import Menu from '../Menu';
import Footer from '../Footer';

const Main = styled.main`
    background-color: var(--grayDark);
    color: var(--white);
    flex: 1;
    padding-top: 50px;
    padding-left: 5%;
    padding-right: 5%;
`;

function PageDefault({ children }){
    return (
        <>
            <Menu></Menu>
                <Main>
                    {children}
                </Main>
            <Footer></Footer>
        </>
    );
}

export default PageDefault;