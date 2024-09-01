import "../scss/componentes/button_vermas.scss";
import ArrowRight from '../images/ArrowRight.svg'

export default function ButtonVerMas({ click }) {
    ////////////////////////////////////////////////
    return (
            <button  className="button-vermas" 
                onClick={click}>
                <img src={ArrowRight} alt='arrow' width='20'/>
                VER MAS
            </button>
    );
}
