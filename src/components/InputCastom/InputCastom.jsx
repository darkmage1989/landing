import style from './InputCastom.module.css'
function InputCastom({label, value}) {
    return ( <div className={style.input__castom}>
        <label className={style.placeholder} htmlFor="inputCastom">{label}</label>
        <input className={style.input} id="inputCastom" type="text" value={value} />
    </div> );
}
function InputCastomGrey({label, value}) {
    return ( <div className={style.input__castom__grey}>
        <label className={style.placeholder} htmlFor="inputCastom">{label}</label>
        <input className={style.input} id="inputCastom" type="text" value={value} />
    </div> );
}
InputCastom.Grey = InputCastomGrey
export default InputCastom;