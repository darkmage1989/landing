import style from './Button.module.css'
function Button({img, text, mod, height}) {
    return ( <button className={`${style.button} ${mod ? style[mod] : ''}`} >{img}{text}</button> );
}
export default Button;