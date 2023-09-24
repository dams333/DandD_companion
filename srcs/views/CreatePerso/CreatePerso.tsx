import React from 'react';
import {View, Text} from 'react-native';
import styles from './CreatePerso.styles';

function createPerso({navigation}) {
	return (
		<View>
			<Text style={styles.title}>Personnage</Text>
		</View>
	);
}

export default createPerso;
