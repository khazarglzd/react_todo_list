import React, { useState } from 'react'

const TodoForm = ({ addTodo }) => {

    const [inputText, setInputText] = useState("")

    const inputHandler = (e) => {
        setInputText(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        addTodo(inputText)
        setInputText("")
    }

    console.log(inputText)
    return (
        <form className='TodoForm' onSubmit={handleSubmit}>
            <input className='todo-input' type="text"
                placeholder='What is the task for today?'
                value={inputText}
                onChange={inputHandler}
            />
            <button className="todo-btn" type='submit'>Add task</button>
        </form>
    )
}

export default TodoForm