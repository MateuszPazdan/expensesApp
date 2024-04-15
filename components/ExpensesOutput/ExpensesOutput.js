import { StyleSheet, Text, View } from 'react-native';
import ExpensesSummary from './ExpensesSummary';
import ExpensesList from './ExpensesList';
import { GlobalStyles } from '../../constants/styles';
import { LinearGradient } from 'expo-linear-gradient';

function ExpensesOutput({ expenses, expensesPeriod, fallbackText }) {
	let content = <Text style={styles.info}>{fallbackText}</Text>;
	if (expenses.length > 0) {
		content = <ExpensesList expenses={expenses} />;
	}
	return (
		<View style={styles.root}>
			<LinearGradient
				colors={['transparent', 'transparent', 'rgba(247, 188, 12, 0.3)']}
				style={styles.background}
			/>
			<View style={styles.container}>
				<ExpensesSummary expenses={expenses} periodName={expensesPeriod} />
				{content}
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

	info: { color: 'black', fontSize: 16, textAlign: 'center', marginTop: 32 },
});
