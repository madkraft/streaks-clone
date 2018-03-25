import createStore from 'redux-zero'
import { applyMiddleware } from 'redux-zero/middleware'
import { connect } from 'redux-zero/devtools'

const initialState = {
  tasks: [
    {
      id: 0,
      name: 'Walk 3km',
      isDone: false,
      goalTimes: 3,
      currentTimes: 0
    }
  ],
  tasksLimit: 3,
  isAddTaskOpen: false
}

const middlewares = connect ? applyMiddleware(connect(initialState)) : []

const store = createStore(initialState, middlewares)

export default store
