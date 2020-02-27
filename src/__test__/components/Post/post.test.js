import React from 'react';
import { expect } from 'chai';

import Post from '../../../components/Post';

const handleSelect = jest.fn();

describe('Post', () => {
  it('should exist', () => {
    // eslint-disable-next-line no-unused-expressions
    expect(<Post selected mdBreakPoint handleSelect={handleSelect} />).to.exist;
  });
});