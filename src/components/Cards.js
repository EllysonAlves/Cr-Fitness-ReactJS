import Styles from "../components/Cards.module.css"

function Cards({imagem,titulo,desc}){
    return(
        <div className={Styles.card}>
            <div className={Styles.img}>
                <img src={imagem} alt={titulo} />
            </div>
            <h3>{titulo}</h3>
            <p>{desc}</p>
        </div>
    )   
}

export default Cards