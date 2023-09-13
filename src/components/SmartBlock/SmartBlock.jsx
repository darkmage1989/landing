import Button from "../Button/Button";
import style from './SmartBlock.module.css'

function SmartBlock({title, text}) {
    return ( <article className={style.smart__block}>
        <h3 className={style.smart__title}>{title}</h3>
        <span className={style.smart__text}>{text}</span>
        <Button mod={'black'} text={'Зарегистрироваться бесплатно'}/>
    </article> );
}

export default SmartBlock;