import EnterBox from "../EnterBox/EnterBox";
import RegistrationBox from "../RegistrationBox/RegistrationBox";
import style from "./Head.module.css";

function Head() {
  return (
    <section className={style.head__box}>
      <EnterBox />
      <RegistrationBox />
      <img src="./fonts/image__enter.svg" alt="image__enter.svg" />
    </section>
  );
}

export default Head;
