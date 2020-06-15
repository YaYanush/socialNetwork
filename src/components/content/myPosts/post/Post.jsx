import React from 'react';
import s from '../../Content.module.css'
const Post = (props) => {
    return <div className={s.item}>
        <img src='https://www.w3schools.com/bootstrap4/img_avatar3.png'/>
        <div>
            <span>{props.message}</span>
            <br />
            <span>Likes:{props.likesCount}</span>
        </div>


    </div>
}

export default Post;