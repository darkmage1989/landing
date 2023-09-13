import LinePlusSvg from "../IconsSvg/LinePlusSvg";
import style from "./Line.module.css";
function Line({ label, value }) {
  return (
    <div className={style.line__box}>
      <div className={style.line__name__box}>
        <button className={style.button}>
          <LinePlusSvg />
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
