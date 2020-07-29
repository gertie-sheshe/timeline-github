import React from 'react';
import { render, cleanup, fireEvent } from '@testing-library/react';
import { User as UserContainer } from './user-container'

afterEach(cleanup);

describe('User Container', () => { 
    it('Should render User Container', () => { 
        const mockProps = {
            sortedUser: null,
            error: false,
            homePage: false,
            loading: false,
            user: null,
            fetchUser: jest.fn()
        };
        const { asFragment } = render(<UserContainer {...mockProps} />);
        expect(asFragment(<UserContainer/>)).toMatchSnapshot()
    });

    it('Should render error if present', () => {
        const mockProps = {
            sortedUser: null,
            error: true,
            homePage: false,
            loading: false,
            user: null,
            fetchUser: jest.fn()
        };

        const { getByTestId } = render(<UserContainer {...mockProps} />);
        expect(getByTestId('error')).toHaveTextContent('User not found');

    });

    it('Should render loader when set to true', () => {
        const mockProps = {
            sortedUser: null,
            error: false,
            homePage: false,
            loading: true,
            user: null,
            fetchUser: jest.fn()
        };

        const { getByTestId } = render(<UserContainer {...mockProps} />);
        expect(getByTestId('loader')).toBeInTheDocument()
    });

    it('Should fetch user', () => {
        const mockProps = {
            sortedUser: null,
            error: false,
            homePage: false,
            loading: false,
            user: null,
            fetchUser: jest.fn()
        };

        const { getByTestId } = render(<UserContainer {...mockProps} />);
        fireEvent.click(getByTestId('button'));
        expect(mockProps.fetchUser).toHaveBeenCalled()
    });

    it('Should give feedback if user has no repositories', () => {
        const mockProps = {
            sortedUser: null,
            error: false,
            homePage: false,
            loading: false,
            user: [],
            fetchUser: jest.fn()
        };

        const { getByTestId } = render(<UserContainer {...mockProps} />);
        expect(getByTestId('warning')).toHaveTextContent('Sorry, this user has no public repositories')
    })
});