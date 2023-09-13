import style from './Button.module.css'
function Button({img, text, mod}) {
    return ( <><button className={`${style.button} ${mod ? style[mod] : ''}`} >{img}{text}</button></> );
}
export default Button;
// style={{background: mod, color: textMod, borderColor: borderMod}}