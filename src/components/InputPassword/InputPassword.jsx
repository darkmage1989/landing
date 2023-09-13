import HideSvg from '../IconsSvg/HideSvg';
import style from './InputPassword.module.css'
function InputPassword({ type, placeholder }) {
  return (
    <div className={style.input__password}>
      <input type={type} placeholder={placeholder} />
      <button type='button' className={style.button__password}><HideSvg/></button>
    </div>
  );
}

export default InputPassword;
