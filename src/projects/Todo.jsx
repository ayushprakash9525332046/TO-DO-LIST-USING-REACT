import { useState } from "react";
import "./Todo.css";
import { TodoForm } from "./TodoForm";
import { TodoList } from "./TodoList";
import { TodoDate } from "./TodoDate";
import { getLocalStorageData,setLocalStorageData } from "./TodoLocalStorage";

export const Todo = () => {
  const [task, setTask] = useState(()=>getLocalStorageData());


  const [dateTime, setDateTime] = useState("");

  const handleFormSubmit = (inputValue) => {
    const { id, content, checked } = inputValue;

    if (!content) return;

    const ifTodoContentMethod = task.find(
      (curTask) => curTask.content === content
    );
    if (ifTodoContentMethod) return;

    setTask((prev) => [...prev, { id, content, checked }]);
  };
  // todo add data to local storage
     setLocalStorageData(task);



// to handleDeleteTodo function 
  const handleDeleteTodo = (value) => {
    const updatedTask = task.filter((curTask) => curTask.id !== value);
    setTask(updatedTask);
  };


  const handleClickedTodo = (id) => {
    const updatedTask = task.map((curTask) => {
      if (curTask.id === id) {
        return { ...curTask, checked: !curTask.checked };
      } else {
        return curTask;
      }
    });
    setTask(updatedTask);
  };

  const handleClearButtonTodoData = () => {
    setTask([]);
  };

  return (
    <section className="todo-container">
      <header className="header">
        <h1>To-do-List</h1>
        <TodoDate />
      </header>

      <TodoForm onAddTodo={handleFormSubmit} />

      <section className="myUnOrdList">
        <ul className="todo-list">
          {task.map((item) => (
            <TodoList
              key={item.id}
              id={item.id}
              data={item.content}
              checked={item.checked}
              onHandleDeleteTodo={handleDeleteTodo}
              onHandleClickedTodo={handleClickedTodo}
            />
          ))}
        </ul>
      </section>

      <section className="clear-btn" onClick={handleClearButtonTodoData}>
        clear all
      </section>
    </section>
  );
};
