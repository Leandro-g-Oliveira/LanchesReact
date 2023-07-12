import styles from "./Select.module.css";
function Select ({nome, item, padrao, change}) {
  
  return(
    <select className={styles.select} name={nome} onChange={(e)=>change(e.target.value)}>
      <option disabled selected>{padrao}</option>
      {item.map((val)=>(
        <option value={val}>{val}</option>
      ))}
    </select>
  );
}
export default Select;