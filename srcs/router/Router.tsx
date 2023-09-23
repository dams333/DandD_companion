import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {ImageBackground} from 'react-native';
import Home from '../views/Home';

const areaStyle = {
	height: '100%',
};

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
					{navigation => (
						<ImageBackground
							source={require('../../assets/paper_background.jpeg')}
							resizeMode="cover"
							style={areaStyle}>
							<Home navigation={navigation} />
						</ImageBackground>
					)}
				</Stack.Screen>
			</Stack.Navigator>
		</NavigationContainer>
	);
}

export default Router;
