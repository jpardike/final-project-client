import React from "react";
import PostModel from "../../models/post";

import PostsCards from "../../components/postsCards/PostsCards";

import "./feed.css";

class Feed extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      posts: [],
    };
  }

  componentDidMount() {
    PostModel.all().then((data) => {
      this.setState({ posts: data.posts, loading: false });
    });
  }

  renderPostsCards() {
    return this.state.posts.map((post) => {
      return (
        <PostsCards key={post._id} post={post} user={this.props.currentUser} />
      );
    });
  }

  render() {
    if (this.state.loading) {
      return (
        <div className="row p-0 m-0 justify-content-center">
          <h1>Loading...</h1>
        </div>
      );
    } else {
      return (
        <div className="row p-0 m-0 justify-content-center">
          <div className="col-6 text-center">
            <h2 className="mt-5">Recent Posts</h2>
            {this.renderPostsCards()}
          </div>
        </div>
      );
    }
  }
}

export default Feed;
