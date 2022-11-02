import { Footer } from './Footer/Footer';
import { Header } from './Header/Hearder';



export default function Layout({ children }) {
  return (
    <>
    <Header />
    <main>{children}</main>
    <Footer />
    </>
  );
}
