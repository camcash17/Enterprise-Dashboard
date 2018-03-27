import React, { Component } from 'react';

class CategoryNewForm extends Component {
    state = {
        newCategory: {}
    }

    //method to set the state of new category from user input
    handleChange= (event) => {
        const attributeToChange = event.target.name;
        const newValue = event.target.value;

        const updatedNewCategory = {...this.state.newCategory}
        updatedNewCategory[attributeToChange] = newValue;
        this.setState({ newCategory: updatedNewCategory });
    }

    //method to call the create category method and pass it the new state
    handleSubmit = (event) => {
        event.preventDefault()
    
        this.props.createCategory(this.state.newCategory)
    }
    
    //form for the user to create new category
    render() { 
        return ( 
            <div>
                <h2>Create New Category Item</h2>

                <form onSubmit={this.handleSubmit}>
                    <div>
                        <label htmlFor="brand_name">Name</label>
                        <input
                            name="brand_name"
                            type="text"
                            onChange={this.handleChange} />
                    </div>
                    
                    <div>
                        <input type="submit" value="Create Category Item"/>
                    </div>
                </form>

                <br />
                <br />
                <hr />
                <hr />
                
            </div>
         )
    }
}
 
export default CategoryNewForm;