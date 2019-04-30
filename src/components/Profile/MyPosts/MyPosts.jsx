import React from 'react';
import s from './MyPosts.module.css'
import Posts from './Posts/Posts';

const MyPosts =()=> {

    return(
        <div >
        <h3>My posts</h3>
        <div>
            <textarea></textarea>
            <button>Add message</button>
        </div>
        <div className={s.posts}>
        <Posts message='Hey Body! How are you?'/>
        <Posts like='15' dislike=' 20'/>
        <Posts message='Its my first project' like='0' dislike='1'/>
        <Posts like='125' dislike=' 120'/>
        </div>
        </div>

    );
}
export default MyPosts;