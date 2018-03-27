import React, { Component } from 'react';

class InventoryNewForm extends Component {
    constructor(props){
        super(props);
        this.state = {
            newInventory: {}
        }
    }

    //method to set the state of new inventory from user input
    handleChange= (event) => {
        const attributeToChange = event.target.name;
        const newValue = event.target.value;

        const updatedNewInventory = {...this.state.newInventory}
        updatedNewInventory[attributeToChange] = newValue;
        this.setState({ newInventory: updatedNewInventory });
    }

    //method to call the create inventory method and pass it the new state
    handleSubmit = (event) => {
        event.preventDefault()
    
        this.props.createInventory(this.state.newInventory)
    }
    
    //form for the user to create new inventory
    render() { 
        return ( 
            <div>
                <h2>Create New Inventory Item</h2>

                <form onSubmit={this.handleSubmit}>
                    <div>
                        <label htmlFor="brand_name">Name</label>
                        <input
                            name="brand_name"
                            type="text"
                            onChange={this.handleChange} />
                    </div>

                    <div>
                        <label htmlFor="count">Count</label>
                        <input
                            name="count"
                            type="number"
                            onChange={this.handleChange} />
                    </div>

                    <div>
                        <label htmlFor="category_id">Category</label>
                        <select name="category_id" value={this.props.category_id} onChange={this.handleChange}>
                            {this.props.categories.map((category, i) => {
                                return (
                                    <option key={i} value={category.id}>{category.brand_name}</option>
                                )
                            })}
                        </select>
                    </div>
                    
                    <div>
                        <input type="submit" value="Create Inventory Item"/>
                    </div>
                </form>

                <hr />
                <hr />
            </div>
         )
    }
}
 
export default InventoryNewForm;