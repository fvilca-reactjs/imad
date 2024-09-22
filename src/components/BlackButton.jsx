import "../scss/componentes/button_black.scss";
import "../scss/componentes/button_red.scss";
import pdf from './../images/Brochure.pdf';

export function BlackButton({ button_title, color, click }) {
    ////////////////////////////////////////////////
    return (
        <>
            <button className="bbutton-main"
                type='submit'
                onClick={click}
                style={{ backgroundColor: { color } }} >
                {button_title}
            </button>
        </>
    );
}


export function RedButton({ button_title, color, click }) {
    ////////////////////////////////////////////////
    return (
        <>
            <a className="rbutton-main"
                href={pdf}
                // download='Resume'
                target="blank"
            >
                {button_title}
            </a>
        </>
    );
}
