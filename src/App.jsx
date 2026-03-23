import {BrowserRouter, Link, Route, Routes} from "react-router-dom";
import Home from "./pages/Home.jsx";
import Login from "./pages/Login.jsx";
import Cadastro from "./pages/Cadastro.jsx";
import Catalogo from "./pages/Catalogo.jsx";
import Detalhes from "./pages/Detalhes.jsx";
import CadastroLivro from "./pages/CadastroLivro.jsx";


export default function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/login" element={<Login />} />
                <Route path="/cadastro" element={<Cadastro />} />
                <Route path="/catalogo" element={<Catalogo />} />
                <Route path="/detalhes/:id" element={<Detalhes />} />
                <Route path="/cadastroLivro" element={<CadastroLivro />} />


            </Routes>
        </BrowserRouter>
    )
}