import useLocationStorage from '../hooks/useLocationStorage'

function CustomHookExample2() {
  const [task, setTask] = useLocationStorage('task', '')
  const [tasks, setTasks] = useLocationStorage('tasks', [])

  const onSubmit = (e) => {
    e.preventDefault()
    const taskObj = {
      task,
      completed: false,
      date: new Date().toLocaleDateString(),
    }

    setTasks([...tasks, taskObj])
  }

  return (
    <div>
      <form onSubmit={onSubmit} className='w-50'>
        <div className='mb-3'>
          <label className='form-label'>Task</label>
          <input className='form-control' type='text' value={task} onChange={(e) => setTask(e.target.value)} />
        </div>
        <button type='submit' className='btn btn-primary'>
          Submit
        </button>
      </form>

      <hr />
      {tasks.map((task) => (
        <h3 key={task.date}>{task.task}</h3>
      ))}
    </div>
  )
}
export default CustomHookExample2
