import styled from 'styled-components';
import Router from 'next/router';
import Link from 'next/link';
import { ContainerGrid } from '../ContainerGird/ContainerGrid';


export const Header = () => (
    <Nav>
        <ContainerGrid>
            <FlexContent>
                <div>
                    <Logo onClick={() => Router.push('/')}>
                        Evelise
                        <span>.dev</span>
                    </Logo>
                </div>
                <nav>
                    <Navigation>
                        <li><Link href="/">Início</Link></li>
                        <li><Link href="#">Categorias</Link></li>
                        <li><Link href="/conteudo-aulas">Conteúdo de Aulas</Link></li>
                    </Navigation>
                </nav>
            </FlexContent>
        </ContainerGrid>
    </Nav>
)


const Nav = styled.header`
    background: #EFF0F3;
    filter: drop-shadow(4px 8px 7px rgba(215,215,215,0.55));
    margin: 0;
    min-height: 72px;
`;

const FlexContent = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
min-height: 72px;

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

    @media (max-width: 700px) {
        flex-direction: column;
        padding: 10px;

        li {
            margin: 2px 0;

        }
    }
`
