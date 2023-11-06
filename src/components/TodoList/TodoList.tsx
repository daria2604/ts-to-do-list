import React from 'react';
import { ITodo } from '../../types/data';
import TodoItem from '../TodoItem/TodoItem';

interface ITodoListProps {
  items: ITodo[];
  removeTodo: (id: number) => void;
  toggleTodo: (id: number) => void;
}

const TodoList: React.FC<ITodoListProps> = ({
  items,
  removeTodo,
  toggleTodo,
}) => {
  return (
    <>
      <ul className='todoList'>
        {items.map(
          (item) =>
            !item.complete && (
              <TodoItem
                key={item.id}
                {...item}
                removeTodo={removeTodo}
                toggleTodo={toggleTodo}
              />
            )
        )}
      </ul>
      {items.length !== 0 && (
        <>
          <h2 className='heading__completed'>Completed</h2>
          <ul className='todoList'>
            {items.map(
              (item) =>
                item.complete && (
                  <TodoItem
                    key={item.id}
                    {...item}
                    removeTodo={removeTodo}
                    toggleTodo={toggleTodo}
                  />
                )
            )}
          </ul>
        </>
      )}
    </>
  );
};

export default TodoList;
