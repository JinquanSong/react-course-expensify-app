import React from 'react';
import { shallow } from 'enzyme';
import { EditExpensePage } from '../../components/edit_expense_page';
import expenses from '../fixtures/expenses';

let wrapper, editExpense, removeExpense, history;

beforeEach(() => {
    editExpense = jest.fn();
    removeExpense = jest.fn();
    history = { push: jest.fn() };
    wrapper = shallow(
        <EditExpensePage
            expense={ expenses[0] }
            editExpense={ editExpense }
            removeExpense = { removeExpense }
            history={ history }
        />
    );
});

test('should render EditExpensePage', () => {
    expect(wrapper).toMatchSnapshot();
});

test('should handle editExpense', () => {
    wrapper.find('ExpenseForm').prop('onSubmit')(expenses[0]);
    expect(editExpense).toHaveBeenLastCalledWith(expenses[0].id, expenses[0]);
    expect(history.push).toHaveBeenLastCalledWith('/');
});

test('shuold handle removeExpense', () => {
    wrapper.find('button').simulate('click');
    expect(removeExpense).toHaveBeenLastCalledWith(expenses[0].id);
    expect(history.push).toHaveBeenLastCalledWith('/');
});