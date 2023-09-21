import TaskCard from "./taskCard";
import { useContext } from "react";
import { taskContext } from "../context/taskContext";
function taskList() {
  const {tasks} = useContext(taskContext);

  if (tasks.length == 0) {
    return <h1 className="text-white text-4xl font-bold text-center">No hay tareas aun</h1>;
  }

  return (
    <div className="grid grid-cols-4 gap-2">
      {tasks.map((task) => {
        return <TaskCard key={task.id} task={task} />;
      })}
    </div>
  );
}

export default taskList;
