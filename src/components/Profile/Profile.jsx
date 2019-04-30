import React from 'react';
import s from './Profile.module.css';
import MyPosts from './MyPosts/MyPosts';

const Profile =()=>{
    return (
    <div >
         <div className={s.content}>
        <img src='http://www.photoplato.com/photoplato/23751-free-large-desktop-wallpaper.png'/>
      </div>
      <div>
        avatar+discription
      </div>
      <MyPosts/>
      </div>
      
    );
}
export default Profile;