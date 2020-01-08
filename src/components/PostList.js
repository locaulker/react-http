import React, { Component } from 'react'

// 1. import axios
import axios from 'axios'

class PostList extends Component {
  constructor(props) {
    super(props)
  
    this.state = {

      // 2. Initialize data
      posts: [],
      errorMsg: ''
    }
  }

  // 3. Using 'axios' to Retrieve data with lifecycle method
  componentDidMount() {
    axios.get('https://jsonplaceholder.typicode.com/posts')
      .then(response => {
        console.log(response)
        this.setState({
          posts: response.data
        })
      })
      .catch(error => {
        console.log(error)
        this.setState({
          errorMsg: 'Oops! Error Retrieving Data'
        })
      })
  }
  
  render() {
    // Deconstructing data variables
    const { posts, errorMsg } = this.state

    return (
      <div>
        <h1>List of Posts</h1>
        {
          (posts.length)
          ? posts.map(post => <li key={post.id}>{post.title}</li>) 
          : null
        }
        { (errorMsg) ? <h3>{errorMsg}</h3> : null }
      </div>
    );
  }
}

export default PostList;