import styled from 'styled-components';
import Image from 'next/image';
import { ContainerGrid } from '../ContainerGird/ContainerGrid';


export const BannerIntroducer = () => {
    return (
        <Banner>
            <ContainerGrid>
                <FlexContent>
                    <div>
                        <h1>Olá, sou a Evelise Vazquez dev front-end</h1>
                        <p>Aqui você vai encontrar um pouco do que costumo falar sobre tecnologia em formato de blog. <br/>
                            A assinatura de conteúdo novo está temporariamente desabilitada.</p>

                        <ContainerSubscription>
                           <SubscribeInput type="email" placeholder="Insira seu email..." />
                           <AssignButton disabled>Assinar</AssignButton>
                        </ContainerSubscription>
                        
                    </div>
                </FlexContent>
            </ContainerGrid>
        </Banner>
    )
}

const Banner = styled.section`
    font-family: "Plus Jakarta Sans", sans-serif; 
    min-height: 500px;
    background-image: url('/images/pattern-banner.png');
    background-repeat: repeat;
    background-size: 40px;
    display: flex;
    align-items: center;

    h1{
        margin-top:0;
    }

    p{
        padding-left: 12px;
        line-height: 1.5em;
        position: relative;
        color: #9A9494;

        &:after {
            content: '';
            display: inline-block;
            background-color: #2B2C34;
            position: absolute;
            left: 0;
            top: -3px;
            width: 3px;
            height: 126%;
        }
    }
`

const FlexContent = styled.div`
    display: flex;
    display: flex;
    justify-content: space-around;
    align-items: center;
`

const ContainerSubscription = styled.div`
    margin-top: 40px;
`

const SubscribeInput = styled.input`
    border-radius: 12px;
    min-width: 250px;
    font-weight: 300;
    border:0;
    padding: 15px 12px;
    box-shadow: 0px 0px 6px -5px rgba(0,0,0,0.30);
`

const AssignButton = styled.button`
    background-color: #6246EA;
    border-radius: 12px;
    padding: 15px 12px;
    font-weight: 600;
    color: white;
    border: 0;
    margin-left: 20px;
    min-width: 100px;
    cursor: pointer;

    &:disabled{
        background-color: grey;
        cursor: no-drop;
    }
`
