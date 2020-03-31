import React from 'react';
import s from './Content.module.css';
import MyPosts from "./myPosts/myPosts";

const Content = () => {
    return  <div className={s.content}>
        <div>
            <img src="https://i1.wp.com/static.web-backgrounds.net/uploads/2012/08/City_Landscape_Background.jpg"></img>
        </div>

        <div>
            ava+description
        </div>

        <MyPosts />

    </div>

}

export default Content;