import React from 'react';
import s from '../Content.module.css';
import Post from "./post/Post";

const MyPosts = () => {
    return <div>
        My posts
        <div>
            New posts
            <textarea></textarea>
            <button>add</button>
        </div>
        <div className={s.post}>
            <Post />
            <Post />
            <Post />
            <Post />
            <Post />
            <Post />
            <Post />
        </div>
    </div>
}

export default MyPosts;