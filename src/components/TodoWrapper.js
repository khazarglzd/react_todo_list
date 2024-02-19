import React, { useState } from 'react'
import Todo from './Todo'
import TodoForm from './TodoForm'

const TodoWrapper = () => {

    const [todos, setTodos] = useState([])

    const addTodo = (todo) => {
        setTodos([...todos, { id: Math.random(), completed: false, isEditing: false, task: todo }])

    }

    const toggleComplete = id => {
        setTodos(todos.map(todo => todo.id === id ? { ...todo, completed: !todo.completed } : todo))
    }

    return (
        <div className='TodoWrapper'>
            <h1>My Todos</h1>
            <TodoForm addTodo={addTodo} />
            {todos.map((todo, index) => {
                return (
                    <Todo task={todo} key={index} toggleComplete={toggleComplete} />
                )
            })}
        </div>
    )
}

export default TodoWrapper