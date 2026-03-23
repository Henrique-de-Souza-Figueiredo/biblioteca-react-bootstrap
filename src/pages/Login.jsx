import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import CaixaForm from "../components/CaixaForm/CaixaForm.jsx";
import Input from "../components/Input/Input.jsx";
import Header from "../components/Header/Header.jsx";
import Footer from "../components/Footer/Footer.jsx";
import Botao3 from "../components/Botao/Botao3.jsx";

export default function Login() {

    const navigate = useNavigate();

    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    const [alerta, setAlerta] = useState('');

    async function realizarLogin() {

        let retorno = await fetch('https://apps-api-livros.ucxocw.easypanel.host/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                email: email,
                senha: senha,
            })
        });

        retorno = await retorno.json();

        if (retorno.token) {

            setAlerta('Login realizado com sucesso!');

            localStorage.setItem('token', retorno.token);
            localStorage.setItem('usuario_nome', retorno.usuario.nome);
            localStorage.setItem('usuario_email', retorno.usuario.email);
            localStorage.setItem('usuario_id', retorno.usuario.id);

            navigate("/catalogo"); // 🔥 redireciona para catálogo

        } else {
            setAlerta('Email ou senha incorretos');
        }
    }

    useEffect(() => {
        let token = localStorage.getItem('token');
        if (token) {
            let nome = localStorage.getItem('usuario_nome');
            setAlerta(`Olá ${nome}, você já está logado`);
        }
    }, []);

    return (
        <>
            <Header />

            <CaixaForm acao={"Login"} titulo={"Login"}>

                <Link className="btn btn-outline-secondary btn-sm mb-3" to="/">
                    ← Voltar
                </Link>

                <Input
                    label="Email"
                    type="email"
                    placeholder="Digite seu email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />

                <Input
                    label="Senha"
                    type="password"
                    placeholder="Digite sua senha"
                    value={senha}
                    onChange={(e) => setSenha(e.target.value)}
                />

                <Botao3
                    conteudo={"Login"}
                    onClick={realizarLogin}
                />

                <p>{alerta}</p>

                <Link className="btn" to="/cadastro">
                    Fazer Cadastro
                </Link>

            </CaixaForm>

            <Footer />
        </>
    )
}