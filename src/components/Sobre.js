import imagem from "../assets/sobre.png"
import Styles from "./Sobre.module.css"

function Sobre(){
    return(
        <section className={Styles.sobre} >
            <div className={Styles.imagemSobre}>
                <img src={imagem} alt="foto"/>
            </div>
            <div className={Styles.textoSobre}>
                <h2>SAIBA MAIS SOBRE NÓS</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi, aspernatur quod recusandae eveniet praesentium animi reiciendis ipsam dignissimos cumque veniam maxime reprehenderit sequi rem ipsum voluptates consectetur! Modi, adipisci odio?</p>
                <div className={Styles.btn}>
                    <button>LEIA MAIS</button>
                </div>
                
            </div>
        </section>
    )
}

export default Sobre