import React, { Component } from 'react';
import './EditItem.css';

class EditItem extends Component {

  render(){
    return(
      <div id="editItemDiv">
        <h3 id="editItemHeading">Edit your item</h3>
          <input onChange={this.props.trackEditItem} className="name" type="text" value={this.props.currentStorefront.name} required></input>
          <input onChange={this.props.trackEditItem} className="address" type="text" value={this.props.currentStorefront.address} required></input>
        <div className="smallLocations">
          <select onChange={this.props.trackEditItem} name="borough" className="borough" value={this.props.currentStorefront.borough}>
            <option value="" disabled>Select Borough</option>
            <option value="Brooklyn">Brooklyn</option>
            <option value="Queens">Queens</option>
            <option value="Bronx">Bronx</option>
            <option value="Manhattan">Manhattan</option>
            <option value="Staten Island">Staten Island</option>
          </select>
          <input onChange={this.props.trackEditItem} className="zip" type="text" value={this.props.currentStorefront.zip} required></input>
        </div>
          <input onChange={this.props.trackEditItem} id="directions" type="text" value={this.props.currentStorefront.directions}></input>
          <input onChange={this.props.trackEditItem} id="date" type="date" min="2016-11-25"></input>
        <div id="startEnd">
          <input onChange={this.props.trackEditItem} id="startTime" type="time"></input>
          <input onChange={this.props.trackEditItem} id="endTime" type="time"></input>
        </div>
        <div className="editOrCancel">
          <button onClick={this.props.putEditItem} id="editStoreButton">Edit Item</button>
          <button onClick={this.props.hideEditItem} id="editStoreButton">Cancel</button>
        </div>
    </div>
    )
  }
}

export default EditItem;
