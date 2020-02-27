import React from 'react';
import { expect } from 'chai';

// Page
import NotFound from '../../pages/NotFound';

describe('Not Found Page', () => {
  it('should exist', () => {
    // eslint-disable-next-line no-unused-expressions
    expect(<NotFound />).to.exist;
  });
});