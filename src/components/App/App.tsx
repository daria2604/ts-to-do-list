import React, { useEffect, useRef, useState } from 'react';
import { ITodo } from '../../types/data';
import TodoList from '../TodoList/TodoList';

const App: React.FC = () => {
  const [value, setValue] = useState('');
  const [todoList, setTodoList] = useState<ITodo[]>([]);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  const handleChange: React.ChangeEventHandler<HTMLInputElement> = (evt) => {
    setValue(evt.target.value);
  };

  const handleEnter: React.KeyboardEventHandler<HTMLInputElement> = (evt) => {
    if (evt.key === 'Enter') {
      addTodo();
    }
  };

  const addTodo = () => {
    if (value) {
      setTodoList([
        ...todoList,
        {
          id: Date.now(),
          title: value,
          complete: false,
        },
      ]);
      setValue('');
    }
  };

  const removeTodo = (id: number): void => {
    setTodoList(todoList.filter((todo) => todo.id !== id));
  };

  const toggleTodo = (id: number): void => {
    setTodoList(
      todoList.map((todo) => {
        if (todo.id !== id) return todo;

        return {
          ...todo,
          complete: !todo.complete,
        };
      })
    );
  };

  return (
    <div className='page'>
      <div className='input'>
        <input
          type='text'
          className='input__text'
          placeholder='Add new task'
          value={value}
          onChange={handleChange}
          onKeyDown={handleEnter}
          ref={inputRef}
        />
        <button type='submit' className='input__button' onClick={addTodo}>
          Add
        </button>
      </div>
      <TodoList
        items={todoList}
        removeTodo={removeTodo}
        toggleTodo={toggleTodo}
      />
    </div>
  );
};

export default App;
