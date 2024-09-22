import "../scss/componentes/button.scss";
import MenuIcon from '../images/MenuIcon.svg'
import CloseIcon from '../images/CloseIcon.svg'


export default function MenuButton({ click, active}) {

    /*********************/
    
    return (
        <>
            <div className="menu-button" onClick={click}>
               { active ?  <img src={CloseIcon} alt="menu"  width={40}/>: <img src={MenuIcon} alt="menu" width={40} />}
            </div>
        </>
    );
}
