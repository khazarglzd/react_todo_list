import React, { useState } from 'react'
import Todo from './Todo'
import TodoForm from './TodoForm'

const TodoWrapper = () => {

    const [todos, setTodos] = useState([])

    const addTodo = (todo) => {
        setTodos([...todos, { id: Math.random(), completed: false, isEditing: false, task: todo }])

    }
    console.log(todos)

    return (
        <div className='TodoWrapper'>
            <h1>Get Things Done !</h1>
            <TodoForm addTodo={addTodo} />
            {todos.map((todo, index) => {
                return (
                    <Todo task={todo} key={index} />
                )
            })}
        </div>
    )
}

export default TodoWrapper