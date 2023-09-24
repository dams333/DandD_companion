import React from 'react';
import {SafeAreaView, StatusBar, StyleProp, ViewStyle} from 'react-native';
import Router from './router/Router';

const areaStyle = {
	height: '100%',
} as StyleProp<ViewStyle>;

function App() {
	return (
		<SafeAreaView style={areaStyle}>
			<StatusBar barStyle="dark-content" />
			<Router />
		</SafeAreaView>
	);
}

export default App;
