import Styles from "./Oferta.module.css"
function Oferta(){
    return(
        <div className={Styles.oferta}>
            <h1><p>A MELHOR</p><span>OFERTA</span>PARA O VERÃO<span>!!</span></h1>
            <div className={Styles.btn}>
                <button>FAÇA PARTE</button>
            </div>
        </div>
    )
}

export default Oferta