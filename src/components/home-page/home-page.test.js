import React from 'react';
import { render, cleanup } from '@testing-library/react';
import HomePage from './home-page';

afterEach(cleanup)

it('Should match Homepage snapshot', () => {
//   expect(true).toBe(true)
  const { asFragment } = render(<HomePage />);
  
  expect(asFragment(<HomePage />)).toMatchSnapshot()
});
