import TaskCard from './TaskCard'
import { useContext } from 'react'
import { TaskContext } from '../context/TaskContext'

function TaskList() {

  const { tasks } = useContext(TaskContext);

      if(!tasks.length) {
        return <h1 className='text-white text-4xl font-bold text-center capitalize'>No hay tareas asignadas</h1>
    }

  return (
    <div className='grid grid-cols-4 gap-2'>
        {tasks.map((task) => (
            <div key={task.id}>
                <TaskCard task={task} />
            </div>
        ))}
    </div>
  )
}

export default TaskList