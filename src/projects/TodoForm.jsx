import { useState } from "react";

export const TodoForm = ({ onAddTodo }) => {
  const [inputValue, setInputValue] = useState({
    id: "",
    content: "",
    checked: false,
  });

  const handleInputChange = (value) => {
    setInputValue({ id: crypto.randomUUID(), content: value, checked: false });
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    onAddTodo(inputValue);

    setInputValue({ id: "", content: "", checked: false });
  };

  return (
    <section className="form">
      <form onSubmit={handleFormSubmit}>
        <input
          type="text"
          placeholder="Enter a task"
          value={inputValue.content}
          onChange={(e) => handleInputChange(e.target.value)}
        />
        <button type="submit">Add task</button>
      </form>
    </section>
  );
};

