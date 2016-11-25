import React, { Component } from 'react';
import LoginSignup from '../01LoginSignup/LoginSignup.jsx';
import TestLogin from '../TestLogin/TestLogin.jsx';
import Logout from '../01Logout/Logout.jsx';
import './App.css';

class App extends Component {

  constructor() {
    super();

    this.state = {
      loginFormUsername: '',
      loginFormPassword: '',
      signupFormUsername: '',
      signupFormPassword: '',
      currentToken: '',
    };
  }

  showLogin() {
    let showLogin = document.querySelector('#loginSignup');
    showLogin.style.display = 'block';
    console.log(showLogin);
  }

  hideLogin() {
    let showLogin = document.querySelector('#loginSignup');
    showLogin.style.display = 'none';
  }

  trackLoginUsername(e) {
    this.setState({
      loginFormUsername: e.target.value
    })
  }

  trackLoginPassword(e) {
    this.setState({
      loginFormPassword: e.target.value
    })
  }

  trackSignupUsername(e) {
    this.setState({
      signupFormUsername: e.target.value
    })
    console.log(e.target.value)
  }

  trackSignupPassword(e) {
    this.setState({
      signupFormPassword: e.target.value
    })
    console.log(e.target.value)
  }

  postSignup() {
    console.log(this.state.signupFormUsername, this.state.signupFormPassword)
    return fetch('/user/signup', {
      headers: {
        'Content-Type': 'application/JSON'
      },
      method: 'POST',
      body: JSON.stringify({
        'username': this.state.signupFormUsername,
        'password': this.state.signupFormPassword
      })
    })
    .then(() => {
      console.log('signedup')
    });
  }

  postLogin() {
    return fetch('/user/login', {
      headers: {
        'Content-Type': 'application/JSON'
      },
      method: 'POST',
      body: JSON.stringify({
        'username': this.state.loginFormUsername,
        'password': this.state.loginFormPassword
      })
    })
    .then(r => r.json())
    .then((data) => {
      this.setState({
        currentToken: data
      })
    })
    .then( () => {
      console.log('wtf', this.state.currentToken)
    })
    .catch(error => console.log(error))
  }

  logout() {
    console.log('logging out')
    this.setState({
      currentToken: '',
    })
    console.log('logged out')
  }

  testLogin() {
    return fetch('/api/items', {
      headers: {
        'Content-Type': 'application/JSON',
        'Authorization': 'Bearer ' + this.state.currentToken
      },
    })
    .then(r=> r.json())
    .then((data) => {
      console.log(data)
    })
    .catch(error => console.log(error))
  }

  render(){
    return (
      <div>
        <header>
          <h1>Grojj.</h1>
          <button onClick={this.showLogin}>Log In or Sign Up</button>
          <Logout
            logout={this.logout.bind(this)}
          />
          <nav>
            <div className="nButton">Search
              <input type="text" placeholder="search"/>
              <button>Go!</button>
            </div>
            <div className="nButton">myStoreFront</div>
            <div className="nButton">Messages</div>
              <LoginSignup
                hideLogin={this.hideLogin}
                trackLoginUsername={this.trackLoginUsername.bind(this)}
                trackLoginPassword={this.trackLoginPassword.bind(this)}
                trackSignupUsername={this.trackSignupUsername.bind(this)}
                trackSignupPassword={this.trackSignupPassword.bind(this)}
                postLogin={this.postLogin.bind(this)}
                postSignup={this.postSignup.bind(this)}
              />
          </nav>
        </header>
        <main>
          <TestLogin
            testLogin={this.testLogin.bind(this)}
          />
        </main>
        <footer>
          <div>copyright nonsense, about us</div>
        </footer>
      </div>
    );
  }
}

export default App;
