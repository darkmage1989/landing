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
            icon={
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="19"
                height="19"
                viewBox="0 0 19 19"
                fill="none"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M6.93169 3.49996C6.2459 3.42071 5.62571 3.91241 5.54646 4.5982L4.75628 11.4359C5.15085 11.2885 5.58531 11.2298 6.03244 11.2815L13.8968 12.1903L14.796 4.40878L6.93169 3.49996ZM15.3008 13.1076L16.2957 4.49819C16.3855 3.72096 15.8282 3.01808 15.051 2.92826L7.10389 2.00988C5.59515 1.83552 4.23073 2.91726 4.05638 4.426L2.98493 13.6976C2.81058 15.2064 3.89231 16.5708 5.40105 16.7451L13.3482 17.6635C14.1254 17.7533 14.8283 17.1961 14.9181 16.4189L15.3008 13.1076ZM13.7246 13.6804L5.86025 12.7716C5.17445 12.6923 4.55426 13.184 4.47501 13.8698C4.39576 14.5556 4.88746 15.1758 5.57325 15.2551L13.4376 16.1639L13.7246 13.6804ZM7.21461 6.13318C7.26216 5.72171 7.63427 5.42669 8.04575 5.47424L12.0193 5.93343C12.4308 5.98098 12.7258 6.35309 12.6782 6.76457C12.6307 7.17604 12.2586 7.47106 11.8471 7.42351L7.87355 6.96432C7.46208 6.91677 7.16706 6.54466 7.21461 6.13318ZM8.30953 8.27302C8.35708 7.86155 8.7292 7.56653 9.14067 7.61408L10.4652 7.76714C10.8767 7.81469 11.1717 8.18681 11.1241 8.59828C11.0766 9.00976 10.7045 9.30478 10.293 9.25723L8.96847 9.10416C8.557 9.05661 8.26198 8.6845 8.30953 8.27302Z"
                  fill="#302A3E"
                />
              </svg>
            }
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
