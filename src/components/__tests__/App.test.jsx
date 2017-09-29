import React from 'react';
import { mount } from 'enzyme';

import App from '../App';
import Navbar from '../Navbar';

describe('App', () => {
  it('renders without crashing', () => {
    mount(<App />);
  });

  it('renders navbar', () => {
    const app = mount(<App />);
    expect(app.find(Navbar).length).toBe(1);
  });
});
