import React from 'react';
import { ITodo } from '../../types/data';

interface ITodoItem extends ITodo {
  removeTodo: (id: number) => void;
  toggleTodo: (id: number) => void;
}

const TodoItem: React.FC<ITodoItem> = ({
  id,
  title,
  complete,
  removeTodo,
  toggleTodo,
}) => {
  return (
    <li>
      <input
        type='checkbox'
        defaultChecked={complete}
        className='todoItem'
        onChange={() => toggleTodo(id)}
      />
      {title}
      <button
        type='button'
        className='todoItem__button'
        onClick={() => removeTodo(id)}
      >
        &times;
      </button>
    </li>
  );
};

export default TodoItem;
