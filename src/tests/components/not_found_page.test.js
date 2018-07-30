import React from 'react';
import { shallow } from 'enzyme'
import NotFoundPage from '../../components/not_found_page';

test('should render NotFoundPage correctly', () => {
    const wrapper = shallow(<NotFoundPage />);

    expect(wrapper).toMatchSnapshot();
});