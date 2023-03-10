import Logo from '../assets/logo1.png'
import Styles from './Nav.module.css'

function Nav(){
    return(
        <div className={Styles.TxtNav} >
            <img src={Logo} alt="logo" />


            <div className={Styles.navegacao}>
                <div className={Styles.linhas}>
                    <div className={Styles.linha1} ></div>
                    <div className={Styles.linha2} ></div>
                    <div className={Styles.linha3} ></div>
                </div>
                <ul >
                    <li><a href="#top" >HOME</a></li>
                    <li><a href="#top" >SERVIÇOS</a></li>
                    <li><a href="#top" >OFERTAS</a></li>
                    <li><a href="#top" >SOBRE</a></li>
                    <li><a href="#top" >CONTATO</a></li>
                </ul>
            </div>
            
        </div>
    )
}

export default Nav