import React from "react"
import { getPosts } from '../actions'

class Posts extends React.Component{

  static async getInitialProps() {
    const posts = await getPosts()
    return {posts}
  }

  render() {
    const { posts} = this.props
    return (
      <div className="container">
        <h1>My Posts</h1>
        <ul>
          {
            posts.map(post => (
              <li key={post.id}>id: {post.id}, Title: { post.title}</li>
            ))
          }
        </ul>
      </div>
    )
  }
}
export default Posts