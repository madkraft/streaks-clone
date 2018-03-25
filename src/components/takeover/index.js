import { h, Component } from 'preact'
import style from './style'
import Button from '../button'

const Takeover = ({
  title,
  footerButton,
  leftHeaderButton,
  onLeftHeaderBtnClick,
  onFooterBtnClick,
  children
}) => {
  return (
    <div class={style.takeoverContainer}>
      <header class={style.takeoverHeader}>
        <div class={style.headerButton}>
          <button onClick={() => onLeftHeaderBtnClick()}>{leftHeaderButton}</button>
        </div>
        <h2>{title}</h2>
        <div class={style.headerButton} />
      </header>
      <div class={style.takeoverBody}>{children}</div>
      <footer>
        <Button onClick={() => onFooterBtnClick()}>{footerButton}</Button>
      </footer>
    </div>
  )
}

export default Takeover
