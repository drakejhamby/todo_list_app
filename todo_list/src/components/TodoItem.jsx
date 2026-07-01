import './TodoItem.css';
//import taskForm from './TaskForm';

function TodoItem(props) {

    var today = new Date()
    var dueDate = new Date(props.date)

    function daysBetween(a,b) {
        return Math.round((b-a)/86400000)
    }

    

    return (
        <article className="todo-item">
            <div className="todo-item-header">
                <h3 className="todo-item-title">{props.name}</h3>
                {props.date && <p className="todo-item-date">Due {props.date}</p>}
            </div>
            {props.notes && <p className="todo-item-notes">{props.notes}</p>}
            <p>{daysBetween(dueDate, today)}</p>
            <button>Done</button>
            <button>Delete</button>
        </article>

    )

}


export default TodoItem;