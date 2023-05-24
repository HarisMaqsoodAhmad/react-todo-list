import React from "react";

const SingleItem = ({item, deleteTodo, toggleTodo}) => {
    return(
        <li key={item.id}>
            <label>
            <input type="checkbox" checked={item.completed} onChange={e => toggleTodo(item.id, e.target.checked) } /> {item.title}
            </label>
            <button className="btn btn-danger" onClick={() => deleteTodo(item.id)}>Delete</button>
        </li>
    )
}

export default SingleItem;