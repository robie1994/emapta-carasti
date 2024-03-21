import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import configureStore from 'redux-mock-store';
import { Provider } from 'react-redux';
import PersonalInfo from '../components/PersonalInfo';

const mockStore = configureStore([]);

describe('PersonalInfo', () => {
  it('dispatches updateImage action with correct values', () => {
    const initialState = {
      user: {
        fname: 'Test',
        lname: 'User',
        email: 'test.user@example.com',
        bdate: '1990-01-01',
        phonenum: '1234567890',
        image: 'default.jpg',
      },
    };
    const store = mockStore(initialState);

    render(
      <Provider store={store}>
        <PersonalInfo />
      </Provider>,
    );

    fireEvent.change(screen.getByTestId('First Name'), {
      target: { value: 'Rob' },
    });
    fireEvent.change(screen.getByTestId('Last Name'), {
      target: { value: 'Mendiola' },
    });
    fireEvent.change(screen.getByTestId('Email Address'), {
      target: { value: 'rob@example.com' },
    });
    fireEvent.change(screen.getByTestId('Date of Birth'), {
      target: { value: '1994-06-28' },
    });
    fireEvent.change(screen.getByTestId('Phone Number'), {
      target: { value: '9876543210' },
    });

    // Trigger Save button click
    fireEvent.click(screen.getByText('Save'));

    // Check if updateImage action was dispatched with correct values
    const actions = store.getActions();
    expect(actions).toEqual([
      {
        type: 'user/updateImage',
        payload: {
          fname: 'Rob',
          lname: 'Mendiola',
          email: 'rob@example.com',
          image: 'default.jpg',
          bdate: '1994-06-28',
          phonenum: '9876543210',
        },
      },
    ]);
  });
});
