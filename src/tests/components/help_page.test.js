import React from 'react';
import { shallow } from 'enzyme'
import HelpPage from '../../components/help_page';

test('should render HelpPage correctly', () => {
    const wrapper = shallow(<HelpPage />);

    expect(wrapper).toMatchSnapshot();
});