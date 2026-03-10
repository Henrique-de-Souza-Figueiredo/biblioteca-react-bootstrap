import Header from "../components/Header/Header.jsx";
import LivroQuadrado from "../components/livroQuadrado/LivroQuadrado.jsx";
import Footer from "../components/Footer/Footer.jsx";
import {Link} from "react-router-dom";

export default function Detalhes() {
    return (
        <>
            <Header />
            <LivroQuadrado />

            <Footer />
        </>
    )
}