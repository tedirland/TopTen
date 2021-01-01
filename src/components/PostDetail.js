import React from 'react';
import { connect } from 'react-redux';


const PostDetail = ({ post }) => {

 

    if (!post) {
        return <div>Select a post</div>
    }
    return (
    <div>
        <h3>Details For:</h3>
        <p>
            Category: {post.category}
            <br></br>
            Author: {post.author}
            <br></br>
            Headline: {post.headline}
            <br></br>
            Content: {post.content}
            </p>
        </div>
    )
};

const mapStateToProps = (state) => {
    console.log(state)
    return { post: state.selectedPost }
};

export default connect(mapStateToProps)(PostDetail)