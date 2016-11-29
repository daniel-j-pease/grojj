import React, { Component } from 'react';
import './EditItem.css';

class EditItem extends Component {

  render(){
    return(
      <div id="editItemDiv">
        <h2 id="editItemHeading">Let's add an item!</h2>
          <div className="fillOut">
            <input onChange={this.props.trackEditItem} className="name" type="text" placeholder="Name of item" required></input>
            <input onChange={this.props.trackEditItem} className="itemU" type="text" placeholder="Link to image of your item" required></input>
          <div className="smallLocations">
            <select onChange={this.props.trackEditItem} name="condi" className="condi">
              <option value="" defaultValue disabled>Select Condition</option>
              <option value="Used">Used</option>
              <option value="BarelyUsed">Barely Used</option>
              <option value="New">New</option>
            </select>
            <select onChange={this.props.trackEditItem} name="price" id="price">
              <option value="" defaultValue disabled>Select Price Bracket</option>
              <option value="One">$</option>
              <option value="Two">$$</option>
              <option value="Three">$$$</option>
            </select>
          </div>
          <input onChange={this.props.trackEditItem} id="desc" type="text" placeholder="Brief description of your item" required></input>
          <div className="createOrCancel">
            <button onClick={this.props.putEditItem} id="editItemButton">Edit Item</button>
            <button onClick={this.props.hideEditItem} id="cancelItemButton">Cancel</button>
          </div>
        </div>
      </div>
    )
  }
}

export default EditItem;
