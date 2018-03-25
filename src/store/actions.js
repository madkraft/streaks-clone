const increment = (state, id) => {
  const newTasks = state.tasks.map(task => {
    if (task.id === id) {
      const newCurrentTimes = task.currentTimes + 1

      return {
        ...task,
        currentTimes: newCurrentTimes,
        isDone: newCurrentTimes >= task.goalTimes ? true : false
      }
    }
    return task
  })

  return { tasks: newTasks }
}

const addTask = (state, newTask) => {
  if (state.tasks.length === state.tasksLimit) {
    return
  }

  return { tasks: [...state.tasks, newTask] }
}

const openTakeover = state => {
  return { isAddTaskOpen: true }
}

const closeTakeover = state => {
  return { isAddTaskOpen: false }
}

const actions = store => ({
  increment,
  addTask,
  openTakeover,
  closeTakeover
})

export default actions
