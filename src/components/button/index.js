import { h, Component } from 'preact'
import style from './style'

const Button = ({ onClick, children }) => {
  return (
    <div class={style.buttonWrapper}>
      <button class={style.Button} onClick={onClick}>
        {children}
      </button>
    </div>
  )
}

export default Button
