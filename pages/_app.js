import Layout from '../components/layout';
import '../styles/globals.css'
import "@fontsource/plus-jakarta-sans"
import "@fontsource/plus-jakarta-sans/600.css"
import "@fontsource/plus-jakarta-sans/300.css"
import "@fontsource/pt-serif";


function MyApp({ Component, pageProps }) {
  return <Layout><Component {...pageProps} /></Layout>
}

export default MyApp
