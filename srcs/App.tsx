import React from 'react';
import {SafeAreaView, StatusBar} from 'react-native';
import Router from './router/Router';

const areaStyle = {
	height: '100%',
};

function App() {
	return (
		<SafeAreaView style={areaStyle}>
			<StatusBar barStyle="dark-content" />
			<Router />
		</SafeAreaView>
	);
}

export default App;
