import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import Header from "../components/Header/Header.jsx";
import LivroQuadrado from "../components/livroQuadrado/LivroQuadrado.jsx";
import Footer from "../components/Footer/Footer.jsx";

export default function Detalhes() {

    const { id } = useParams();
    const [livro, setLivro] = useState(null);

    useEffect(() => {

        async function buscarLivro() {

            let resposta = await fetch(
                `https://apps-api-livros.ucxocw.easypanel.host/livro/${id}`
            );

            resposta = await resposta.json();

            setLivro(resposta.livro);
        }

        buscarLivro();

    }, [id]);

    return (
        <>
            <Header />

            {livro && <LivroQuadrado livro={livro} />}

            <Footer />
        </>
    )
}