import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import AllExpenses from './screens/AllExpenses';
import RecentExpenses from './screens/RecentExpenses';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ManageExpense from './screens/ManageExpense';

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

function ExpensesOverview() {
	return (
		<Tab.Navigator>
			<Tab.Screen name='AllExpenses' component={AllExpenses} />
			<Tab.Screen name='RecentExpenses' component={RecentExpenses} />
		</Tab.Navigator>
	);
}

export default function App() {
	return (
		<>
			<NavigationContainer>
				<Stack.Navigator>
					<Stack.Screen
						name='ExpesesOverview'
						component={ExpensesOverview}
						options={{ headerShown: false }}
					/>
					<Stack.Screen name='ManageExpense' component={ManageExpense} />
				</Stack.Navigator>
			</NavigationContainer>
			<StatusBar />
		</>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff',
		alignItems: 'center',
		justifyContent: 'center',
	},
});
