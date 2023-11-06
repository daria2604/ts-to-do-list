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
    <li className={`todo-item ${!complete ? '' : 'todo-item__completed'}`}>
      <label
        htmlFor='todoItem'
        className={`todo-item__wrap ${
          complete ? 'todo-item__wrap_completed' : ''
        }`}
      >
        <input
          type='checkbox'
          id='todoItem'
          defaultChecked={complete}
          className='visually-hidden'
          onChange={() => toggleTodo(id)}
        />
        <span className='todo-item__checkbox'></span>
        {title}
      </label>

      <button
        type='button'
        className='todo-item__button'
        onClick={() => removeTodo(id)}
      >
        &times;
      </button>
    </li>
  );
};

export default TodoItem;
