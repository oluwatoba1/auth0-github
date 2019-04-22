import React, { Component } from 'react';
import CropViewer from 'rc-cropping';
import 'rc-cropping/assets/index.css';
import pica from 'pica';

class Profile extends Component {
  resizer(from, to) {
    console.log('>> pica resizer', from, to);
    return pica().resize(from, to);
  }
  render() {
    let userdata = this.props.userData;
    let followers = `${userdata.homeUrl}/followers`;
    let following = `${userdata.homeUrl}/following`;
    let repos = `${userdata.homeUrl}/repositories`;

    if(userdata.notFound === "Not Found"){
      return(
        <div className="notfound">
          <h2>Heyyyyy</h2>
          <p>Are you sure, for whom you are looking for ???</p>
        </div>
      );
    }


    else {
      return(
        <section className="github-profile">
          <div className="github-profile-info">
            <CropViewer resizer={this.resizer} circle>
              <a href={userdata.homeUrl} target="_blank" title={userdata.name || userdata.username}>
              <img src={userdata.avatar} alt="title" /></a>
            </CropViewer>
            <h2><a href={userdata.homeUrl} title={userdata.username} target="_blank">{userdata.name || userdata.username}</a></h2>
            <h3>{userdata.location}</h3>
          </div>
          <div className="github-profile-state">
            <ul>
               <li>
                  <a href={followers} target="_blank" title="Number Of Followers"><i>{userdata.followers}</i><span>Followers</span></a>
               </li>
               <li>
                  <a href={repos} target="_blank" title="Number Of Repositoriy"><i>{userdata.repos}</i><span>Repository</span></a>
               </li>
               <li>
                  <a href={following} target="_blank" title="Number Of Following"><i>{userdata.following}</i><span>Following</span></a>
               </li>
            </ul>
          </div>
        </section>
      );
    }
  }
}

export default Profile;
