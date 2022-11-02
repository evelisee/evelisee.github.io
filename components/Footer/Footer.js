import styled from 'styled-components';
import Link from 'next/link';
import Image from 'next/image';
import { TextLink } from '../TextLink/TextLink';
import { ContainerGrid } from '../ContainerGird/ContainerGrid';

export const Footer = () => {
    return (
        <FooterContainer>
            <ContainerGrid>                
                <section>
                    <div>
                        <Logo>Evelise<span>.dev</span></Logo>    
                        <LightText>Blog design by <TextLink href="https://www.figma.com/@dastin" target="_blank">Dastin Darmawan</TextLink></LightText>                   
                    </div>
                    <div>
                        <TitleFocus>SOCIAL</TitleFocus>
                        <LightText><TextLink href="https://twitter.com/evelisevazquez" target="_blank">Twitter</TextLink></LightText>
                        <LightText><TextLink href="https://www.instagram.com/evelisee/" target="_blank">Instagram</TextLink></LightText>
                        <LightText><TextLink href="https://linkedin.com/in/evelisevazquez" target="_blank">Linkedin</TextLink></LightText>
                    </div>
                    
                    <div>
                        <TitleFocus>CONTATO</TitleFocus>
                        <LightText>alo@evelise.dev</LightText>
                    </div>
                </section>

                <CopyRight>
                    <p>© 2022 Evelise Vazquez</p> 
                </CopyRight>
            </ContainerGrid>
        </FooterContainer>
    )
}

const TitleFocus = styled.h3`
    margin:5px 0px 10px;
    font-weight: bold;
    font-size: 15px;
`

const LightText = styled.p`
    font-weight: 300;
    margin: 5px 0 0 0px;
    font-size: 13px;
`

const FooterContainer = styled.footer`
    background-color: #D2D6DB;
    margin-bottom: 0px;

    & section{
        display:flex;
        padding-top: 12px;
        justify-content: space-between;
        align-items: baseline;

        @media (max-width: 700px) {
            flex-direction: column;
            align-items: center;
            text-align: center;
        }
    }

    & div:first-child{
        align-self: center;
    }  
`

const SocialSection = styled.section`
    display:flex;

    a {
        margin: 10px 5px;
    }
`

const Logo = styled.p`
    color:#001858;
    font-family: "Plus Jakarta ns", sans-serif; 
    font-size: 25px;
    font-weigth: 600;
    margin:0;

    span {
        color:#6246EA;
        font-size:18px;
    }
`

const CopyRight = styled.div`
    border-top: 1px solid #C0C0C0;
    font-size: 12px;
    font-weight: 300;
`
