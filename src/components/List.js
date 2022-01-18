import React from "react";

const List = ({ todos, setTodos }) => {
  return (
    <div>
      {todos.map((todo) => {
        <li className="todo-list" key={todo.id}>
          <input type="text" value={todo.title} />
        </li>;
      })}
    </div>
  );
};

export default List;
