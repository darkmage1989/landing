import style from './Select.module.css'
function Select({value}) {
    return ( <>
    <select className={style.select}>
            <option>{value}</option>
          </select>
    </> );
}

export default Select;