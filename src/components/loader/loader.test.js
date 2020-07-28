import React from 'react';
import { render, cleanup } from '@testing-library/react';
import Loader from './loader';

afterEach(cleanup);

it('Matches Loader Snapshot', () => { 
    const { asFragment } = render(<Loader />);

    expect(asFragment(<Loader />)).toMatchSnapshot();
});
