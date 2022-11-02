import fs from 'fs';
import matter from 'gray-matter';
import Image from 'next/image';

import styled from 'styled-components';
import Router from 'next/router'
import { BannerIntroducer } from '../components/BannerIntroducer/BannerIntroducer';
import { ContainerGrid } from '../components/ContainerGird/ContainerGrid';
import { HeadMetadata } from '../components/HeadMetadata/HeadMetadata';

export default function Home({ posts }) {
    return (
      <>
      <HeadMetadata title="Evelise Vazquez blog pessoal" description="Um blog sobre tecnologia, filosofia de vida, mercado de trabalho e café." />
        <BannerIntroducer />
          <ContainerGrid>
          <SectionSeparation>Artigos</SectionSeparation>
            <Cards>
              {posts.map(({ slug, frontmatter }) => (
                <Article onClick={() => Router.push(`/post/${slug}`)} key={slug}>
                  <PostImage src={frontmatter.socialImage} width="140" height="100" alt={frontmatter.title} />
                  <Title>{frontmatter.title}</Title>
                  <span>{new Date(frontmatter.date).toLocaleDateString('pt-BR')}</span>
                  <p>{frontmatter.metaDesc}</p>
                </Article>
              ))}
            </Cards>
          </ContainerGrid>
      </>
    );
}

export async function getStaticProps() {
  const files = fs.readdirSync('posts');
  const posts = files.map((fileName) => {
    const slug = fileName.replace('.md', '');
    const readFile = fs.readFileSync(`posts/${fileName}`, 'utf-8');
    const { data: frontmatter } = matter(readFile);

    return {
      slug,
      frontmatter,
    };
  });

  return {
    props: {
      posts,
    },
  };
}

const SectionSeparation = styled.h2`
  font-weight: 700;
  font-size:24px;
  color: hsla(233, 9%, 19%, 1);
`

const Container = styled.div`
  max-width: 80%;
  margin: 30px auto 40px;
`

const PostImage = styled(Image)`
  border-radius: 13px;
  width: 100%;
  height: auto;
`

const Cards = styled.div`
display: flex;
gap: 1rem;
margin-bottom: 40px;

@media (max-width: 700px) {
  flex-direction: column;
}
`

const Article = styled.article`
  width: 300px;
  padding: 10px 20px;
  border-radius: 15px;
  box-shadow:4px 6px 13px hsl(0deg 0% 84% / 30%);
  cursor: pointer;
  color: hsla(233, 9%, 19%, 1);
  display: flex;
  flex-direction: column;
  overflow: hidden;


  a {
    text-decoration: none;
  }

  span {
    font-size:13px;
    color:
  }

  p {
    font-weight: 300;
    margin: 5px 0;
  }
`
const Title = styled.h4`
  color: #6246EA;
`