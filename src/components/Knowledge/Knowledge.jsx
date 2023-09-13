import SelectedSvg from '../IconsSvg/SelectedSvg';
import style from './Knowledge.module.css'
function Knowledge({text,color}) {
    return ( <>
    <button className={style.knowledge} style={{background: color}}>{text}
<SelectedSvg/>
</button>
    </> );
}

export default Knowledge;