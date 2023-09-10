import style from './Button.module.css'
function Button({img, text}) {
    return ( <><button className={style.button}>{img}{text}</button></> );
}
function Black({img, text}) {
    return ( <><button className={style.button__black}>{img}{text}</button></> );
}
function Blue({img, text}) {
    return ( <><button className={style.button__blue}>{img}{text}</button></> );
}
Button.Black = Black
Button.Blue = Blue
export default Button;