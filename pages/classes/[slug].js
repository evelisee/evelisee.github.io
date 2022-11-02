import fs from 'fs';
import matter from 'gray-matter';
import Image from 'next/image';
import styled from 'styled-components';
import {TextLink} from '../../components/TextLink/TextLink'
import md from 'markdown-it';
import { ContainerGrid } from '../../components/ContainerGird/ContainerGrid';

export default function PostPage({ frontmatter, content }) {
    return (
      <BlogContent>        
        <ContainerGrid>
          <ImagePost src={frontmatter.socialImage} alt={frontmatter.title} width="600" height="400"/>
          <ImageCredits>Foto por <TextLink href={frontmatter.photoLink} target="_blank">{frontmatter.photoAutor}</TextLink></ImageCredits>
            <Introducion>Data: <span>{new Date(frontmatter.date).toLocaleDateString('pt-BR')}</span>
            </Introducion>
          
          <hr/>
      
          <ContainerPost>
            <h1>{frontmatter.title}</h1>
            <div dangerouslySetInnerHTML={{ __html: md().render(content) }} />
          </ContainerPost>
        </ContainerGrid>
      </BlogContent>
    );
  }


export async function getStaticProps({ params: { slug } }) {
    const fileName = fs.readFileSync(`classes/${slug}.md`, 'utf-8');
    const { data: frontmatter, content } = matter(fileName);
    return {
      props: {
        frontmatter,
        content,
      },
    };
}

export async function getStaticPaths() {
    const files = fs.readdirSync('classes');
    const paths = files.map((fileName) => ({
        params: {
          slug: fileName.replace('.md', ''),
        },
    }));
    return {
        paths,
        fallback: false,
    };
}

const Introducion = styled.p`
  margin:0;
`

const BlogContent = styled.section`
  margin-top: 30px;

  hr {
    width: 100%;
    margin: 0;
    background-color: #e0e0e0;
    height: 1px;
    border: 0;
  }
`


const ContainerPost = styled.div`
  a {
    text-decoration: none;
    color: #2B2C34;
    position: relative;
    font-weight: 700;
    z-index:2;

      &:hover::before {
        bottom: 0;
        height: 100%;
      }

    &:before {
      content: '';
      background-color: hsla(250, 80%, 60%, .50);
      position: absolute;
      left: 0;
      bottom: 1px;
      width: 100%;
      height: 5px;
      z-index: -1;
      transition: all .3s ease-in-out;
    }
  }

  p {
    line-height: 1.5em;
  }

  img {
    margin: 0 auto;
    display: block;
  }

  table {
    border-collapse: collapse;
    margin: 25px 0;
    font-size: 0.9em;
    font-family: sans-serif;
    min-width: 400px;
    box-shadow: 0 0 20px rgba(0, 0, 0, 0.15);

    thead tr {
        background-color: #6246ea;
        color: #ffffff;
        text-align: left;
    }

    th,
    td {
        padding: 12px 15px;
    }

    tbody tr {
        border-bottom: 1px solid #dddddd;
    }
    
    tbody tr:nth-of-type(even) {
        background-color: #f3f3f3;
    }
    
    tbody tr:last-of-type {
        border-bottom: 2px solid #6246ea;
    }
  }
`


const ImageCredits = styled.p`
  font-size:14px;
`

const ImagePost = styled(Image)`
  border-radius: 12px;
  margin: 0 auto;
  display: block;
`
