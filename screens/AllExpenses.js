import { useContext } from 'react';
import ExpensesOutput from '../components/ExpensesOutput/ExpensesOutput';
import { ExpensesContext } from '../context/expensesContext';

function AllExpenses() {
	const expensesContext = useContext(ExpensesContext);

	return (
		<ExpensesOutput
			expenses={expensesContext.expenses}
			expensesPeriod='Total'
			fallbackText={'No expenses registered found.'}
		/>
	);
}

export default AllExpenses;
