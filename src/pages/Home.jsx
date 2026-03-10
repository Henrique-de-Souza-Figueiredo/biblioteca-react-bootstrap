
import Banner from "../components/Banner/Banner.jsx";
import Destaques from "../components/destaques/destaques.jsx";
import Footer from "../components/Footer/Footer.jsx";
import Header from "../components/Header/Header.jsx";
import GridLivro from "../components/gridLivro/GridLivro.jsx";
import Botao from "../components/Botao/Botao.jsx";

export default function Home() {
    return (
        <>
            <Header />
            <Banner />
            <Destaques />
            <GridLivro rotacatalogo="/cadastro" />
            <Botao conteudo={"Ver Catálogo Completo"} />
            <Footer />


        </>
    )
}