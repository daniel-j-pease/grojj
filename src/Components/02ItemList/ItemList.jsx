import React, { Component } from 'react';
import './ItemList.css';
import Item from '../02Item/Item.jsx';

class ItemList extends Component{
  renderItems(){
    return this.props.items.map((item, index) =>
      <Item
        likeFunc={this.props.likeFunc}
        name={item.name}
        url={item.url}
        description={item.description}
        price={item.price}
        condition={item.condition}
        likes={item.likes}
        id={item.id}
        key={index}
      />
    )
  }
}

render(){
  return(
    <div className="rightDiv">
    THIS IS ITEM LIST
      {this.renderItems()}
    </div>
  )
}

export default ItemList;
