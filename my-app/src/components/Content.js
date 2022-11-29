import React, { Component } from 'react'
import css from "./css/Content.module.css";
import {savedPosts} from '../posts.json';

// constructor(props) {
//   super(props)
// }

export class Content extends Component {
  render() {
    return (
      <div className={css.Content}>
        <div className={css.TitleBar}>
            My photos <h1>My Posts</h1>
        </div>
        <div className={css.SearchResults}>
        {savedPosts.map(post => {
            return <div key={post.title} className={css.SearchItem}>
                <p>{post.title}</p>
                <p>{post.name}</p>
                <img src={post.image} />
                <p>{post.description}</p>
            </div>
        })}
        </div>
      </div>
    )
  }
}

export default Content