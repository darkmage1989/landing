import Button from "../Button/Button";
import CrossSvg from "../IconsSvg/CrossSvg";
import SpringSvg from "../IconsSvg/SpringSvg";
import VkSvg from "../IconsSvg/VkSvg";
import style from "./EnterBox.module.css";

function EnterBox() {
  return (
    <article className={style.head__enter__box}>
      <div className={style.head__cool__box}>
        <SpringSvg />
        <span className={style.text__rotate}>Попробуй</span>
      </div>
      <h1 className={style.head__enter__title}>
        NeoFamily — умная подготовка к ЕГЭ
      </h1>

      <div className={style.head__enter__cross__box}>
        <span className={style.head__enter__text}>
          Более 30 000 заданий по всем предметам ЕГЭ. <br /> Бесплатная теория, тесты и
          умное повторение
        </span>
        <CrossSvg />
      </div>

      <div className={style.head__button__box}>
        <Button mod={"blue"} img={<VkSvg />} text={"Войти через VK ID"} />
        <Button text={"Войти"} />
      </div>
    </article>
  );
}

export default EnterBox;
