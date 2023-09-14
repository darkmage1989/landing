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
        <Input placeholder={"Email"} />
        <InputPassword placeholder={"Пароль"} />
        <InputPassword placeholder={"Пароль еще раз"} />
        <Button mod={"black"} button text={"Зарегистрироваться"} />
      </form>
      <span className={style.registration__text}>
        Нажимая «Зарегистрироваться», вы выражаете согласие на обработку
        персональных данных, а также подтверждаете ознакомление и согласие с
        условиями Оферты и Политики конфиденциальности.
      </span>
    </article>
  );
}

export default RegistrationBox;
