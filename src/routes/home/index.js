import { h, Component } from 'preact'
import style from './style'

import TaskList from '../../components/task-list'
import { Connect } from 'redux-zero/preact'
import actions from '../../store/actions'
const mapToProps = ({ tasks, tasksLimit }) => ({ tasks, tasksLimit })

export default class Home extends Component {
  render() {
    return (
      <Connect mapToProps={mapToProps} actions={actions}>
        {({ tasks, tasksLimit, increment, addTask }) => (
          <div class={style.home}>
            <TaskList tasks={tasks} onTaskClick={increment} />
            {tasks.length < tasksLimit ? <button onClick={addTask}>Add task</button> : null}
          </div>
        )}
      </Connect>
    )
  }
}
