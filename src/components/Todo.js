import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPenToSquare } from '@fortawesome/free-solid-svg-icons'
import { faSquareCheck } from '@fortawesome/free-solid-svg-icons';
import { faTrash } from '@fortawesome/free-solid-svg-icons'


const Todo = ({ task, toggleComplete, deleteTodo, editTodo }) => {
    return (
        <div className='Todo'>
            <div className={`${task.completed ? "completed" : ""}`}>
                <p onClick={() => editTodo(task.id)} > {task.task}</p>
            </div>
            <div>
                <FontAwesomeIcon className="edit-icon" icon={faPenToSquare} onClick={() => editTodo(task.id)} />
                <FontAwesomeIcon className="check-icon" icon={faSquareCheck} onClick={() => { toggleComplete(task.id) }} />
                <FontAwesomeIcon className="trash-icon" icon={faTrash} onClick={() => { deleteTodo(task.id) }} />
            </div>
        </div>

    )
}

export default Todo