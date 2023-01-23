import React from 'react';
import './App.css';
export const Task = (props) => {
    return (
        <div className="task-line">
          <h4 className="task-name">{props.taskName}</h4>
          <button className="delete-button" onClick={() => props.deleteTask(props.id)}>Delete</button>
        </div>
      );
}
