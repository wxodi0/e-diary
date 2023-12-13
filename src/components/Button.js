import "./Button.css";


const Button  = ({text,type,onClick}) => {
    const btnType = ["positive","negative"].includes(type) ? type : "defualt";
    
    const click = () =>{
        onClick();
    }


    return (
        <button
            onClick={click}
            className={["Button",`Button_${btnType}`].join(" ")}
        >
            {text}
        </button>
    )
}


Button.defaultProps = {
    type: "defualt",
}

export default Button;