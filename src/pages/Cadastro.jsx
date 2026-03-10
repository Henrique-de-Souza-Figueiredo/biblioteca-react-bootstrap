import CaixaForm from "../components/CaixaForm/CaixaForm.jsx";
import {Link} from "react-router-dom";
import Input from "../components/Input/Input.jsx";
import Header from "../components/Header/Header.jsx";
import Footer from "../components/Footer/Footer.jsx";

export default function Login() {
    return (
        <>

        <Header />

        <CaixaForm acao={"Cadastar"} titulo={"Cadastro"}>

            <Link className="btn btn-outline-secondary btn-sm mb-3" to="/">
                ← Voltar
            </Link>

            <Input
                label="Nome"
                type="text"
                placeholder="Digite seu nome"
            />

            <Input
                label="Email"
                type="email"
                placeholder="Digite seu email"
            />

            <Input
                label="Senha"
                type="password"
                placeholder="Digite sua senha"
            />

            <Link className="btn" to="/login">Fazer Login</Link>

        </CaixaForm>

    <Footer />
        </>
    )
}