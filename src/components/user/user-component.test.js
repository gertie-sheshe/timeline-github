import React from 'react';
import { render, cleanup } from '@testing-library/react';
import UserComponent from './user-component';

afterEach(cleanup);

describe('User Component', () => {
    it('Matches Loader Snapshot', () => {
        let userRepoData = {
            dates: ['2020', '2021'], data: {
                '2020': [{ id: 1, name: 'test-repo-one', language: 'HTML', description: 'Test Repo' }],
                '2021': [{ id: 2, name: 'test-repo-two', language: 'Javascript', description: 'Test Repo' }]
            }
        }
        const { asFragment } = render(<UserComponent userRepos={userRepoData} />);
    
        expect(asFragment(<UserComponent />)).toMatchSnapshot();
    });
});
