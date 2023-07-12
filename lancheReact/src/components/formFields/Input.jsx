
import styles from "./Input.module.css";
function Input ({ type, name, ident }) {
  
  return (
    <div className={styles.inputField}>
      <input type={type} name={name} id={ident} required/>
      <label for={ident}>{ident}</label>
    </div> 
  );
}
export default Input;