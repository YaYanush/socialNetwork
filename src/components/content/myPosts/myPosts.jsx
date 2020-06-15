import React from 'react';
import s from './myPosts.module.css';
import Post from "./post/Post";

const MyPosts = (props) => {
    let newTextElement = React.createRef();
    let addPost = () =>{
        props.addPost();
    };
    let onPostChange = () =>{
      let text = newTextElement.current.value;
        props.onPostChange(text);
    };
    let postElements = props.postData
        .map(d => <Post message={d.message} likesCount={d.likesCount}/> );
    return <div className={s.posts}>
        My posts:
        <div>
           write new posts:
            <div>
                <textarea ref={newTextElement} value={props.newText} onChange={onPostChange}/>
            </div>
           <div>
               <button onClick={addPost}>add</button>
           </div>
        </div>
        <div className={s.post}>
            {postElements}
        </div>
    </div>
};

export default MyPosts;