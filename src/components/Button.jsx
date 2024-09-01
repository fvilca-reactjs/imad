import "../scss/componentes/button.scss";


export default function Button({ button_title, color, click }) {


    ////////////////////////////////////////////////
    return (
        <>
            <button  className="button-main"
            onClick={click}
            style={{backgroundColor:{color}}} >
                {button_title}
            </button>
        </>
    );
}
