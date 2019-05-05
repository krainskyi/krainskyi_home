import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

let posts = [
    { message: 'Hey Body! How are you?' },
    { like: '15', dislike: '20' },
    { message: 'Its my first project', like: '0', dislike: '1' },
    { message: 'I from Ukraine', like: '125', dislike: '120' }
]
let user = [
    { id: 1, name: 'Yura' },
    { id: 2, name: 'Lana' },
    { id: 3, name: 'Sasha' },
    { id: 4, name: 'Igor' },
    { id: 5, name: 'Boby' }
]
let Message = [
    { message: 'Yo guys' },
    { message: 'Hi how are you' },
    { message: 'I from Ukraine' },
    { message: 'I from Ukraine' },
    { message: 'I from Ukraine' },
    { message: 'I from Ukraine' }
]
  
ReactDOM.render(<App posts={posts} user={user} Message={Message}/>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
