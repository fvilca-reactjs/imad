import "../scss/componentes/button_black.scss";


export default function BlackButton({ button_title, color, click }) {
    ////////////////////////////////////////////////
    return (
        <>
            <button  className="bbutton-main"
            onClick={click}
            style={{backgroundColor:{color}}} >
                {button_title}
            </button>
        </>
    );
}
