import React from 'react';
import {ListItem} from './ListItem';

const makeList = (posts = []) => posts.map(
  (props, key) => <ListItem key={key} {...props}/>
);

/**
 * listView - Component
 * @param {Object} props
 * @param {Array} props.posts an array of post objects
 */
export const ListView = ({ posts }) => (
    <div className='list-view'>
      { makeList(posts) }
    </div>
);
