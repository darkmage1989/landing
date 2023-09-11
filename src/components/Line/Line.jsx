import style from "./Line.module.css";
function Line({ label, value }) {
  return (
    <div className={style.line__box}>
      <div className={style.line__name__box}>
        <button className={style.button}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="17"
            viewBox="0 0 16 17"
            fill="none"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M9.00033 3.35352C9.00033 2.80123 8.55261 2.35352 8.00033 2.35352C7.44804 2.35352 7.00033 2.80123 7.00033 3.35352V7.85352H2.66699C2.11471 7.85352 1.66699 8.30123 1.66699 8.85352C1.66699 9.4058 2.11471 9.85352 2.66699 9.85352H7.00033V14.0202C7.00033 14.5725 7.44804 15.0202 8.00033 15.0202C8.55261 15.0202 9.00033 14.5725 9.00033 14.0202V9.85352H13.3337C13.8859 9.85352 14.3337 9.4058 14.3337 8.85352C14.3337 8.30123 13.8859 7.85352 13.3337 7.85352H9.00033V3.35352Z"
              fill="#302A3E"
            />
          </svg>
        </button>
        <span className={style.line__text}>1 линия</span>
      </div>
      <div className={style.numbers__box}>
        <span className={style.numbers}>14</span>
      </div>
    </div>
  );
}

export default Line;