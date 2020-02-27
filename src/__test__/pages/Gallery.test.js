import React from 'react';
import { expect } from 'chai';

// Page
import Gallery from '../../pages/Gallery';

describe('Gallery Page', () => {
  it('should exist', () => {
    // eslint-disable-next-line no-unused-expressions
    expect(<Gallery />).to.exist;
  });
});
