  
import React, { Component } from 'react';
import { Link } from 'react-router-dom'

class PostInline extends Component {
  render() {
      const {post} = this.props
      const {elClass} = this.props
      const showContent = elClass === 'card' ? 'd-block' : 'd-none'
    return (
      <div>
          <ul className="list-group">
          {post !== undefined ? <div className={elClass}>
               <li><h1><Link maintainScrollPosition={false} to={{
                   pathname:`/posts/${post.slug}`,
                   state: {fromDashboard: false}
               }}>{post.title}</Link></h1></li>

              <p className={showContent}>{post.content}</p>
              </div>
              : ""}
            </ul>
      </div>
    );
  }
}

export default PostInline;