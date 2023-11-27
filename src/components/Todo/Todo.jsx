import React from 'react';
import { ReactComponent as DeleteIcon } from 'icons/delete.svg';

const Todo = ({ text, onToggleCompleted, onDelete, completed }) => {
  return (
    <>
      <input
        type="checkbox"
        className="TodoList__checkbox"
        checked={completed}
        onChange={onToggleCompleted}
      />
      <p className="TodoList__text">{text}</p>
      <button type="button" onClick={onDelete}>
        <DeleteIcon width={20} height={20} />
      </button>
    </>
  );
};
export default Todo;
