import fs from 'fs';
import matter from 'gray-matter';
import Image from 'next/image';
import styled from 'styled-components';
import {TextLink} from '../../components/TextLink/TextLink'
import md from 'markdown-it';

export default function PostPage({ frontmatter, content }) {
    return (
      <Container>
        <ImagePost src={frontmatter.socialImage} width="600" height="400"/>
        <ImageCredits>Foto por <TextLink href={frontmatter.photoLink} target="_blank">{frontmatter.photoAutor}</TextLink></ImageCredits>
        <h1>{frontmatter.title}</h1>
        <p><span>{new Date(frontmatter.date).toLocaleDateString('pt-BR')}</span></p>
        <p>Categorias: 
          
        {frontmatter.tags.map((categorie) => (
          <Categorie>{categorie}</Categorie>
        ))}
        </p>
        <div dangerouslySetInnerHTML={{ __html: md().render(content) }} />
      </Container>
    );
  }


export async function getStaticProps({ params: { slug } }) {
    const fileName = fs.readFileSync(`posts/${slug}.md`, 'utf-8');
    const { data: frontmatter, content } = matter(fileName);
    return {
      props: {
        frontmatter,
        content,
      },
    };
}

export async function getStaticPaths() {
    const files = fs.readdirSync('posts');
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


const Container = styled.div`
  max-width: 1024px;
  margin: 30px auto;

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
`


const ImageCredits = styled.p`
  font-size:14px;
`

const ImagePost = styled(Image)`
  border-radius: 12px;
  margin: 0 auto;
  display: block;
`

const Categorie = styled.span`
  color: #2B2C34;
  margin: 0 5px;
  padding: 4px 6px;
  background-color: hsla(250,80%,60%,.50);
  border-radius: 12px;
  font-size: 13px;
`
