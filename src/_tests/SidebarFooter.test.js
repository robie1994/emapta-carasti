import React from 'react';
import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store'; // Import configureStore from redux-mock-store
import SidebarFooter from '../components/SidebarFooter';

const mockStore = configureStore([]);

describe('SidebarFooter', () => {
  let store;

  beforeEach(() => {
    store = mockStore({
      user: {
        fname: 'Megan',
        lname: ' Smith',
        email: 'megan@info.com',
        image: '',
        bdate: '10/11/1991',
        phonenum: '+971 55 708 7909',
      },
    });
  });

  it('checks the initial value of the firstname', () => {
    render(
      <Provider store={store}>
        <SidebarFooter />
      </Provider>,
    );

    const firstNameValue = screen.getByTestId('fname').textContent;
    expect(firstNameValue).toEqual('Megan');
  });
});
