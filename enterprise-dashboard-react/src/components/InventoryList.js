import React, { Component } from "react";
import axios from "axios";
import Inventory from "./Inventory";
import InventoryNewForm from "./InventoryNewForm";

class InventoryList extends Component {
  constructor(props){
    super(props);
    this.state = {
      inventory: props.inventory,
      categories: props.categories
    }
  }

  //method to delete inventory
  deleteInventory = async (inventoryId, index) => {
    try {
      await axios.delete(`/inventory/${inventoryId}`);
      const updatedInventoryList = [...this.state.inventory];
      updatedInventoryList.splice(index, 1);
      this.setState({ inventory: updatedInventoryList });
    } catch (error) {
      console.log(`Error deleting Inventory with ID of ${inventoryId}`);
      console.log(error);
    }
  };

  //method to create new inventory
  createInventory = async (inventory, index) => {
    console.log('create', inventory)
    try {
      const newInventoryResponse = await axios.post(`/inventory`, inventory);

      const updatedInventoryList = [...this.state.inventory];
      updatedInventoryList.push(newInventoryResponse.data);
      this.setState({ inventory: updatedInventoryList });
    } catch (error) {
      console.log("Error creating new Inventory!");
      console.log(error);
    }
  };

  //method to update exisiting inventory
  updateInventory = async index => {
    console.log('state', this.state.inventory[index])
    try {
      const inventoryToUpdate = this.state.inventory[index];
      await axios.patch(`/inventory/${inventoryToUpdate.id}`, inventoryToUpdate);
      console.log('Updated Inventory!');
    } catch (error) {
      console.log("Error updating Inventory!");
      console.log(error);
    }
  };

  //method to set the state of user input for inventory edit
  handleInventoryChange = (event, index) => {
    console.log('event name', event.target.value)
    const attributeToChange = event.target.name;
    const newValue = event.target.value;

    const updatedInventoryList = [...this.state.inventory];
    const inventoryToUpdate = updatedInventoryList[index];
    inventoryToUpdate[attributeToChange] = newValue;

    this.setState({ inventory: updatedInventoryList });
  };
  
  //method to set the state of user input for inventory edit specifically for Category ID
  handleCategoryChange = async (event, index) => {
    const attributeToChange = event.target.name;
    const newValue = event.target.value;

    const updatedInventoryList = [...this.state.inventory];
    const inventoryToUpdate = updatedInventoryList[index];
    inventoryToUpdate[attributeToChange] = newValue;

    this.setState({ inventory: updatedInventoryList });
    try {
      const inventoryToUpdate = this.state.inventory[index];
      await axios.patch(`/inventory/${inventoryToUpdate.id}`, inventoryToUpdate);
      console.log('Updated Inventory!');
    } catch (error) {
      console.log("Error updating Inventory!");
      console.log(error);
    }

  }

  //rendering inventory component mapping over inventory and passing down state/method props
  render() {
    return (
      <div>
        <h1>Inventory</h1>
        <InventoryNewForm createInventory={this.createInventory} categories={this.state.categories} />
        {this.state.inventory.map((inventory, index) => {
          return (
            <div>
              {this.state.inventory && this.state.categories ?
              <Inventory
                {...inventory}
                key={index}
                index={index}
                deleteInventory={this.deleteInventory}
                handleInventoryChange={this.handleInventoryChange}
                updateInventory={this.updateInventory}
                handleCategoryChange={this.handleCategoryChange}
                categories={this.state.categories}
              /> : null}
            </div>
          );
        })}
      </div>
    );
  }
}

export default InventoryList;