import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import SaveMap from './Maps.jsx';
import LoginSignup from '../01LoginSignup/LoginSignup.jsx';
import Logout from '../01Logout/Logout.jsx';
import CreateStore from '../02CreateStore/CreateStore.jsx';
import StorefrontDD from '../01StorefrontDD/StorefrontDD.jsx';
import SearchDD from '../01SearchDD/SearchDD.jsx';
import AsideSMyStore from '../02AsideSmyStore/AsideSMyStore.jsx';
import EditStore from '../02EditStore/EditStore.jsx';
import MyItemList from '../02MyItemList/MyItemList.jsx';
import EditItem from '../02EditItem/EditItem.jsx'
import AddNewItem from '../02AddNewItem/AddNewItem.jsx';
import './MattApp.css';

class App extends Component {

  constructor() {
    super();

    this.state = {
      searchZip: '',
      loggedIn: false,
      currentUser: '',
      hasStorefront: false,
      currentToken: '',
      loginForm: {
        username: '',
        password: ''
      },
      signupForm: {
        username: '',
        password: ''
      },
      currentStorefront: {
        name: '',
        address: '',
        borough: '',
        directions: '',
        sale_date: '',
        endTime: '',
        startTime: '',
        zip: ''
      },
      createStorefront: {
        name: '',
        address: '',
        borough: '',
        zip: '',
        directions: '',
        sale_date: '',
        startTime: '',
        endTime: '',
      },
      editStorefront: {
        name: '',
        address: '',
        borough: '',
        zip: '',
        directions: '',
        sale_date: '',
        startTime: '',
        endTime: '',
      },
      createItem: {
        name: '',
        image_url: '',
        condition: '',
        price: '',
        description: '',
      },
      editItem: {
        name: '',
        image_url: '',
        condition: '',
        price: '',
        description: '',
      },
      storefrontItems: []
    };
  }

  showLoginSignup() {
    let loginSignup = document.querySelector('#loginSignup');
    loginSignup.style.display = 'block';
  }

  showLoginButton() {
    let loginButton = document.querySelector('#loginButton');
    loginButton.style.display = 'block';
  }

  hideLoginButton() {
    let loginButton = document.querySelector('#loginButton');
    loginButton.style.display = 'none';
  }

  showLogoutButton() {
    let logoutButton = document.querySelector('#logoutButton');
    logoutButton.style.display = 'block';
  }

  hideLogoutButton() {
    let logoutButton = document.querySelector('#logoutButton');
    logoutButton.style.display = 'none';
  }

  showAsideSMyStore() {
    let asideMyStore = document.querySelector('.leftAside');
    asideMyStore.style.display = 'block';
  }

  hideEditForm() {
    let editStoreDiv = document.querySelector('#editStoreDiv');
    editStoreDiv.style.display = 'none';
  }

  hideEditItem() {
    let editItemDiv = document.querySelector('#editItemDiv');
    editItemDiv.style.display = 'none';
  }

  hideAddItemDiv() {
    let addItemDiv = document.querySelector('#addItemDiv');
    addItemDiv.style.display = 'none';
  }

  hideLoginSignup() {
    let loginSignup = document.querySelector('#loginSignup');
    loginSignup.style.display = 'none';
  }

  hideMap() {
    let map = document.querySelector('.mapContainer')
    map.style.display = 'none';
  }

  showSearchInput() {
    let searchInput = document.querySelector('#searchInput');
    searchInput.style.display = 'block';
  }

  showEditItemDiv() {
    console.log('showing edit div')
    let editItemDiv = document.querySelector('#editItemDiv');
    editItemDiv.style.display = 'block';
  }

  relaunchLogin() {
    let loginError = document.querySelector('#loginError');
    loginError.style.display = 'none';
  }

  getOneStorefront() {
    console.log('getting one storefront')
    return fetch('/api/myStorefront', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/JSON',
        'Authorization': 'Bearer ' + this.state.currentToken
      },
      body: JSON.stringify({
        currentUser: this.state.currentUser
      })
    })
    .then(r=> r.json())
    .then((data) => {
      this.setState({
        hasStorefront: true,
        currentStorefront: {
          name: data[0].name,
          sale_date: data[0].sale_date,
          address: data[0].address,
          borough: data[0].borough,
          directions: data[0].directions,
          endTime: data[0].endtime,
          startTime: data[0].starttime,
          zip: data[0].zip,
        }
      })
    })
  }

  getStorefrontItems() {
    return fetch('/api/items', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/JSON',
        'Authorization': 'Bearer ' + this.state.currentToken
      },
      body: JSON.stringify({
        currentStorefront: this.state.currentStorefront.name
      })
    })
    .then(r=>r.json())
    .then( (data) => {
      this.setState({
        storefrontItems: data
      })
    })
  }

  removeOneStorefront() {
    return fetch('/api/storefronts', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/JSON',
        'Authorization': 'Bearer ' + this.state.currentToken
      },
      body: JSON.stringify({
        currentUser: this.state.currentUser
      })
    })
    .then(() => {
      this.setState({
        hasStorefront: false,
        storefrontItems: [],
        currentStorefront: {
          name: '',
          address: '',
          borough: '',
          directions: '',
          endTime: '',
          startTime: '',
          zip: ''
        }
      })
    })
  }

  trackLoginForm(e) {
    let fieldsArr = e.target.parentElement;
    this.setState({
      loginForm: {
        username: fieldsArr.childNodes[1].value,
        password: fieldsArr.childNodes[3].value
      }
    })
  }

  trackSignupForm(e) {
    let fieldsArr = e.target.parentElement;
    this.setState({
      signupForm: {
        username: fieldsArr.childNodes[1].value,
        password: fieldsArr.childNodes[3].value
      }
    })
  }

  postSignup() {
    return fetch('/user/signup', {
      headers: {
        'Content-Type': 'application/JSON'
      },
      method: 'POST',
      body: JSON.stringify({
        'username': this.state.signupForm.username,
        'password': this.state.signupForm.password
      })
    })
    .then(() => {
      this.setState({
        signupForm: {
          'username': '',
          'password': ''
        }
      })
    })
    .catch(error => hadasErrorHandlingFunction(error))
  }

  postLogin() {
    return fetch('/user/login', {
      headers: {
        'Content-Type': 'application/JSON'
      },
      method: 'POST',
      body: JSON.stringify({
        'username': this.state.loginForm.username,
        'password': this.state.loginForm.password
      })
    })
    .then(r => r.json())
    .then((data) => {
      this.setState({
        currentToken: data,
        loggedIn: true,
        currentUser: this.state.loginForm.username,
        loginForm: {
          'username': '',
          'password': ''
        }
      })
    })
    .then( () => {
      this.hideLoginSignup();
      this.hideLoginButton();
      this.showLogoutButton();
      this.showAsideSMyStore();
      this.getOneStorefront();
      this.hideMap();
      console.log(this.state)
    })
    .catch(error => this.loginError(error))
  }

  logout() {
    this.setState({
      loggedIn: false,
      currentToken: '',
      currentUser: '',
      hasStorefront: false,
      currentStorefront: {
        name: '',
        address: '',
        borough: '',
        directions: '',
        endTime: '',
        startTime: '',
        zip: ''
      },
      storefrontItems: []
    }, () => {
      this.showLoginButton();
      this.hideLogoutButton();
    })
  }

  trackSearchInput(e) {
    this.setState({
      searchZip: e.target.value
    });
  }

  trackCreateStore(e) {
    let fieldsArr = e.target.parentElement.parentElement.childNodes[1].childNodes;
    this.setState({
      createStorefront: {
        name: fieldsArr[0].value,
        address: fieldsArr[1].value,
        borough: fieldsArr[2].children[0].value,
        zip: fieldsArr[2].children[1].value,
        directions: fieldsArr[3].value,
        sale_date: fieldsArr[4].value,
        startTime: fieldsArr[5].childNodes[1].value,
        endTime: fieldsArr[5].childNodes[2].value,
      },
    }, () => {
      console.log(this.state)
    })
  }

  trackCreateItem(e) {
    let fieldsArr = e.target.parentElement.childNodes;
    console.log(fieldsArr[0].value)
    this.setState({
      createItem: {
        name: fieldsArr[0].value,
        image_url: fieldsArr[1].value,
        condition: fieldsArr[2].childNodes[0].value,
        price: fieldsArr[2].childNodes[1].value,
        description: fieldsArr[3].value
      },
    }, () => {
      console.log(this.state)
    })
  }

  trackEditStore(e) {
    let fieldsArr = e.target.parentElement.parentElement.childNodes;
    this.setState({
      editStorefront: {
        name: fieldsArr[1].value,
        address: fieldsArr[2].value,
        borough: fieldsArr[3].children[0].value,
        zip: fieldsArr[3].children[1].value,
        directions: fieldsArr[4].value,
        sale_date: fieldsArr[5].value,
        startTime: fieldsArr[6].children[0].value,
        endTime: fieldsArr[6].children[1].value,
      }
    })
  }

  trackEditItem(e) {
    let fieldsArr = e.target.parentElement.childNodes;
    console.log(fieldsArr[0].value)
    this.setState({
      editItem: {
        name: fieldsArr[0].value,
        image_url: fieldsArr[1].value,
        condition: fieldsArr[2].childNodes[0].value,
        price: fieldsArr[2].childNodes[1].value,
        description: fieldsArr[3].value
      },
    }, () => {
      console.log(this.state)
    })
}

  postSearchZip() {
    console.log('search posted')
    return fetch('/search/zip', {
      headers: {
        'Content-Type': 'application/JSON'
      },
      method: 'POST',
      body: JSON.stringify({
        'searchZip': this.state.searchZip
      })
    })
    .then(r => r.json())
    .then(searchResults => {
      console.log(searchResults)
    })
  }

  postNewStorefront() {
    console.log('posting new storefront')
    let userItemList = document.querySelector('.rightDiv')
    userItemList.style.display = 'flex';
    let createStorefront = document.querySelector('#createStoreDiv');
    createStorefront.style.display = 'none';
    let reveal = document.querySelector('#asideSellerMyStore');
    reveal.style.display = 'block';

    return fetch('/api/storefront', {
      headers: {
        'Content-Type': 'application/JSON'
      },
      method: 'POST',
      body: JSON.stringify({
        name: this.state.createStorefront.name,
        address: this.state.createStorefront.address,
        borough: this.state.createStorefront.borough,
        zip: this.state.createStorefront.zip,
        directions: this.state.createStorefront.directions,
        sale_date: this.state.createStorefront.sale_date,
        startTime: this.state.createStorefront.startTime,
        endTime: this.state.createStorefront.endTime,
        unitedState: 'NY',
        currentUser: this.state.currentUser
      })
    })
    .then(() => {
      this.setState({
        currentStorefront: {
          name: this.state.createStorefront.name,
          address: this.state.createStorefront.address,
          borough: this.state.createStorefront.borough,
          zip: this.state.createStorefront.zip,
          directions: this.state.createStorefront.directions,
          sale_date: this.state.createStorefront.sale_date,
          startTime: this.state.createStorefront.startTime,
          endTime: this.state.createStorefront.endTime,
        },
        hasStorefront: true
      })
    })
    .then(()=> {
      console.log('post add new storefrtont', this.state)
    })
  };

  postNewItem() {
    return fetch('/api/item', {
      headers: {
        'Content-Type': 'application/JSON',
        'Authorization': 'Bearer ' + this.state.currentToken
      },
      method: 'POST',
      body: JSON.stringify({
        name: this.state.createItem.name,
        image_url: this.state.createItem.image_url,
        condition: this.state.createItem.condition,
        price: this.state.createItem.price,
        description: this.state.createItem.description,
        likes: 0,
        currentUser: this.state.currentUser,
        currentStorefront: this.state.currentStorefront.name
      }),
    })
    .then(() => {
      this.getStorefrontItems()
    })
    .then(() => {
      this.hideAddItemDiv();
    })
  };

  putEditItem(){
    return fetch('/api/items', {
      headers: {
        'Content-Type:' : 'application/JSON'
      },
      method: 'PUT',
      body: JSON.stringify({
        name: this.state.editItem.name,
        image_url: this.state.editItem.image_url,
        condition: this.state.editItem.condition,
        price: this.state.editItem.price,
        description: this.state.editItem.description,
        likes: '0',
        currentUser: this.state.currentUser,
        currentStorefront: this.state.currentStorefront.name
      })
    })
    .then((data) => {
      console.log(data)
    })
    .catch(error => console.log(error))
  }

  putEditStorefront() {
    return fetch('/api/storefronts', {
      headers: {
        'Content-Type': 'application/JSON'
      },
      method: 'PUT',
      body: JSON.stringify({
        name: this.state.editStorefront.name,
        address: this.state.editStorefront.address,
        borough: this.state.editStorefront.borough,
        zip: this.state.editStorefront.zip,
        directions: this.state.editStorefront.directions,
        sale_date: this.state.editStorefront.sale_date,
        startTime: this.state.editStorefront.startTime,
        endTime: this.state.editStorefront.endTime,
        unitedState: 'NY',
        currentUser: this.state.currentUser
      })
    })
    .then(() => {
      this.setState({
        currentStorefront: {
          name: this.state.createStorefront.name,
          address: this.state.createStorefront.address,
          borough: this.state.createStorefront.borough,
          zip: this.state.createStorefront.zip,
          directions: this.state.createStorefront.directions,
          sale_date: this.state.createStorefront.sale_date,
          startTime: this.state.createStorefront.startTime,
          endTime: this.state.createStorefront.endTime,
        }
      })
    })
    .then( () => {
      this.getOneStorefront();
      this.getStorefrontItems();
      this.hideEditForm();
    })
  };

  loginError() {
    let loginError = document.querySelector('#loginError')
    loginError.style.display = 'block';
  }

  render(){

    const location = {
      lat: 40.7575285,
      lng: -73.9884469
    }
//Below is where you create your pins/markers
    const markers = [
      {
        location:{
          lat: 40.7575285,
          lng: -73.9884469
        }
      }
    ]
    return (

      <div>

        <header>
          <h1>Grojj.</h1>
          <button id="loginButton" onClick={this.showLoginSignup}>Login or Sign Up</button>
            <Logout
              logout={this.logout.bind(this)}
            />
          <nav>
            <SearchDD
              showSearchInput={this.showSearchInput}
              trackSearchInput={this.trackSearchInput.bind(this)}
              postSearchZip={this.postSearchZip.bind(this)}
            />
            <StorefrontDD
              loggedIn={this.state.loggedIn}
              currentUser={this.state.currentUser}
              hasStorefront={this.state.hasStorefront}
              showLoginButton={this.showLoginButton}
            />
            <div className="nButton">Messages</div>
              <LoginSignup
                showLoginSignup={this.showLoginSignup}
                hideLogin={this.hideLogin}
                trackLoginForm={this.trackLoginForm.bind(this)}
                trackSignupForm={this.trackSignupForm.bind(this)}
                postLogin={this.postLogin.bind(this)}
                postSignup={this.postSignup.bind(this)}
              />
          </nav>
        </header>

        <main>


          <div className="mapContainer" style={{width:750, height:450, background: 'pink'}}>

            <SaveMap
              center={location}
              markers={markers}
            />
          </div>


            <CreateStore
              postNewStorefront={this.postNewStorefront.bind(this)}
              trackCreateStore={this.trackCreateStore.bind(this)}
            />
            <EditStore
              currentStorefront={this.state.currentStorefront}
              putEditStorefront={this.putEditStorefront.bind(this)}
              trackEditStore={this.trackEditStore.bind(this)}
              hideEditForm={this.hideEditForm.bind(this)}
            />
            <AsideSMyStore
              currentStorefront={this.state.currentStorefront}
              currentUser={this.state.currentUser}
              editStorefront={this.state.editStorefront}
              removeOneStorefront={this.removeOneStorefront.bind(this)}
            />
            <MyItemList
              storefrontItems={this.state.storefrontItems}
              showEditItemDiv={this.showEditItemDiv}
            />
            <EditItem
              currentStorefront={this.state.currentStorefront}
              putEditItem={this.putEditItem.bind(this)}
              trackEditItem={this.trackEditItem.bind(this)}
              hideEditItem={this.hideEditItem.bind(this)}
            />
            <AddNewItem
              postNewItem={this.postNewItem.bind(this)}
              trackCreateItem={this.trackCreateItem.bind(this)}
            />



      </main>


       <footer>

          <a href="#" className='center-a'>About Us</a>
          <a href="#" className='center-a'>Contact</a>
          <p>Grojj 2016</p>

        </footer>

      </div>

    )
  }
}

export default App;
