import React, { useEffect, useRef, useState } from 'react';
import { ITodo } from '../../types/data';
import TodoList from '../TodoList/TodoList';
import AddButton from '../AddButton/AddButton';
import CloseButton from '../CloseButton/CloseButton';

const App: React.FC = () => {
  const [value, setValue] = useState('');
  const [todoList, setTodoList] = useState<ITodo[]>([]);
  const [isOpen, setIsOpen] = useState(false);
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
      setIsOpen(false);
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

  const handleOpenInput = () => {
    setIsOpen(true);
  };

  const handleCloseInput = () => {
    setIsOpen(false);
  };

  return (
    <div className='page'>
      <h1 className='heading'>My Tasks</h1>
      <div className={`input ${isOpen ? 'input_open' : ''}`}>
        <CloseButton onClick={handleCloseInput} />
        <input
          type='text'
          className='input__text'
          placeholder='Add new task'
          value={value}
          onChange={handleChange}
          onKeyDown={handleEnter}
          ref={inputRef}
        />
        <button
          type='submit'
          className='input__button'
          onClick={addTodo}
        ></button>
      </div>
      <TodoList
        items={todoList}
        removeTodo={removeTodo}
        toggleTodo={toggleTodo}
      />
      <AddButton onClick={handleOpenInput} />
    </div>
  );
};

export default App;
