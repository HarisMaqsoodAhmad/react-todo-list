import React from "react";

const NewItemForm = (props) => {
    return(
        <form className="new-item-form" onSubmit={props.handleSubmit}>
            <div className="form-row">
            <label htmlFor="item">New Item</label>
            <input type="text" name="item" id="item" value={props.newItem} onChange={e => props.setNewItem(e.target.value)} />
            </div>
            <button className="btn">Add Item</button>
        </form>
    )
}

export default NewItemForm;