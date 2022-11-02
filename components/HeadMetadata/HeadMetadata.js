import Head from 'next/head';

export const HeadMetadata = ({title, content}) => (
    <Head>
        <title>
            {title} | Evelise Vazquez
        </title>
        <meta
        name="description"
        content={content}
        key="desc"
        />
  </Head>  
)