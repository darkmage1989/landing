import style from './InputCastom.module.css'
function InputCastom({label, value, border}) {
    return ( <div className={style.input__castom} style={{borderColor: border}}>
        <label className={style.placeholder} htmlFor="inputCastom">{label}</label>
        <input className={style.input} id="inputCastom" type="text" value={value} />
    </div> );
}
export default InputCastom;