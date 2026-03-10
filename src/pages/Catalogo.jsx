import {Link} from "react-router-dom";
import Header from "../components/Header/Header.jsx";
import Footer from "../components/Footer/Footer.jsx";
import GridLivro from "../components/gridLivro/GridLivro.jsx";
import Banner from "../components/Banner/Banner.jsx";
import Destaques from "../components/destaques/destaques.jsx";
import Botao from "../components/Botao/Botao.jsx";

export default function Catalogo() {
    return (
        <>

            <Header />
            <Destaques titulo={"Catalogo"} />
            <GridLivro rotacatalogo="/detalhes "  />
            <Botao usarCss={true} conteudo={"Ver Mais"} />
            <Footer />
        </>
    )
}