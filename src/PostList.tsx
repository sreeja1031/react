/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/state-in-constructor */
import React from 'react';
import axios from 'axios';

interface Post {
    id: number;
    title: string;
}
export default class PostList extends React.Component {
  state = {
    posts: [],
  };

  componentDidMount() {
    axios.get('http://localhost:3006/posts')
      .then((res) => {
        const posts = res.data;
        this.setState({ posts });
      });
  }

  render() {
    return (
      <ul>
        {
            this.state.posts
              .map((post:Post) => <li key={post.id}>{post.title}</li>)
          }
      </ul>
    );
  }
}
