import "./Header.css"


const Header = ({title,leftChild, rightChild}) => {

    return (
        <div className="Header">
            <div className="header_leftChild">{leftChild}</div>
            <div className="header_lef">{title}</div>
            <div className="header_rightChild">{rightChild}</div>
        </div>
    )
}

export default Header;