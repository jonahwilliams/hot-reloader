import React from 'react';
import {ListView} from '../components/ListView';
import {posts} from '../reddit';

export class ListContainer extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      counter: props.store.value
    };
    this.unsib;
  }
  componentWillMount () {
    this.unsub = this.props.store.subscribe((v) => {
      this.setState({counter: v});
    });
  }
  componentWillUnmount () {
    this.unsub();
  }
  render () {
    return (
      <div className='listContainer'>
        <h1>{`This is a counter: ${this.state.counter}` }</h1>
        <p>Notice that it doesn't reset! that's because this runs off an uberhack!</p>
        <ListView posts={posts} />
      </div>);
  }
}
