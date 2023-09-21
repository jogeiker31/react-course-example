import { createContext, useState } from "react";

export const taskContext = createContext();
export function TaskContextProvider(props) {
  const [tasks, settasks] = useState([]);
  const createTask = (title, description) => {
    const newTask = {
      title,
      id: tasks.length,
      description: description,
    };
    settasks([...tasks, newTask]);
  };

  const deleteTask = (id) => {
    settasks(tasks.filter((task) => task.id != id));
  };

  return (
    <taskContext.Provider
      value={{
        tasks,
        deleteTask,
        createTask,
      }}
    >
      {props.children}
    </taskContext.Provider>
  );
}
