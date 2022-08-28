import React, { useState } from 'react'
import Todo from './Todo'

function TodoList({ todos, setTodos, filteredTodos, saveLocalTodos }) {

  return (
    <div className='todo-container'>
      <ul className='todo-list'>
        {filteredTodos.map((todo) => (
          <Todo
            key={todo.id}
            text={todo.text}
            todos={todos}
            todo={todo}
            setTodos={setTodos}
            saveLocalTodos={saveLocalTodos}
          />
        ))}

      </ul>

    </div>
  )
}

export default TodoList