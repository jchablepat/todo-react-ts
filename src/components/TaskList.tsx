import { Task } from "./Task"

type Props = {
    taskLists : string[],
    deleteTask: (index : number) => void
}

export const TaskList = ({ taskLists, deleteTask }: Props) => {
  return (
    <div className="taskList">
        {
            taskLists.map((task, index) => (
                <Task key={index} task={task} deleteTask={() => deleteTask(index) } />
            ))
        }
    </div>
  )
}