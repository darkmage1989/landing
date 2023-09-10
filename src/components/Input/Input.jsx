import style from './Input.module.css'
function Input({placeholder}) {
  return (
    <div className={style.input__box}>
      <input type="text" placeholder={placeholder} />
    </div>
  );
}

export default Input;
