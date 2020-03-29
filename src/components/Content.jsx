import React from 'react';
import './Content.css';

const Content = () => {
    return  <div className="content">
    <div>
      <img src="https://i1.wp.com/static.web-backgrounds.net/uploads/2012/08/City_Landscape_Background.jpg"></img>
    </div>

    <div>
      ava+description
    </div>

    <div>
      My posts
        <div>
        New posts
        </div>
      <div className="post">
        <div className="item">
          Post 1
        </div>
        <div className="item">
          Post 2
        </div>
        
      </div>
    </div>

  </div>

}

export default Content;