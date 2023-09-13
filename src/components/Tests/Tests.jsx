import PlusSvg from "../IconsSvg/PlusSvg";
import InputCastom from "../InputCastom/InputCastom";
import Line from "../Line/Line";
import Select from "../Select/Select";
import SmartBlock from "../SmartBlock/SmartBlock";
import style from "./Tests.module.css";

function Tests() {
  return (
    <section className={style.tests__block}>
      <SmartBlock
        title={"Варианты и тесты"}
        text={
          "Наша платформа имеет 4 способа генерации тестов – это покрывает любые сценарии создания вариантов как лично учеником, так и преподавателем. Наш интерфейс безумно удобен и дружелюбен."
        }
      />
      <article className={style.inputs__box}>
        <InputCastom
          label={"Название варианта"}
          value={"Решение линии 1-6 по математике|"}
        />
        <h3 className={style.tests__title}>Задания</h3>
        <InputCastom
        border={'#C1C0C6'}
          label={"Генерация"}
          value={"По конкретной линии задач"}
        />
        <div className={style.select__box}>
          <Select value={"Раздел"} />
          <Select value={"Часть"} />
          <Select value={"Линия"} />
        </div>
        <span className={style.tests__text}>
          Укажите количество заданий для каждой выбранной темы по указанной
          линии.
        </span>
        <div className={style.line__box}>
          <Line />
          <Line />
          <Line />
          <button className={style.tests__button}>
            <PlusSvg/>
            Сгенерировать
          </button>
        </div>
      </article>
    </section>
  );
}

export default Tests;
