import { h, Component } from 'preact'
import style from './style'
import { Connect } from 'redux-zero/preact'
import actions from '../../store/actions'

import TaskList from '../../components/task-list'
import Button from '../../components/button'
import Takeover from '../../components/takeover'

const mapToProps = ({ tasks, tasksLimit, isAddTaskOpen }) => ({ tasks, tasksLimit, isAddTaskOpen })

export default class Home extends Component {
  state = {
    newTask: {
      id: null,
      name: '',
      isDone: false,
      goalTimes: 1,
      currentTimes: 0
    }
  }

  onChange = e => {
    if (!e.target.value) {
      return
    }

    this.setState({
      newTask: {
        ...this.state.newTask,
        name: e.target.value,
        id: Date.now()
      }
    })
  }

  onTimesChange = e => {
    this.setState({
      newTask: {
        ...this.state.newTask,
        goalTimes: +e.target.value
      }
    })
  }

  addNewTask = (closeTakeover, addTask) => {
    if (this.state.newTask.name) {
      addTask(this.state.newTask)
      this.setState({
        newTask: {
          ...this.state.newTask,
          name: ''
        }
      })
    }
    closeTakeover()
  }

  render(props, state) {
    return (
      <Connect mapToProps={mapToProps} actions={actions}>
        {({
          tasks,
          tasksLimit,
          isAddTaskOpen,
          increment,
          openTakeover,
          closeTakeover,
          addTask
        }) => (
          <div class={style.home}>
            <TaskList tasks={tasks} onTaskClick={increment} />

            {tasks.length < tasksLimit ? <Button onClick={() => openTakeover()}>Add</Button> : null}

            {isAddTaskOpen ? (
              <Takeover
                title="Add new"
                footerButton="Add"
                leftHeaderButton="Close"
                onLeftHeaderBtnClick={() => closeTakeover()}
                onFooterBtnClick={() => this.addNewTask(closeTakeover, addTask)}
              >
                <input
                  placeholder="new task"
                  value={state.newTask.name}
                  onChange={this.onChange}
                  onBlur={this.onChange}
                />
                <input
                  placeholder="times"
                  value={state.newTask.goalTimes}
                  onChange={this.onTimesChange}
                  onBlur={this.onTimesChange}
                />
              </Takeover>
            ) : null}
          </div>
        )}
      </Connect>
    )
  }
}
