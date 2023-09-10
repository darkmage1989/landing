import Button from "../Button/Button";
import Input from "../Input/Input";
import InputPassword from "../InputPassword/InputPassword";
import style from "./RegistrationBox.module.css";
function RegistrationBox() {
  return (
    <article className={style.registration__Box}>
      <h3 className={style.registration__title}>
        Регистрируйся, чтобы начать обучение
      </h3>
      <form className={style.registration__form} action="#">
        <Input placeholder={'Телефон или Email'}/>
        <InputPassword placeholder={'Пароль'}/> 
        <InputPassword placeholder={'Подтверждение пароля'}/>
        <Button.Black button text={"Зарегистрироваться"} />
      </form>
      <span className={style.registration__text}>
        Нажимая «Зарегистрироваться», вы принимаете пользовательское соглашение,
        публичную оферту и согласие на обработку персональных данных
      </span>
    </article>
  );
}

export default RegistrationBox;
