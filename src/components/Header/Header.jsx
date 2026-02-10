import css from "./Header.module.css"

export default function Header() {
    return (
        <header className={css.fundoHeader + " " + "nav"}>
            <div className="container">
                <div className="row">
                    <div className="col-md-12 d-flex justify-content-between align-items-center">


                        <div className={css.logo}>
                            <img className={"mt-1"} src="/icone_livro.png" alt="Logo Book Plus" />
                            <h1>BOOK MINUS</h1>
                        </div>

                        <nav>
                            <a href="#">CATÁLOGOS</a>
                            <a href="#">LANÇAMENTOS</a>
                            <a href="#">MAIS VENDIDOS</a>
                            <button className={css.loginadmbtn}>LOGIN ADMIN</button>
                        </nav>

                    </div>
                </div>
            </div>
        </header>
    )
}
