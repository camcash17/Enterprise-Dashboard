import React from 'react';

//form to list each category as well as provide editing functionality and a delele button
const Category = (props) => {
    return (
        <div className="categories">
            <div>
                <input
                    name="brand_name"
                    onChange={(event) => props.handleCategoryChange(event, props.index)}
                    onBlur={() => props.updateCategory(props.index)}
                    value={props.brand_name} />
            </div>

            <div>
                <button
                    onClick={() => props.deleteCategory(props.id, props.index)}>
                    Delete
                </button>
            </div>
            {/* <hr /> */}
        </div>
    )
}
 
export default Category;