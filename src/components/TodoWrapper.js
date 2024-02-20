import React, { useState } from 'react'
import Todo from './Todo'
import TodoForm from './TodoForm'
import { EditTodoForm } from './EditTodoForm';

const TodoWrapper = () => {

    const [todos, setTodos] = useState([])

    const addTodo = (todo) => {
        setTodos([...todos, { id: Math.random(), completed: false, isEditing: false, task: todo }])

    }

    const toggleComplete = id => {
        setTodos(todos.map(todo => todo.id === id ? { ...todo, completed: !todo.completed } : todo))
    }

    const deleteTodo = (id) => setTodos(todos.filter((todo) => todo.id !== id));


    const editTodo = (id) => {
        setTodos(
            todos.map((todo) =>
                todo.id === id ? { ...todo, isEditing: !todo.isEditing } : todo
            )
        );
    }

    const editTask = (task, id) => {
        setTodos(
            todos.map((todo) =>
                todo.id === id ? { ...todo, task, isEditing: !todo.isEditing } : todo
            )
        );
    };

    console.log(todos.length)

    return (
        <div className="TodoWrapper">
            <h1>My Todo List!</h1>
            <TodoForm addTodo={addTodo} />
            {todos.length > 0 ? todos.map((todo) =>
                todo.isEditing ? (
                    <EditTodoForm editTodo={editTask} task={todo} />
                ) : (
                    <Todo
                        key={todo.id}
                        task={todo}
                        deleteTodo={deleteTodo}
                        editTodo={editTodo}
                        toggleComplete={toggleComplete}
                    />
                )
            ) : <h4> There are no todos for to do today :)</h4>}
        </div>
    );
};

export default TodoWrapper