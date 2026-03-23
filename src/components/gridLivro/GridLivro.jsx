import BookLivro from "../bookCartao/bookCartao"
import {useEffect,useState} from "react";

export default function GridLivro({rotacatalogo, inp, setInp}) {
    const [livros, setLivros] = useState([])

    async function buscarLivros() {
        let buscarTitulo = await fetch(`https://apps-api-livros.ucxocw.easypanel.host/livro?titulo=${inp}`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json"
            }
        })
        buscarTitulo = await buscarTitulo.json()

        let buscarAutor = await fetch(`https://apps-api-livros.ucxocw.easypanel.host/livro?autor=${inp}`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json"
            }
        })
        buscarAutor = await buscarAutor.json()
        if (inp){
            setLivros(buscarTitulo.livros.concat(buscarAutor.livros))
        } else{
            setLivros(buscarTitulo.livros)
        }


        // setLivros(buscar.livros)
        console.log(livros)
    }

    useEffect(function () {
        buscarLivros()
    }, [inp])
    return (
        <div className={"container "}>
            <div className={"row"}>
                {livros.map((livro, index) => (
                    <div className='col-md-3 col-12' key={index}>
                        <BookLivro
                            rota={`${rotacatalogo}/${livro.id}`}
                            titulo={livro.titulo}
                            autor={livro.autor}
                            tipo={livro.tipo}
                            imagem={livro.imagem}
                        />
                    </div>
                ))}
            </div>

        </div>
    )
}