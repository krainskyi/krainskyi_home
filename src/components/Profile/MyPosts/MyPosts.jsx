import React from 'react';
import s from './MyPosts.module.css'
import Posts from './Posts/Posts';

const MyPosts = (props) => {
   
    let postdata = 
    props.state.posts .map(m => <Posts message={m.message} like={m.like} dislike={m.dislike}/>);

    return (
        <div className={s.postitems}>
            <h3>My posts</h3>
            <div>
                <textarea></textarea>
                <div>
                    <button>Add message</button>
                </div>
            </div>
            <div className={s.posts}>
                {postdata}
            </div>
        </div>

    );
}
export default MyPosts;