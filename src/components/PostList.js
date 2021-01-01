import React from 'react';
import { connect } from 'react-redux';
import { selectPost } from '../actions';

class PostList extends React.Component {
    renderList() {
        
        return this.props.posts.map((post) => {
            return (
                <div className='item'
                key={post.author}>
                    <div className='right floated content'>
                        <button 
                        className='ui red basic button '
                        onClick= {() => this.props.selectPost(post)}
                        >
                            Select
                    </button>
                    </div>
                    <div className='content'>{post.author}</div>
                    <div className='content'>{post.headline}</div>
                    <div className='content'>{post.content}</div>
                </div>
                
            );
          
        });
    }

    render() {
        return <div className='ui divided list'>{this.renderList()}
        <br></br>
        <a>View Top 100</a>
        </div>
         
    }
}

const mapStateToProps = state => {
    return { posts: state.posts }
}

export default connect(mapStateToProps, { selectPost })(PostList);