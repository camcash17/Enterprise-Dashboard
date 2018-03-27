import React, {Component} from 'react';
import {Bar, Pie} from 'react-chartjs-2';

class Chart extends Component{
  constructor(props){
    super(props);
    this.state = {
      inventoryData:props.inventoryData,
      categoryData:props.categoryData
    }
  }

  //more default chart layout data
  static defaultProps = {
    displayTitle:true,
    displayLegend: true,
    legendPosition:'right'
  }

  //Choosing to display a bar and pie chart with same data laid out separately/
  render(){
    return (
      <div>
      {this.state.inventoryData ?
        <Bar
          data={this.state.inventoryData}
          options={{
            title:{
              display:this.props.displayTitle,
              text:'Inventory Counts',
              fontSize:25
            },
            legend:{
              display:this.props.displayLegend,
              position:this.props.legendPosition
            }
          }}
        /> : null }

        {this.state.inventoryData ? 
        <Pie
          data={this.state.inventoryData}
          options={{
            title:{
              display:this.props.displayTitle,
              text:'Inventory Counts',
              fontSize:25
            },
            legend:{
              display:this.props.displayLegend,
              position:this.props.legendPosition
            }
          }}
        /> : null }

      </div>
    )
  }
}

export default Chart;