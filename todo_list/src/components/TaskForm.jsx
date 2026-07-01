import './TaskForm.css'
import { useState } from 'react';

function TaskForm(props) {

    const [taskName, setTaskName] = useState('');
    const [taskNotes, setTaskNotes] = useState('');
    const [taskDate, setTaskDate] = useState('');

    function onSubmit(e) {

        e.preventDefault();

        props.onSubmit({
            name : taskName,
            notes : taskNotes,
            date : taskDate
        });

        setTaskName('');
        setTaskNotes('');
        setTaskDate('');
    
    }

    return (
        <form id="taskForm" onSubmit={onSubmit}>
            <div id="taskFormName">
                <label>Task</label>
                <input type="text" required value={taskName} onChange={(e) => setTaskName(e.target.value)}></input>
            </div>
            <div id="taskFormNotes">
                <label>Notes</label>
                <textarea type="text" placeholder="Optional" value={taskNotes} onChange={(e) => setTaskNotes(e.target.value)}></textarea>
            </div>
            <div id="taskFormDate">
                <label>Due Date</label>
                <input type="date" required value={taskDate} onChange={(e) => setTaskDate(e.target.value)}></input>
            </div>
            <button type="submit">Add Task</button>
        </form>
    )
}

export default TaskForm;