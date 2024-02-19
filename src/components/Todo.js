import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPenToSquare } from '@fortawesome/free-solid-svg-icons'
import { faTrash } from '@fortawesome/free-solid-svg-icons'


const Todo = ({ task, toggleComplete, deleteTodo }) => {
    return (
        <div className='Todo'>
            <div className={`${task.completed ? "completed" : ""}`}>
                <p onClick={() => { toggleComplete(task.id) }}> {task.task}</p>
            </div>
            <div>
                <FontAwesomeIcon className="edit-icon" icon={faPenToSquare} />
                <FontAwesomeIcon className="trash-icon" icon={faTrash} onClick={() => { deleteTodo(task.id) }} />
            </div>
        </div>

    )
}

export default Todo