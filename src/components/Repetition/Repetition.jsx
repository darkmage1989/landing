import FlippedConteinerSvg from "../IconsSvg/FlippedConteinerSvg";
import RepetitionPage from "../RepetitionPage/RepetitionPage";
import SmartBlock from "../SmartBlock/SmartBlock";
import style from "./Repetition.module.css";

function Repetition() {
  return (
    <section className={style.repetition__block}>
      <article className={style.repetition__pages__block}>
        <RepetitionPage
          color={"#F4BE9A99"}
          title={"Модульные уравнения"}
          headText={"Мой набор"}
        />
        <div className={style.repetition__text__box}>
          <span className={style.repetition__text}>Повторение — </span>
          <span className={style.repetition__text_short}>мать учения</span>
          <RepetitionPage
            color={"#B3D4E4CC"}
            title={"Сердечно-сосудистая система"}
            icon={<FlippedConteinerSvg />}
            headText={"Умный справочник"}
          />
        </div>
      </article>
      <SmartBlock
        title={"Модульные уравнения"}
        text={
          "Система интервального повторения, которая позволит тебе запоминать миллиарды терминов/правил без особых усилий. Основана на новейших исследованиях памяти."
        }
      />
    </section>
  );
}

export default Repetition;
