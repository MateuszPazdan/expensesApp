import { StyleSheet, Text, View } from 'react-native';
import { GlobalStyles } from '../../constants/styles';

function ExpensesSummary({ expenses, periodName }) {
	const expensesSum = expenses.reduce((sum, expense) => {
		return sum + expense.amount;
	}, 0);
	return (
		<View style={styles.summaryContainer}>
			<Text style={styles.periodName}>{periodName}</Text>
			<Text style={styles.expensesSum}>${expensesSum.toFixed(2)}</Text>
			<View style={styles.accent}></View>
		</View>
	);
}
export default ExpensesSummary;

const styles = StyleSheet.create({
	summaryContainer: {
		gap: 25,
		position: 'relative',
		marginTop: 15,
		alignItems: 'center',
		backgroundColor: 'white',
		elevation: 2,
		borderRadius: 10,
		paddingHorizontal: 15,
		paddingVertical: 30,
		marginHorizontal: 15,
		shadowColor: GlobalStyles.colors.gray500,
		shadowRadius: 4,
		shadowOffset: { width: 1, height: 1 },
		shadowOpacity: 0.4,
		zIndex: 10,
	},
	periodName: { fontSize: 14, color: GlobalStyles.colors.gray300 },
	expensesSum: { fontSize: 32, fontWeight: 'bold' },
	accent: {
		position: 'absolute',
		width: '15%',
		height: 50,
		borderColor: GlobalStyles.colors.accent500,
		borderWidth: 1,
		bottom: 25,
		borderRadius: 35,
		zIndex: -10,
		transform: [{ rotateZ: '0.3rad' }, { scaleX: 3 }],
	},
});
