import { h, Component } from 'preact'
import style from './style'
import Task from '../task'

const TaskList = props => {
  return (
    <div class={style.taskList}>
      {props.tasks.map(task => <Task task={task} onTaskClick={props.onTaskClick} />)}
    </div>
  )
}

export default TaskList
