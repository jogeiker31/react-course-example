import { useState } from "react";

import { useContext } from "react";

import { taskContext } from "../context/taskContext";
function taskForm() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const { createTask } = useContext(taskContext);

  const handleSubmit = (e) => {
    e.preventDefault();

    createTask(title, description);

    setTitle("");
    setDescription("");
  };

  return (
    <div className="max-w-md mx-auto">
      <form onSubmit={handleSubmit} className="bg-slate-800 p-10 mb-4 ">
        <h1 className="text-2xl text-white font-bold mb-4">Crea tu tarea</h1>
        <input
          placeholder="Escribe tu tarea"
          value={title}
          className="bg-slate-300 p-3 w-full mb-2"
          onChange={(e) => {
            setTitle(e.target.value);
          }}
        />
        <textarea
          placeholder="Escribe la descripcion de la tarea"
          value={description}
          className="bg-slate-300 p-3 w-full mb-2"
          onChange={(e) => {
            setDescription(e.target.value);
          }}
        ></textarea>
        <button
        className="bg-indigo-500 text-white p-2 rounded-md"
        >Guardar</button>
      </form>
    </div>
  );
}

export default taskForm;
