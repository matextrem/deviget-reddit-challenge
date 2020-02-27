import React from 'react';
import { expect } from 'chai';

// Page
import Home from '../../pages/Home';

describe('Home Page', () => {
  it('should exist', () => {
    // eslint-disable-next-line no-unused-expressions
    expect(<Home />).to.exist;
  });
});