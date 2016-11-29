import React, { Component } from 'react';
import './EditStore.css';

class EditStore extends Component {

  render(){
    return(
      <div id="editStoreDiv">
        <h3 id="editStoreHeading">Edit your garage sale</h3>
          <input onChange={this.props.trackEditStore} className="name" type="text" value={this.props.currentStorefront.name} required></input>
          <input onChange={this.props.trackEditStore} className="address" type="text" value={this.props.currentStorefront.address} required></input>
        <div className="smallLocations">
          <select onChange={this.props.trackEditStore} name="borough" className="borough" value={this.props.currentStorefront.borough}>
            <option value="" disabled>Select Borough</option>
            <option value="Brooklyn">Brooklyn</option>
            <option value="Queens">Queens</option>
            <option value="Bronx">Bronx</option>
            <option value="Manhattan">Manhattan</option>
            <option value="Staten Island">Staten Island</option>
          </select>
          <input onChange={this.props.trackEditStore} className="zip" type="text" value={this.props.currentStorefront.zip} required></input>
        </div>
          <input onChange={this.props.trackEditStore} id="directions" type="text" value={this.props.currentStorefront.directions}></input>
          <input onChange={this.props.trackEditStore} id="date" type="date" min="2016-11-25"></input>
        <div id="startEnd">
          <input onChange={this.props.trackEditStore} id="startTime" type="time"></input>
          <input onChange={this.props.trackEditStore} id="endTime" type="time"></input>
        </div>
        <div className="editOrCancel">
          <button onClick={this.props.putEditStorefront} id="editStoreButton">Edit Garage Sale</button>
          <button onClick={this.props.hideEditForm} id="editStoreButton">Cancel</button>
        </div>
    </div>
    )
  }
}

export default EditStore;
