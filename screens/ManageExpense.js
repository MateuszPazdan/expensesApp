import { useRoute } from '@react-navigation/native';
import { useContext, useLayoutEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import IconButton from '../components/ui/IconButton';
import { GlobalStyles } from '../constants/styles';
import Button from '../components/ui/Button';
import { ExpensesContext } from '../context/expensesContext';

function ManageExpense({ route, navigation }) {
	const expensesContext = useContext(ExpensesContext);

	editedExpenseId = route.params?.expenseId;
	const isEditing = !!editedExpenseId;

	useLayoutEffect(() => {
		navigation.setOptions({
			title: isEditing ? 'Edit Expense' : 'Add Expense',
		});
	}, [navigation, isEditing]);

	function cancelHandler() {
		navigation.goBack();
	}

	function confirmHandler() {
		if (isEditing) {
			expensesContext.updateExpense(editedExpenseId, {
				description: 'Buty pawla',
				amount: 997.69,
				date: new Date(),
			});
		} else {
			expensesContext.addExpense({
				description: 'Buty pawla',
				amount: 997.69,
				date: new Date(),
			});
		}
		navigation.goBack();
	}

	function deleteExpenseHandler() {
		expensesContext.deleteExpense(editedExpenseId);
		navigation.goBack();
	}

	return (
		<View style={styles.container}>
			<View style={styles.buttons}>
				<Button onPress={cancelHandler} mode={'flat'} style={styles.button}>
					Cancel
				</Button>
				<Button onPress={confirmHandler} style={styles.button}>
					{isEditing ? 'Update' : 'Add'}
				</Button>
			</View>
			{isEditing && (
				<View style={styles.deleteContainer}>
					<IconButton
						icon={'trash'}
						color={GlobalStyles.colors.error500}
						size={26}
						onPress={deleteExpenseHandler}
					/>
				</View>
			)}
		</View>
	);
}

export default ManageExpense;

const styles = StyleSheet.create({
	container: {
		flex: 1,
		padding: 24,
	},
	buttons: {
		flexDirection: 'row',
		justifyContent: 'center',
		alignItems: 'center',
	},
	button: { minWidth: 120, marginHorizontal: 8 },
	deleteContainer: {
		marginTop: 16,
		paddingTop: 8,
		borderTopWidth: 2,
		borderTopColor: GlobalStyles.colors.primary200,
		alignItems: 'center',
	},
});
