import React, { Component } from 'react';
import MyItem from '../02MyItem/MyItem.jsx'
import './MyItemList.css';

export default class MyItemList extends Component{

  revealUploadForm() {
    let uploadForm = document.querySelector('#addItemDiv');
    uploadForm.style.display = 'block';
  }

  renderItems() {
    return this.props.storefrontItems.map((item, i) =>
      <div key={item.item_id}>
        <MyItem
          name={item.name}
          url={item.image_url}
          condition={item.condition}
          price={item.price}
          description={item.description}
          likes={item.likes}
        />
      </div>
    )
  }

  render(){
    return(
      <div className="rightDiv">
        <h3>Click button to sell items!</h3>
        <button id="addItemButton" onClick={this.revealUploadForm}>Add item!</button>
        <div id="itemListDiv">
          {this.renderItems()}
        </div>
      </div>
    )
  }
}
