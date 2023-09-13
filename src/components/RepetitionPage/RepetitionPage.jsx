import DotMenuSvg from "../IconsSvg/DotMenuSvg";
import PlaySvg from "../IconsSvg/PlaySvg";
import style from "./RepetitionPage.module.css";
function RepetitionPage({ headText, color, title, icon }) {
  return (
    <div className={style.repetition__page}>
      <div className={style.repetition__page__content}>
        <div className={style.repetition__page__head}>
          <span
            className={style.repetition__page__head__text}
            style={{ background: color }}
          >
            {icon}
            {headText}
          </span>
         <DotMenuSvg/>
        </div>
        <h2 className={style.repetition__page__title}>{title}</h2>
        <div>
        <span className={style.repetition__page__text}>Карточек: 40</span>
          <div className={style.repetition__page__buttons__box}>
            <button className={style.repetition__page__button}>
              Открыть набор
            </button>
           <PlaySvg/>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RepetitionPage;
