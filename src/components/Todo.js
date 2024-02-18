import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPenToSquare } from '@fortawesome/free-solid-svg-icons'
import { faTrash } from '@fortawesome/free-solid-svg-icons'


const Todo = ({ task }) => {
    return (
        <div className='Todo'>
            <p>{task.task}</p>
            <div>
                <FontAwesomeIcon className="edit-icon" icon={faPenToSquare} />
                <FontAwesomeIcon className="trash-icon" icon={faTrash} />
            </div>
        </div>

    )
}

export default Todo