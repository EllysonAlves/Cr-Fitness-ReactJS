import Styles from "./Footer.module.css"
import imagem1 from "../assets/instagram.png"
import imagem2 from "../assets/whatsapp.png"

function Footer(){
    return(
        <section className={Styles.contato} >
            <div>
                <h2>FALE <span>CONOSCO</span></h2>
            </div>
            <div className={Styles.redes}>
                <div className={Styles.whats}>
                    <img src={imagem2} alt="whats"/>
                </div>
                <div className={Styles.insta}>
                    <img src={imagem1} alt="insta"/>
                </div>
                
            </div>
        </section>
    )
}

export default Footer