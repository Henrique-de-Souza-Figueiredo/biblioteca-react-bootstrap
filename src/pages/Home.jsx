
import Banner from "../components/Banner/Banner.jsx";
import Destaques from "../components/destaques/destaques.jsx";
import Footer from "../components/Footer/Footer.jsx";
import Header from "../components/Header/Header.jsx";
import GridLivro from "../components/gridLivro/GridLivro.jsx";
import Botao from "../components/Botao/Botao.jsx";
import {useState} from "react";

export default function Home() {
    const [inp,setInp] = useState("");
    const [select, setSelect] = useState("");
    return (
        <>
            <Header />
            <Banner />
            <Destaques select={select} setSelect={setSelect} inp={inp} setInp={setInp} />
            <GridLivro rotacatalogo="/cadastro" select={select} setSelect={setSelect} inp={inp} setInp={setInp} />
            <Botao conteudo={"Ver Catálogo Completo"} />
            <Footer />


        </>
    )
}