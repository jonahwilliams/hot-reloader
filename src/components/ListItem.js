import React from 'react';

/**
 * listItem - Component
 * @param {Object} props
 * @param {Object} props.data
 * @param {string} props.data.title
 * @param {string} props.data.url
 * @param {number} props.data.score
 * @param {number} props.key Key to help react
 */

export const ListItem = (
  { data: {
    title = 'NO TITLE',
    url = 'No URL',
    score = 0
  }, key, style }) => (
    <div className='list-col' key={key}>
      <div className='list-col'>
        { title }
      </div>
      <div className='list-col'>
        { url }
      </div>
      <div className='list-col'>
        { score }
      </div>
    </div>);
