import React from 'react'
import { ReactComponent as TimesSolid } from './times-solid.svg'

const TodoList = () => {
  const todos = [{ id: 1, text: 'item', completed: false }]

  return (
    <ul className="todo-list">
      {todos.map((todo) => (
        <li key={todo.id}>
          <div className="view">
            <div className="segment Label">
              <input
                className="toggle"
                type="checkbox"
                checked={todo.completed}
              />
              <div className="todo-text">{todo.text}</div>
            </div>
            <select className="colorPicker" value="">
              <option value=""></option>
              <option value="red">Red</option>
            </select>
            <button className="destroy">
              <TimesSolid />
            </button>
          </div>
        </li>
      ))}
    </ul>
  )
}

export default TodoList
