import Link from 'next/link';
import styled from 'styled-components';
import { Footer } from './Footer/Footer';
import Router from 'next/router'


export default function Layout({ children }) {
  return (
    <>
    <Nav>
        <div>
            <Logo onClick={() => Router.push('/')}>
                Evelise
                <span>.dev</span>
            </Logo>
        </div>
        <Navigation>
            <li><Link href="/">Início</Link></li>
            <li><Link href="#">Categorias</Link></li>
            <li><Link href="/conteudo-aulas">Conteúdo de Aulas</Link></li>
        </Navigation>
    </Nav>

    <main>{children}</main>

    <Footer />
    </>
  );
}

const Nav = styled.nav`
  background: #EFF0F3;
  box-shadow: 4px 6px 16px rgba(215, 215, 215, 0.25);
  margin: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  min-height:86px;
`;

const Logo = styled.p`
    color:#001858;
    font-family: "Plus Jakarta Sans", sans-serif; 
    font-size: 36px;
    font-weigth: 600;
    cursor: pointer;
    margin:0 10px;

    span {
        color:#6246EA;
        font-size:18px;
    }
`

const Navigation = styled.ul`
    display: flex;
    margin: 0;
    font-family: "Plus Jakarta Sans", sans-serif;

    li {
        list-style:none;
        margin: 0 50px;
        font-weight: 600;
 
        a {
            text-decoration:none;
            color: #2B2C34;
        }

        a:hover{
            color: #6246EA
        }
    }
`
