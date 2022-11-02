import styled from 'styled-components';
import Link from 'next/link';
import Image from 'next/image';
import { TextLink } from '../TextLink/TextLink';

export const Footer = () => {
    return (
        <FooterContainer>
            <section>
                <div>
                    <Logo>Evelise<span>.dev</span></Logo>
                    <SocialSection>
                    <LightText><TextLink href="https://www.figma.com/@dastin" target="_blank">Twitter</TextLink></LightText>
                    <LightText><TextLink href="https://www.figma.com/@dastin" target="_blank">Instagram</TextLink></LightText>
                    <LightText><TextLink href="https://www.figma.com/@dastin" target="_blank">Linkedin</TextLink></LightText>
                    </SocialSection>
                </div>
                <div>
                    <TitleFocus>LAYOUT</TitleFocus>
                    <LightText>Blog design by <TextLink href="https://www.figma.com/@dastin" target="_blank">Dastin Darmawan</TextLink></LightText>
                    <LightText>Girl illustration by <TextLink href="https://www.figma.com/@treetop" target="_blank">Treetop</TextLink></LightText>
                </div>
                <div>
                    <TitleFocus>CONTATO</TitleFocus>
                    <LightText>alo@evelise.dev</LightText>
                </div>
            </section>

            <CopyRight>
                <p>© 2022 Evelise Vazquez</p>
            </CopyRight>
        </FooterContainer>
    )
}

const TitleFocus = styled.h3`
    margin:0;
    font-weight: bold;
    font-size: 15px;
`

const LightText = styled.p`
    font-weight: 300;
    margin: 5px 0 0 00px;
    font-size: 13px;
`

const FooterContainer = styled.footer`
    background-color: #D2D6DB;
    margin-bottom: 0px;

    & > section{
        display:flex;
        padding: 7px 20px 10px;
        justify-content: space-between;
        align-items: baseline;
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
    padding: 2px 20px;
`
