import SmartBlock from "../SmartBlock/SmartBlock";
import Reference from "../Reference/Reference";
import style from "./ReferencesBlock.module.css";
function References() {
  return (
    <section className={style.references__block}>
      <article className={style.reference__smart}>
        <SmartBlock
          title={"Умные справочники"}
          text={
            "Вся нужная теория по темам ЕГЭ — на понятном языке и с дизайнерскими иллюстрациями. Идеально, чтобы создать фундамент знаний по предмету. "
          }
        />
      </article>
      <article className={style.reference}>
        <Reference/>
        </article>
      
    </section>
  );
}

export default References;
