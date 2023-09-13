import style from "./Reference.module.css";
import BackSvg from "../IconsSvg/BackSvg";
import ShareSvg from "../IconsSvg/ShareSvg";
import CommentsSvg from "../IconsSvg/CommentsSvg";
import BookSvg from "../IconsSvg/BookSvg";
function Reference() {
  return (
    <>
      <div className={style.reference__head}>
        <div className={style.reference__nav}>
          <BackSvg />
          <span>Умный справочник</span>
        </div>

        <div className={style.reference__social}>
          <ShareSvg />
          <div className={style.reference__comments}>
            <CommentsSvg />
            <p className={style.reference__comments__number}>3</p>
          </div>
        </div>
      </div>
      <div className={style.reference__data__box}>
        <div className={style.reference__theme__box}>
          <span>Тема: Прокариоты</span>
          <span>Раздел: Одноклеточные организмы</span>
        </div>
        <h2 className={style.reference__title}>
          ПРОКАРИОТЫ: Бактерии и цианобактерии
        </h2>
        <div className={style.reference__learn__container}>
          <div className={style.reference__learn__tag__box}>
            <BookSvg />
            <span className={style.reference__learn__tag}>Статья №552</span>
          </div>
          <div className={style.reference__learn__box}>
            <span className={style.reference__learn}>Не изучено</span>
          </div>
        </div>
        <h3 className={style.reference__subTitle}>
          Cтроение и общая информация
        </h3>
        <span className={style.reference__text}>
          Бактерии — это прокариоты. У них нет ядра, нет мембранных органоидов.
          У некоторых видов бактерий вместо мембранных органоидов имеются
          впячивания мембраны. Они позволяют увеличить поверхность мембраны. Их
          функции:
        </span>
        <ul className={style.reference__text}>
          <li>Удерживают нуклеоид в цитоплазме</li>
          <li>Контролируют процесс деления</li>
          <li>Содержат ферменты для синтеза АТФ</li>
          <li>
            Осуществляют фотосинтез у цианобактерий (синезелёные водоросли —
            прокариоты)
          </li>
        </ul>
        <img
          className={style.reference__img}
          src="images/image_84.jpg"
          alt="image_84.jpg"
        />
      </div>
    </>
  );
}

export default Reference;
