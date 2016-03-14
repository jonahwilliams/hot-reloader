jest.unmock('../ListView');

import React from 'react';
import ReactDOM from 'react-dom';
import TestUtils from 'react-addons-test-utils';
import {ListView} from '../ListView';

describe('listView', () => {
  it('renders into a document', () => {
    const data = [{ key: 0, data: { title: "assd", url: "asdasd", score: 0}}];
    const listView = TestUtils.renderIntoDocument(
      <div>
        <ListView posts={data}/>);
      </div>
    );
    const listViewNode = ReactDOM.findDOMNode(listView);
    
    expect(true).toEqual(true);
  });
});