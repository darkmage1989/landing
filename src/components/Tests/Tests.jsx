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
        <InputCastom.Grey
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
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
            >
              <path
                d="M12 2C10.0222 2 8.08879 2.58649 6.4443 3.6853C4.79981 4.78412 3.51809 6.3459 2.76121 8.17317C2.00433 10.0004 1.8063 12.0111 2.19215 13.9509C2.578 15.8907 3.53041 17.6725 4.92894 19.0711C6.32746 20.4696 8.10929 21.422 10.0491 21.8079C11.9889 22.1937 13.9996 21.9957 15.8268 21.2388C17.6541 20.4819 19.2159 19.2002 20.3147 17.5557C21.4135 15.9112 22 13.9778 22 12C22 10.6868 21.7413 9.38642 21.2388 8.17317C20.7363 6.95991 19.9997 5.85752 19.0711 4.92893C18.1425 4.00035 17.0401 3.26375 15.8268 2.7612C14.6136 2.25866 13.3132 2 12 2ZM12 20C10.4178 20 8.87104 19.5308 7.55544 18.6518C6.23985 17.7727 5.21447 16.5233 4.60897 15.0615C4.00347 13.5997 3.84504 11.9911 4.15372 10.4393C4.4624 8.88743 5.22433 7.46197 6.34315 6.34315C7.46197 5.22433 8.88743 4.4624 10.4393 4.15372C11.9911 3.84504 13.5997 4.00346 15.0615 4.60896C16.5233 5.21447 17.7727 6.23984 18.6518 7.55544C19.5308 8.87103 20 10.4177 20 12C20 14.1217 19.1572 16.1566 17.6569 17.6569C16.1566 19.1571 14.1217 20 12 20ZM16 11H13V8C13 7.73478 12.8946 7.48043 12.7071 7.29289C12.5196 7.10536 12.2652 7 12 7C11.7348 7 11.4804 7.10536 11.2929 7.29289C11.1054 7.48043 11 7.73478 11 8V11H8C7.73479 11 7.48043 11.1054 7.2929 11.2929C7.10536 11.4804 7 11.7348 7 12C7 12.2652 7.10536 12.5196 7.2929 12.7071C7.48043 12.8946 7.73479 13 8 13H11V16C11 16.2652 11.1054 16.5196 11.2929 16.7071C11.4804 16.8946 11.7348 17 12 17C12.2652 17 12.5196 16.8946 12.7071 16.7071C12.8946 16.5196 13 16.2652 13 16V13H16C16.2652 13 16.5196 12.8946 16.7071 12.7071C16.8946 12.5196 17 12.2652 17 12C17 11.7348 16.8946 11.4804 16.7071 11.2929C16.5196 11.1054 16.2652 11 16 11Z"
                fill="#302A3E"
              />
            </svg>{" "}
            Сгенерировать
          </button>
        </div>
      </article>
    </section>
  );
}

export default Tests;