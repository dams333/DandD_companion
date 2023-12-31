import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {ImageBackground, StyleProp, ViewStyle} from 'react-native';
import Home from '../views/Home/Home';
import CreatePerso from '../views/CreatePerso/CreatePerso';

const areaStyle = {
	height: '100%',
} as StyleProp<ViewStyle>;

const Stack = createNativeStackNavigator();

function Router() {
	return (
		<NavigationContainer>
			<Stack.Navigator
				initialRouteName="Home"
				screenOptions={{
					headerShown: false,
				}}>
				<Stack.Screen name="Home">
					{({navigation}) => (
						<ImageBackground
							source={require('../../assets/paper_background.jpeg')}
							resizeMode="cover"
							style={areaStyle}>
							<Home navigation={navigation} />
						</ImageBackground>
					)}
				</Stack.Screen>
				<Stack.Screen name="Create">
					{({navigation}) => (
						<ImageBackground
							source={require('../../assets/paper_background.jpeg')}
							resizeMode="cover"
							style={areaStyle}>
							<CreatePerso navigation={navigation} />
						</ImageBackground>
					)}
				</Stack.Screen>
			</Stack.Navigator>
		</NavigationContainer>
	);
}

export default Router;
