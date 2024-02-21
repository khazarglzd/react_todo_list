import React, { useState, useEffect } from 'react'
import Todo from './Todo'
import TodoForm from './TodoForm'
import { EditTodoForm } from './EditTodoForm';

const TodoWrapper = () => {

    const [todos, setTodos] = useState([])


    useEffect(() => {
        const savedTodos = JSON.parse(localStorage.getItem('todos')) || [];
        setTodos(savedTodos);
    }, []);

    const addTodo = (todo) => {
        const newTodos = ([...todos, { id: Math.random(), completed: false, isEditing: false, task: todo }])
        setTodos(newTodos);
        localStorage.setItem('todos', JSON.stringify(newTodos));

    }

    const toggleComplete = id => {
        const newTodos = (todos.map(todo => todo.id === id ? { ...todo, completed: !todo.completed } : todo))
        setTodos(newTodos);
        localStorage.setItem('todos', JSON.stringify(newTodos));
    }

    const deleteTodo = (id) => {
        const newTodos = (todos.filter((todo) => todo.id !== id))
        setTodos(newTodos);
        localStorage.setItem('todos', JSON.stringify(newTodos));
    };


    const editTodo = (id) => {
        setTodos(
            todos.map((todo) =>
                todo.id === id ? { ...todo, isEditing: !todo.isEditing } : todo
            )
        );
    }

    const editTask = (task, id) => {
        const newTodos = (
            todos.map((todo) =>
                todo.id === id ? { ...todo, task, isEditing: !todo.isEditing } : todo
            )
        );
        setTodos(newTodos);
        localStorage.setItem('todos', JSON.stringify(newTodos));
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