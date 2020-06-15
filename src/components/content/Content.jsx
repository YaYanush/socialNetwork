import React from 'react';
import Profile from "./Profile/Profile";
import MyPostsContainer from "./myPosts/myPostsContainer";

const Content = (props) => {
    return  <div >
       <Profile />
        <MyPostsContainer store={props.store}/>
    </div>

}

export default Content;