import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import AllExpenses from './screens/AllExpenses';
import RecentExpenses from './screens/RecentExpenses';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ManageExpense from './screens/ManageExpense';
import { GlobalStyles } from './constants/styles';
import { Ionicons } from '@expo/vector-icons';
import IconButton from './components/ui/IconButton';

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

function ExpensesOverview() {
	return (
		<Tab.Navigator
			screenOptions={{
				headerStyle: {
					backgroundColor: GlobalStyles.colors.primary500,
				},
				headerTintColor: 'white',
				tabBarStyle: {
					backgroundColor: GlobalStyles.colors.primary500,
				},
				tabBarActiveTintColor: GlobalStyles.colors.accent500,
				headerRight: ({ tintColor }) => (
					<IconButton
						size={24}
						color={tintColor}
						icon='add'
						onPress={() => {
							console.log('pawel');
						}}
					/>
				),
			}}
		>
			<Tab.Screen
				name='RecentExpenses'
				component={RecentExpenses}
				options={{
					title: 'Recent Expenses',
					tabBarLabel: 'Recent',
					tabBarIcon: ({ color, size }) => (
						<Ionicons name='hourglass' size={size} color={color} />
					),
				}}
			/>
			<Tab.Screen
				name='AllExpenses'
				component={AllExpenses}
				options={{
					title: 'All Expenses',
					tabBarIcon: ({ color, size }) => (
						<Ionicons name='calendar' size={size} color={color} />
					),
				}}
			/>
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
						options={{
							headerShown: false,
						}}
					/>
					<Stack.Screen name='ManageExpense' component={ManageExpense} />
				</Stack.Navigator>
			</NavigationContainer>
			<StatusBar style='light' />
		</>
	);
}

const styles = StyleSheet.create({
	container: {
		backgroundColor: 'orange',
	},
});
