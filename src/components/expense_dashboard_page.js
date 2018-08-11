import React from 'react';
import ExpenseList from './expense_list';
import ExpenseListFilters from './expense_list_filters';
import ExpensesSummary from './expenses_summary';

const ExpenseDashboardPage = () => (
    <div>
        <ExpensesSummary />
        <ExpenseListFilters />
        <ExpenseList />
    </div>
);

export default ExpenseDashboardPage;