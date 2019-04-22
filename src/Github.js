import React, { Component } from 'react';
import Profile from './Components/Profile';
import Search from './Components/Search';

const API="https://api.github.com/users"

class Github extends Component {

  constructor(props) {
    super(props)
  
    this.state = {
       username: 'toba96',
       name: '',
       avatar: '',
       repos: '',
       followers: '',
       following: '',
       homeUrl: '',
       notFound: ''
    }

    this.getProfile = this.getProfile.bind(this);
    
  }

  getProfile(username){
    let finalUrl = `${API}/${username}`;

    fetch(finalUrl)
    .then(res => res.json())
    .then(data => {
       this.setState({
             username: data.login,
             name: data.name,
             avatar: data.avatar_url,
             repos: data.public_repos,
             followers: data.followers,
             following: data.following,
             homeUrl: data.html_url,
             location: data.location,
             notFound: data.message
      })
    })
    .catch(error => console.log('There was a problem in fetching data'));

    // axios.get(finalUrl)
    // .then(data => data.json())
    // .then(data => {
    //   this.setState({
    //     username: data.login,
    //     name: data.name,
    //     avatar: data.avatar_url,
    //     repos: data.public_repos,
    //     followers: data.followers,
    //     following: data.following,
    //     homeUrl: data.html_url,
    //     notFound: data.message
    //   })
    // })
    // .catch(error => console.log('There is a problem with fetching data'))
    
  }

  componentDidMount() {
    this.getProfile(this.state.username);
  }
  
  
  
  render() {
    return (
      <div>
        <section id="card">
          <Search searchProfile={this.getProfile.bind(this)} />
          <Profile userData={this.state} />
        </section>
      </div>
    )
  }
}

export default Github;
