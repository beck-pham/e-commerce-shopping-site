import React from 'react';
import { withRouter } from 'react-router-dom'; // withRouter enables to use props such as location,match, and history without using "props-drilling" approach.

import './menu-item.styles.scss';

const MenuItem = ({ title, imageUrl, size, history, linkUrl, match }) => {
  return (
    <div
      // {/*size is a class for style css that is dynamic taken from Directory comp> */}
      className={`menu-item ${size}`}
      onClick={() => history.push(`${match.url}${linkUrl}`)}
    >
      <div
        className="background-image"
        style={{
          backgroundImage: `url(${imageUrl})`
        }}
      />
      <div className="content">
        <h1 className="title">{title.toUpperCase()}</h1>
        <span className="subtitle">SHOP NOW</span>
      </div>
    </div>
  );
};

export default withRouter(MenuItem);
