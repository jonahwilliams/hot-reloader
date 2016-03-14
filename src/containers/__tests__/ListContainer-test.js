jest.unmock('../ListContainer');

import React from 'react';
import ReactDOM from 'react-dom';
import TestUtils from 'react-addons-test-utils';
import {ListContainer} from '../ListContainer';

describe('listContainer', () => {
  it('renders into a document', () => {
    const listContainer = TestUtils.renderIntoDocument(<ListContainer/>);
    const listContainerNode = ReactDOM.findDOMNode(listContainer);
    
    expect(true).toEqual(true);
  });
});