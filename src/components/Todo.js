import React, { useState } from 'react'

const Todo = ({ text, todo, todos, setTodos, saveLocalTodos }) => {

    const [isEditing, setIsEditing] = useState(false);
    const [todoText, setTodoText] = useState(text);
    const deleteHandler = () => {
        setTodos(todos.filter(item => item.id !== todo.id));
    }

    const completeHandler = () => {
        setTodos(todos.map(item => {
            if (item.id === todo.id) {
                return {
                    ...item,
                    completed: !item.completed
                }
            }
            return item;
        }))
    }

    const saveChanges = () => {
        setTodos(todos.map(item => {
            if (item.id === todo.id) {
                return {
                    ...item,
                    text: todoText
                }
            }
            return item;
        }))
        setIsEditing(false);
    }

    return (
        <div className='todo'>
            <li className={`todo-item ${todo.completed ? "completed" : ""}`}>
                {isEditing ? (
                    <div>
                        <input type='text' value={todoText} onChange={(e) => setTodoText(e.target.value)} />
                        <button onClick={saveChanges}>Save</button>
                    </div>
                ) : (
                    <span>{todoText}</span>
                )}
            </li>
            <div className='buttons'>
                <button onClick={completeHandler} className='complete-btn'>
                    <i className="fas fa-check"></i>
                </button>
                <button onClick={() => { setIsEditing(true) }} className='edit-btn'>
                    <i className="fas fa-edit"></i>
                </button>
                <button onClick={deleteHandler} className='trash-btn'>
                    <i className="fas fa-trash-alt"></i>
                </button>
            </div>
        </div>
    )
}

export default Todo