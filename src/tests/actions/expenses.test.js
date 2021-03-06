import { addExpense, editExpense, removeExpense } from '../../actions/expenses'

test('should setup remove expense action object', () => {
    const action = removeExpense('123abc');

    expect(action).toEqual({
        type: 'REMOVE_EXPENSE',
        id: '123abc'
    })
});

test('should set edit expense action object', () => {
    const action = editExpense('123', {description: 'rent'});
    expect(action).toEqual({
        type: 'EDIT_EXPENSE',
        id: '123',
        updates: { description: 'rent'}
    })
});

test('should setup add expense action object with provided values', () => {
    const expenseData = {
        description: 'Rent',
        amount: 12000,
        createdAt: 120,
        note: 'This was last months rent'
    }

    const action = addExpense(expenseData);
    expect(action).toEqual({
        type: 'ADD_EXPENSE',
        expense: {
            ...expenseData,
            id: expect.any(String)
        }
    })

});

test('should setup add expense action object with default values', () => {
    const action = addExpense();

    expect(action).toEqual({
        type: 'ADD_EXPENSE',
        expense: {
            id: expect.any(String),
            description: '',
            note: '',
            amount: 0,
            createdAt: 0
        }
    })


});