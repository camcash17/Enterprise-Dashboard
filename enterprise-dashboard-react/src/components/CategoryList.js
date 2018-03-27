import React, { Component } from "react";
import axios from "axios";
import Category from "./Category";
import CategoryNewForm from "./CategoryNewForm";

class CategoryList extends Component {
  constructor(props){
    super(props);
    this.state = {
      categories: props.categories
    }
  }

  //method to delete a category
  deleteCategory = async (categoryId, index) => {
    try {
      await axios.delete(`/categories/${categoryId}`);
      const updatedCategoryList = [...this.state.categories];
      updatedCategoryList.splice(index, 1);
      this.setState({ categories: updatedCategoryList });
    } catch (error) {
      console.log(`Error deleting Category with ID of ${categoryId}`);
      console.log(error);
    }
  };

  //method to create a new category
  createCategory = async (categories, index) => {
    try {
      const newCategoryResponse = await axios.post(`/categories`, categories);

      const updatedCategoryList = [...this.state.categories];
      updatedCategoryList.push(newCategoryResponse.data);
      this.setState({ categories: updatedCategoryList });
    } catch (error) {
      console.log("Error creating new Category!");
      console.log(error);
    }
  };

  //method to update an existing category
  updateCategory = async index => {
    try {
      const categoryToUpdate = this.state.categories[index];
      await axios.patch(`/categories/${categoryToUpdate.id}`, categoryToUpdate);
      console.log('Updated Category!');
    } catch (error) {
      console.log("Error updating Category!");
      console.log(error);
    }
  };

  //method to set the state of user input for category edit
  handleCategoryChange = (event, index) => {
    const attributeToChange = event.target.name;
    const newValue = event.target.value;

    const updatedCategoryList = [...this.state.categories];
    const categoryToUpdate = updatedCategoryList[index];
    categoryToUpdate[attributeToChange] = newValue;

    this.setState({ categories: updatedCategoryList });
  };

  //rendering category component mapping over categories and passing down state/method props
  render() {
    return (
      <div>
        <h1>Categories</h1>
        <CategoryNewForm createCategory={this.createCategory} />
        {this.state.categories.map((categories, index) => {
          return (
            <Category
              {...categories}
              key={index}
              index={index}
              deleteCategory={this.deleteCategory}
              handleCategoryChange={this.handleCategoryChange}
              updateCategory={this.updateCategory}
            />
          );
        })}
      </div>
    );
  }
}

export default CategoryList;