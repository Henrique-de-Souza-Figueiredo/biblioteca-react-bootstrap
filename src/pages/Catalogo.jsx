import {Link} from "react-router-dom";
import Header from "../components/Header/Header.jsx";
import Footer from "../components/Footer/Footer.jsx";
import GridLivro from "../components/gridLivro/GridLivro.jsx";
import Banner from "../components/Banner/Banner.jsx";
import Destaques from "../components/destaques/destaques.jsx";
import Botao from "../components/Botao/Botao.jsx";
import {useState} from "react";

export default function Catalogo() {
    const [inp,setInp] = useState('');
    return (
        <>

            <Header />
            <Botao link="/cadastroLivro" conteudo="Adicionar Livro"/>
            <Destaques titulo={"Catalogo"} inp={inp} setInp={setInp} />
            <GridLivro rotacatalogo="/detalhes" inp={inp} setInp={setInp} />
            <Footer />
        </>
    )
}