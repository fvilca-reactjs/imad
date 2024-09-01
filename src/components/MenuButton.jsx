import "../scss/componentes/button.scss";
import MenuIcon from '../images/MenuIcon.svg'
import CloseIcon from '../images/CloseIcon.svg'


export default function MenuButton({ click, active}) {

    /*********************/
    
    return (
        <>
            <div className="menu-button" onClick={click}>
               { active ?  <img src={CloseIcon} alt="menu" />: <img src={MenuIcon} alt="menu" />}
            </div>
        </>
    );
}
