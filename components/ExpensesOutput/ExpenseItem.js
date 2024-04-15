import { Platform, Pressable, StyleSheet, Text, View } from 'react-native';
import { GlobalStyles } from '../../constants/styles';
import { getFormattedDate } from '../../util/date';
import { useNavigation } from '@react-navigation/native';

function ExpenseItem({ itemData }) {
	const navigation = useNavigation();
	function expensePressHandler() {
		navigation.navigate('ManageExpense');
	}

	return (
		<View style={styles.expenseItemContainer}>
			<Pressable
				onPress={() => expensePressHandler()}
				style={({ pressed }) =>
					pressed ? [styles.expenseItem, styles.pressed] : [styles.expenseItem]
				}
				android_ripple={{ color: GlobalStyles.colors.primary500 }}
			>
				<View>
					<Text style={styles.description}>{itemData.item.description}</Text>
					<Text style={styles.date}>
						{getFormattedDate(itemData.item.date)}
					</Text>
				</View>
				<Text style={styles.amount}>${itemData.item.amount.toFixed(2)}</Text>
			</Pressable>
		</View>
	);
}

export default ExpenseItem;

const styles = StyleSheet.create({
	expenseItemContainer: {
		overflow: Platform.OS === 'android' && 'hidden',
		backgroundColor: 'white',
		elevation: 2,
		borderRadius: 10,
		shadowColor: GlobalStyles.colors.gray500,
		shadowRadius: 4,
		shadowOffset: { width: 1, height: 1 },
		shadowOpacity: 0.4,
		marginHorizontal: 15,
		marginBottom: 10,
	},
	expenseItem: {
		flex: 1,
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center',
		paddingHorizontal: 15,
		paddingVertical: 15,
	},
	pressed: { opacity: 0.7 },
	description: {
		fontSize: 18,
		fontWeight: 'bold',
	},
	date: { fontSize: 12 },
	amount: { fontSize: 22 },
});
