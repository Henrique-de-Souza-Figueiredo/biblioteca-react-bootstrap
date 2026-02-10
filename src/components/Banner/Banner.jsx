import css from "./Banner.module.css";

export default function Banner() {
    return (
        <section className={css.banner}>
            <div className={"container"}>
                <span className={css.coisinha}>CURADORIA EXCLUSIVA</span>

                <h1 className={css.titulo}>
                   <span className={"d-block"}> Descubra seu </span>  <span className={css.degradeTexto}>próximo capítulo.</span>
                </h1>

                <p className={css.subtitulo}>
                    Mergulhe em histórias que transformam. Explore nossa seleção
                    premium de obras clássicas e contemporâneas.
                </p>
            </div>
        </section>
    );
}
