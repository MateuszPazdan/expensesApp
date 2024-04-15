import { FlatList, StyleSheet, Text, View } from 'react-native';
import { GlobalStyles } from '../../constants/styles';
import ExpenseItem from './ExpenseItem';

function renderExpenseItem(itemData) {
	return <ExpenseItem itemData={itemData} />;
}

function ExpensesList({ expenses }) {
	return (
		<FlatList
			data={expenses}
			renderItem={renderExpenseItem}
			keyExtractor={(item) => item.id}
			style={styles.container}
			contentContainerStyle={{ paddingBottom: 15 }}
		/>
	);
}

export default ExpensesList;

const styles = StyleSheet.create({
	container: { paddingVertical: 10 },
});
