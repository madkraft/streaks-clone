import { h, Component } from 'preact'
import style from './style'
import ProgressCircle from '../progress-circle'

const Task = props => {
  const progressRatio = props.task.currentTimes / props.task.goalTimes
  const progress = progressRatio > 1 ? 100 : Math.floor(progressRatio * 100)

  return (
    <div class={style.taskContainer}>
      <ProgressCircle
        progress={progress}
        isDone={props.task.isDone}
        onClick={() => props.onTaskClick(props.task.id)}
      >
        <h2>{props.task.currentTimes}</h2>
      </ProgressCircle>

      <h3 class={style.taskName}>{props.task.name}</h3>
    </div>
  )
}

export default Task
