import Button from "../Button/Button";
import ArrowSvg from "../IconsSvg/ArrowSvg";
import ConteinerSvg from "../IconsSvg/ConteinerSvg";
import Logo from "../Logo/Logo";
import style from "./Header.module.css";
function Header() {
  return (
    <header className={style.header}>
      <nav className={style.header__nav}>
        <Logo/>
        <a className={style.header__link} href="#/">
          Предметы
        </a>
        <a href="#/">Теория</a>
        <a href="#/">Повторение</a>
        <a href="#/">Тесты</a>
      </nav>
      <div className={style.header__button__box}>
        <Button
          img={
           <ConteinerSvg/>
          }
          text={"В Банк заданий"}
        />
        <ArrowSvg/>
        <span className={style.button__box__text}>без регистрации</span>
      </div>
    </header>
  );
}

export default Header;
