import React, { Component } from 'react';
import './App.css';
import InventoryList from './components/InventoryList';
import CategoryList from './components/CategoryList';
import Chart from './components/Chart';
import axios from "axios";


class App extends Component {
  constructor(){
    super();
    this.state = {}
  }

  //making calls to the database to set state of inventory and categories and set chart data
  componentDidMount() {
    let labels;
    let count;
    axios.get("/inventory")
    .then(function (response) {
      // console.log('response', response.data)
      labels = response.data.map((inventory, index) => {
        return (
          inventory.brand_name
        )
      });
      count = response.data.map((inventory, index) => {
        return (
          inventory.count
        )
      })
      this.setState({
        inventory: response.data,
        inventoryData:{
          labels: labels,
          datasets:[
            {
              label:'Units',
              data: count,
              backgroundColor:[
                'rgba(255, 99, 132, 0.6)',
                'rgba(54, 162, 235, 0.6)',
                'rgba(255, 206, 86, 0.6)',
                'rgba(75, 192, 192, 0.6)',
                'rgba(153, 102, 255, 0.6)',
                'rgba(255, 159, 64, 0.6)',
                'rgba(88, 172, 201, 0.6)',
                'rgba(255, 99, 132, 0.6)',
                'rgba(54, 162, 235, 0.6)',
                'rgba(255, 206, 86, 0.6)',
                'rgba(75, 192, 192, 0.6)',
                'rgba(153, 102, 255, 0.6)',
                'rgba(255, 159, 64, 0.6)',
                'rgba(88, 172, 201, 0.6)',
              ]
            }
          ]
        },
      })
    }.bind(this))
    .catch(function (error) {
      console.log("Error retrieving inventory");
      console.log(error);
    });
    axios.get("/categories")
    .then(function (response) {
      // console.log('response', response.data)
      this.setState({
        categories: response.data,
      })
    }.bind(this))
    .catch(function (error) {
      console.log("Error retrieving categories");
      console.log(error);
    });
  }

  //rendering separate components and passing down state props
  render() {
    // console.log('inventoryData state', this.state.inventoryData)
    // console.log('app state of inventory', this.state.inventory)
    return (
      <div className="App">
        {this.state.inventoryData ? 
        <Chart inventoryData={this.state.inventoryData} categoryData={this.state.categoryData} legendPosition="bottom"/> : null }
        <div className="lists">
          {this.state.categories ?
          <CategoryList categories={this.state.categories} /> : null }
          {this.state.inventory && this.state.categories ?
          <InventoryList inventory={this.state.inventory} categories={this.state.categories} /> : null }
        </div>
      </div>
    );
  }
}

export default App;

