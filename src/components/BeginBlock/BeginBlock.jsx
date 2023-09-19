import Button from "../Button/Button";
import BeginSvg from "../IconsSvg/BeginSvg";
import VkSvg from "../IconsSvg/VkSvg";
import style from "./BeginBlock.module.css";
function BeginBlock() {
  return (
    <section className={style.begin__block}>
      <article className={style.begin__text__box}>
        <span className={style.text__rotate}>Дерзай</span>
        <h3 className={style.begin__title}>
          Начни <br /> подготовку <br /> прямо сейчас!
        </h3>
        <span className={style.begin__text}>
          Это бесплатно и точно тебе понравится.
        </span>
        <div className={style.buttons__box}>
          <Button mod={"blue"} img={<VkSvg />} text={"Войти через VK ID"} />
          <Button text={"Войти"} mod={'enter'} />
        </div>
      </article>
      <article>
        <BeginSvg/>
      </article>
    </section>
  );
}

export default BeginBlock;
