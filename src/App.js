import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Github from './Github';
import Header from './Components/Header';
import Auth0Lock from 'auth0-lock';

class App extends Component {

  constructor(props){
    super(props);

    this.state = {
      accessToken: '',
      profile: {}
    }
    this.setProfile = this.setProfile.bind(this);
    this.getProfile = this.getProfile.bind(this);
  }

  static defaultProps ={
    clientId: 'GEoPfsrsOFMZyu6dCE8rBtFSw6KeHvM1',
    domain: 'dev--1qx-tmd.auth0.com'
    }

  componentWillMount() {
    this.lock = new Auth0Lock(this.props.clientId, this.props.domain);


    this.lock.on('authenticated', authResult => {
      console.log(authResult);

      this.lock.getUserInfo(authResult.accessToken, (error, profile) => {
        if(error){
          console.log(error);
          return;
        }

        console.log(profile);

        this.setProfile(authResult.accessToken, profile)
        
      })
      
    });

    this.getProfile();
  }

  setProfile(accessToken, profile){
    localStorage.setItem('accessToken', accessToken);
    localStorage.setItem('profile', JSON.stringify(profile));

    this.setState({
      accessToken: localStorage.getItem('accessToken'),
      profile: JSON.parse(localStorage.getItem('profile'))
    });

  }

  getProfile(){
    if(localStorage.getItem('accessToken') !== null){
      this.setState({
        accessToken: localStorage.getItem('accessToken'),
        profile: JSON.parse(localStorage.getItem('profile'))
      }, () => console.log(this.state));
    }
  }

  showLock(){
    this.lock.show();
  }

  logout(){
    this.setState({
      accessToken: '',
      profile: {}
    }, () => {
      localStorage.removeItem('accessToken');
      localStorage.removeItem('profile');
    });
  }
  
  render() {
    let gitty;

    if(this.state.accessToken){
      gitty = <Github />
    }else{
      gitty = <h3>Click on Login to view Github Viewer</h3>
    }
    
    return (
      <div className="App">
        <Header
        lock={this.lock} 
        accessToken={this.state.accessToken}
        onLogin={this.showLock.bind(this)} 
        onLogout={this.logout.bind(this)} />
          {gitty}
      </div>
    );
  }
}

export default App;