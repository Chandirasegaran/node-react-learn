import styles from "./Calc_Button.module.css"

export const Calc_Button = (props) => {
  return (
    <div>
      <button className={styles[props.clsName]} onClick={() => props.onClick(props.btnValue)}>
        {props.btnValue}
      </button>
    </div>
  )
}
