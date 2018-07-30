import React from 'react';
import { shallow } from 'enzyme'
import ExpenseDashboardPage from '../../components/expense_dashboard_page';

test('should render ExpenseDashboardPage correctly', () => {
    const wrapper = shallow(<ExpenseDashboardPage />);

    expect(wrapper).toMatchSnapshot();
});