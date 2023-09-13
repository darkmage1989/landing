import EnterBox from "../EnterBox/EnterBox";
import YouLIkeitSvg from "../IconsSvg/YouLIkeitSvg";
import RegistrationBox from "../RegistrationBox/RegistrationBox";
import style from "./Head.module.css";

function Head() {
  return (
    <section className={style.head__box}>
      <EnterBox />
      <RegistrationBox />
      <YouLIkeitSvg/>
    </section>
  );
}

export default Head;
