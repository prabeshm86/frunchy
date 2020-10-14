import React, { Component } from "react";
import data from "../data/countries.json";

 
class Countrylist extends Component {
    state={
        search:""
    }
  render() {
    let filtereditems=data.filter(
        (itemname)=>{
            return itemname.name.indexOf(this.state.search)!==-1;
        }
    );
    return (
      <div>
        <h2>STUFF</h2>
        <input label="Search" icon="search"   />
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
 
export default Countrylist;