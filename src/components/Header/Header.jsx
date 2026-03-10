import css from "./Header.module.css"
import {Link} from "react-router-dom";

export default function Header() {
    return (
        <header className={css.fundoHeader + " nav"}>
            <div className="container">
                <div className="row">
                    <div className="col-md-12 d-flex justify-content-between align-items-center">

                        <div className={css.logo}>
                            <img className="mt-1" src="/icone_livro.png" alt="Logo Book Plus" />
                            <h1>BOOK MINUS</h1>
                        </div>

                        <input type="checkbox" id="menu-toggle" className={css.menuToggle} />

                        <label htmlFor="menu-toggle" className={css.hamburger}>
                            <span></span>
                            <span></span>
                            <span></span>
                        </label>

                        <nav className={css.menu}>
                            <Link to={"/"}>CATALOGOS</Link>
                            <Link to={"/"}>LANÇAMENTOS</Link>
                            <Link to={"/"}>MAIS VENDIDOS</Link>
                            <Link to={"/cadastro"}>CADASTRO</Link>
                            <Link className={css.loginadmbtn} to="/login">LOGIN</Link>
                        </nav>

                    </div>
                </div>
            </div>
        </header>
    )
}