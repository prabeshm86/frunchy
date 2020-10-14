import React, { Component } from "react";
import data from "../data/fooditem.json";

 
class Fooditemlist extends Component {
    state={
        search:"",
        search_id:"",
    }

    updateSearch=e=>{
        // console.log(e.target.value);
        this.setState({search:e.target.value})
    };
    updateselectSearch=e=>{
        this.setState({search_id:e.target.value})
    };
  render() {
      let filtereditems=data.filter(
          (food)=>{
              return food.name.toLowerCase().indexOf(this.state.search.toLowerCase())!==-1;
          }
      );
    return (
      <div>
        <h2>STUFF</h2>
        <input type="text" label="Search" icon="search" onChange={this.updateSearch.bind(this)}  />
        <select onChange={this.updateselectSearch.bind(this)}>
            <option value='1'>MoMo</option>
            <option value='2'>Chowmin</option>
        </select>
        <ol>
            {filtereditems.map((item,index)=>
            {
                return  <li key={item.id}>{item.name}</li>
            })}
         
         
        </ol>
      </div>
    );
  }
}
 
export default Fooditemlist;