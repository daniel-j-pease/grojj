import React, { Component } from 'react'
import './MyItem.css'


//props needed:
// name
// url
// price
// condition
// description
// likes
// id

//functions needed:
// for the edit button
// for the delete button

export default class MyItem extends Component {

  render() {
    return (
      <div className="saleItem">
        <p className="myStoreMyItems" className="myItemTitle">
          {this.props.name}
        </p>
        <img className="myStoreMyItems" className="myItemImage"
          src={this.props.image_url}>
        </img>
        <p className="myStoreMyItems" className="myItemCondition">
          {this.props.condition}
        </p>
        <p className="myStoreMyItems" className="myItemPrice">
          {this.props.price}
        </p>
        <p className="myStoreMyItems" className="myItemDescription">
          {this.props.description}
        </p>
        <p className="myStoreMyItems" className="myItemLikes">
          {this.props.likes}
        </p>
        <button onClick={this.props.putEditItem} id="editItemButton">Edit Item</button>
        <button>Delete</button>
      </div>
    );
  }
}

// export default MyItem;
