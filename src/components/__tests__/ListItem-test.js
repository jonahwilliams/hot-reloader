jest.unmock('../ListItem');

import React from 'react';
import ReactDOM from 'react-dom';
import TestUtils from 'react-addons-test-utils';
import {ListItem} from '../ListItem';

describe('listItem', () => {
  it('renders into a document', () => {
    const data = { key: 0, data: { title: "assd", url: "asdasd", score: 0}};
    const listItem = TestUtils.renderIntoDocument(
      <div>
        <ListItem data={data.data} key={data.key} />
      </div>
    );
    const listItemNode = ReactDOM.findDOMNode(listItem);
    
    expect(true).toEqual(true);
  });
});
