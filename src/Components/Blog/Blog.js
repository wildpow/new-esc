import React from 'react';
import ComingSoon from '../ComingSoon';
import Helmet from 'react-helmet';

const BlogComponent = () => {
  return (
    <div>
    <Helmet>
      <title>ESC: Blog</title>
    </Helmet>
    <ComingSoon/>
    </div>
  )
}

export default BlogComponent;

