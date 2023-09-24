import React from 'react';
import {View, Text} from 'react-native';
import styles from './CreatePerso.styles';
import SelectDropdown from 'react-native-select-dropdown';

const races = [
	{slug: 'humain', name: 'Humain'},
	{slug: 'elfe', name: 'Elfe'},
];

function BasicPhase({perso, setPerso}) {
	return (
		<View style={styles.container}>
			<SelectDropdown
				data={races}
				defaultButtonText="Race"
				onSelect={selectedItem => {
					console.log(selectedItem.slug);
				}}
				rowTextForSelection={item => item.name}
				buttonTextAfterSelection={item => item.name}
			/>
		</View>
	);
}

export default BasicPhase;
