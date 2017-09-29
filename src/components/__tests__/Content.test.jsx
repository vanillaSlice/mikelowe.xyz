import React from 'react';
import { mount } from 'enzyme';

import Content from '../Content';

describe('Content', () => {
  it('renders without crashing', () => {
    mount(<Content />);
  });
});
