function TodoItem(props) {

    return (
        <div>
            <h2>{props.name}</h2>
            <p>{props.date}</p>
            {props.notes ? props.notes.map(note =>
              <li>{note}</li> 
            ) : <p>no notes</p>}
        </div>

    )

}


export default TodoItem;