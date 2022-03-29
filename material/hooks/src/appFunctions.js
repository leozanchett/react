import React, { useState } from "react";
import NewTask from "./uteis/new-task";
import TasksList from "./uteis/task-list";

export default function AppFunction() {
   const [newTask, setTask] = useState({});
   const [allTasks, setAllTasks] = useState([]);

   const handleChange = ({ target }) => {
      const { name, value } = target;
      setTask(
         ((prev) => ({
            ...prev,
            [name]: value,
         }))
      )
   }

   const handleSubmit = (event) => {
      event.preventDefault();
      if (newTask.title) {
         setTask({
            id: Date.now(),
         })
         setAllTasks(
            ((prev) => {
               return [...prev, newTask];
            })
         )
      }
   }

   const handleDelete = (id) => {
      setAllTasks(
         ((prev) => {
            return prev.filter((task) => task.id !== id);
         })
      )
   }

   const handleCheckTasks = () => {
      console.log(allTasks);
   }

   return (
      <main>
         <h1>Tasks</h1>
         <NewTask
            newTask={newTask}
            handleChange={handleChange}
            handleSubmit={handleSubmit}
         />
         <TasksList
            allTasks={allTasks}
            handleDelete={handleDelete}
         />
         <button onClick={handleCheckTasks}>
            Check Tasks
         </button>
      </main>
   );
}
