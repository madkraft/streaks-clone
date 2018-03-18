import { h, Component } from 'preact'

const ProgressCircle = ({ progress, onClick, isDone, children }) => {
  const overlayColor = isDone ? 'progress-circle__overlay--done' : ''

  return (
    <div class="progress-circle" data-progress={progress} onClick={onClick}>
      <div class="circle">
        <div class="full progress-circle__slice">
          <div class="progress-circle__fill" />
        </div>
        <div class="progress-circle__slice">
          <div class="progress-circle__fill" />
          <div class="progress-circle__fill progress-circle__bar" />
        </div>
      </div>
      <div class={`progress-circle__overlay ${overlayColor}`}>{children}</div>
    </div>
  )
}

export default ProgressCircle
