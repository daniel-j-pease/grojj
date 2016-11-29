import React, { Component } from 'react';
import './CreateStore.css';

class CreateStore extends Component {

  hideStoreButton() {
    let createStoreDiv = document.querySelector('#createStoreDiv');
    createStoreDiv.style.display = 'none';
  }

  render(){
    return(
      <div id="createStoreDiv">
        <h4 id="createStoreHeading">Let's set up a garage sale! </h4>
          <input onChange={this.props.trackCreateStore} className="name" type="text" placeholder="Name of garage sale" required></input>
          <input onChange={this.props.trackCreateStore} className="address" type="text" placeholder="Street address" required></input>
        <div className="smallLocations">
          <select onChange={this.props.trackCreateStore} name="borough" className="borough">
            <option value="" disabled>Select Borough</option>
            <option value="Brooklyn">Brooklyn</option>
            <option value="Bronx">Bronx</option>
            <option value="Manhattan">Manhattan</option>
            <option value="Queens">Queens</option>
            <option value="Staten Island">Staten Island</option>
          </select>
          <input onChange={this.props.trackCreateStore} className="zip" type="text" placeholder="ZIP" required></input>
        </div>
          <input onChange={this.props.trackCreateStore} id="directions" type="text" placeholder="Directions (optional)"></input>
          <input onChange={this.props.trackCreateStore} id="date" type="date" min="2016-11-25"></input>
        <div id="startEnd">
          <input onChange={this.props.trackCreateStore} id="startTime" type="time"></input>
          <input onChange={this.props.trackCreateStore} id="endTime" type="time"></input>
        </div>
        <div className="createOrCancel">
          <button onClick={this.props.postNewStorefront} id="createStoreButton">Create Garage Sale</button>
          <button onClick={this.hideStoreButton} id="cancelStoreButton">Cancel</button>
        </div>
    </div>
    )
  }
}

export default CreateStore;
