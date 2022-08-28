import React from 'react'

function Form({ setInputText, setTodos, todos, inputText,setStatus }) {

    const inputTextHandler = (e) => {
        setInputText(e.target.value);
    }

    const submitTodo = (e) => {
        e.preventDefault();
        if (inputText === "") {
            return;
        }
        setTodos([...todos,
        {
            text: inputText,
            completed: false,
            id: todos.length + 1
        }]);
        setInputText("");
    }

    const statusHandler = (e) => {
        setStatus(e.target.value);
    }


    return (
        <form>
            <input placeholder='What needs to be done'  value={inputText} onChange={inputTextHandler} type="text" className='todo-input' />
            <button onClick={submitTodo} type="submit" className='todo-button'>
                <i className='fas fa-plus-square'></i>
            </button>
            <div className='select'>
                <select onChange={statusHandler} name='todos' className='filter-todo'>
                    <option value='all'>All</option>
                    <option value='completed'>Completed</option>
                    <option value='uncompleted'>Uncompleted</option>
                </select>
            </div>
        </form>
    )
}

export default Form;