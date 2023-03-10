import Cards from "./Cards"
import Img1 from "../assets/training.png"
import Img2 from "../assets/aerobico.png"
import Img3 from "../assets/hipertrofia.png"
import Img4 from "../assets/bike.png"
import Styles from "../components/Servicos.module.css"

function Servicos(){
    return(
        <section className={Styles.servicos} >
            <div className={Styles.titulo}>
                <h2>Nossos <span>Serviços</span> exclusivos</h2>
            </div>
            <div className={Styles.boxCards}>
                <Cards imagem={Img1} titulo="Levantamento de peso" desc="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repellendus quam perferendis iure, harum et magni accusantium facilis eligendi vero tempora enim? Totam natus iure labore maxime sed rerum qui nulla." />
                <Cards imagem={Img2} titulo="Aeróbico" desc="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repellendus quam perferendis iure, harum et magni accusantium facilis eligendi vero tempora enim? Totam natus iure labore maxime sed rerum qui nulla." />
                <Cards imagem={Img3} titulo="Hipertrofia" desc="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repellendus quam perferendis iure, harum et magni accusantium facilis eligendi vero tempora enim? Totam natus iure labore maxime sed rerum qui nulla." />
                <Cards imagem={Img4} titulo="Aulas Praticas" desc="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repellendus quam perferendis iure, harum et magni accusantium facilis eligendi vero tempora enim? Totam natus iure labore maxime sed rerum qui nulla." />
            </div>
            
        </section>
    )
}

export default Servicos