import React from 'react';

//form to list each inventory as well as provide editing functionality and a delele button
const Inventory = (props) => {
    return (
        <div className="inventory">
            <div>
                <input
                    name="brand_name"
                    onChange={(event) => props.handleInventoryChange(event, props.index)}
                    onBlur={() => props.updateInventory(props.index)}
                    value={props.brand_name} />
            </div>

            <div>
                <input
                    name="count"
                    onChange={(event) => props.handleInventoryChange(event, props.index)}
                    onBlur={() => props.updateInventory(props.index)}
                    value={props.count} />
            </div>

            <div>
                <select name="category_id" value={props.category_id} onChange={(event) => props.handleCategoryChange(event, props.index)}>
                    {props.categories.map((category, i) => {
                        return (
                            <option key={i} value={category.id}>{category.brand_name}</option>
                        )
                    })}
                </select>
            </div>

            <div>
                <button
                    onClick={() => props.deleteInventory(props.id, props.index)}>
                    Delete
                </button>
            </div>
            <hr />
        </div>
    );
}
 
export default Inventory;