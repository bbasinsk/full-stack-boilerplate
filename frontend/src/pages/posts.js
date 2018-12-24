import React, { Component } from 'react';
import fetchAllPosts from '../actions/fetch/fetchAllPosts';

class PostsPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            posts: [],
            error: false
        };
    }

    componentDidMount() {
        fetchAllPosts()
            .then(posts => this.setState({ posts }))
            .catch(err => this.setState({ error: err }));
    }

    render() {
        const { posts } = this.state;

        return (
            <div>
                <h2>Posts</h2>
                {this.state.error ? "Could not get posts." : ""}
                {posts.map(post => (<p>{post.content}</p>))}
            </div >
        );
    }
}

export default PostsPage;