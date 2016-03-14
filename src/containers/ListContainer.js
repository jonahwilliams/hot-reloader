import React from 'react';
import {ListView} from '../components/ListView';
import {posts} from '../reddit';

export class ListContainer extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      posts: []
    };
  }
  componentWillMount () {
    this.setState({
      posts: posts
    });
  }
  render () {
    return (
      <div className='listContainer'>
        <ListView posts={this.state.posts} />
      </div>);
  }
}
