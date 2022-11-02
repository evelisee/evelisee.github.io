import styled from 'styled-components';
import Image from 'next/image';

export const BannerIntroducer = () => {
    return (
        <Banner>
            <div>
                <h1>Olá, sou a Evelise Vazquez</h1>
                <p>Aqui você vai encontrar um pouco do que costumo falar sobre tecnologia em formato de blog</p>
            </div>

            <div>
                <Image width="592" height="433" src="/images/main-design2@2x.png" alt="Ilustração de uma menina segurando o mundo com um fundo roxo " />
            </div>
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
    justify-content: space-around;
    align-items: center;

    & > div{
        width: 40%;
    }

    h1{
        margin-top:0;
    }

    p{
        padding-left: 12px;
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
