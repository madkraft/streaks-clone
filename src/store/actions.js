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

const addTask = state => {
  if (state.tasks.length === state.tasksLimit) {
    return
  }

  const newTask = {
    id: state.tasks.length,
    name: 'New',
    isDone: false,
    goalTimes: 1,
    currentTimes: 0
  }

  return { tasks: [...state.tasks, newTask] }
}

const actions = store => ({
  increment,
  addTask
})

export default actions
