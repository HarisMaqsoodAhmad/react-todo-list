import React from "react";
import SingleItem from "./SingleItem";

const ItemList = (props) => {
    return (
        <ul className="list">
            {props.itemList.map( item => {
            return (
                <SingleItem item={item} toggleTodo={props.toggleTodo} deleteTodo={props.deleteTodo} />
            )
            })}
        </ul>
    )
}

export default ItemList;