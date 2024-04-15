import { StyleSheet, View } from 'react-native';
import ExpensesSummary from './ExpensesSummary';
import ExpensesList from './ExpensesList';
import { GlobalStyles } from '../../constants/styles';
import { LinearGradient } from 'expo-linear-gradient';

const DUMMY_EXPENSES = [
	{
		id: 'e1',
		description: 'A pair of shoes',
		amount: 59.99,
		date: new Date('2024-04-10'),
	},
	{
		id: 'e2',
		description: 'A pair of trousers',
		amount: 52.15,
		date: new Date('2024-03-10'),
	},
	{
		id: 'e3',
		description: 'A T-shirt',
		amount: 12.9,
		date: new Date('2024-03-25'),
	},
	{
		id: 'e4',
		description: 'A Book',
		amount: 5.2,
		date: new Date('2024-03-30'),
	},
	{
		id: 'e5',
		description: 'A pair of shoes',
		amount: 59.99,
		date: new Date('2024-04-10'),
	},
	{
		id: 'e6',
		description: 'A pair of trousers',
		amount: 52.15,
		date: new Date('2024-03-10'),
	},
	{
		id: 'e7',
		description: 'A T-shirt',
		amount: 12.9,
		date: new Date('2024-03-25'),
	},
	{
		id: 'e8',
		description: 'A Book',
		amount: 5.2,
		date: new Date('2024-03-30'),
	},
];

function ExpensesOutput({ expenses, expensesPeriod }) {
	return (
		<View style={styles.root}>
			<LinearGradient
				colors={['transparent', 'transparent', 'rgba(247, 188, 12, 0.3)']}
				style={styles.background}
			/>
			<View style={styles.container}>
				<ExpensesSummary
					expenses={DUMMY_EXPENSES}
					periodName={expensesPeriod}
				/>
				<ExpensesList expenses={DUMMY_EXPENSES} />
			</View>
		</View>
	);
}

export default ExpensesOutput;

const styles = StyleSheet.create({
	root: {
		flex: 1,
	},
	container: {
		flex: 1,
		// gap: 35,
		zIndex: 5,
	},
	background: {
		position: 'absolute',
		left: 0,
		right: 0,
		top: 0,
		height: '100%',
		zIndex: -5,
		transform: [{ rotate: '0.7rad' }, { scaleX: 2 }, { scaleY: 1.2 }],
	},
});
