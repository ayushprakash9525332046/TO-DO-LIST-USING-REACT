import { MdCheck, MdDelete } from "react-icons/md";

export const TodoList = ({
  id,
  data,
  checked,
  onHandleDeleteTodo,
  onHandleClickedTodo,
}) => {
  return (
    <li className="todo-item">
      <span className={checked ? "checkList" : "unCheckedList"}>{data}</span>

      <button className="check-btn" onClick={() => onHandleClickedTodo(id)}>
        <MdCheck />
      </button>

      <button className="delete-btn" onClick={() => onHandleDeleteTodo(id)}>
        <MdDelete />
      </button>
    </li>
  );
};
