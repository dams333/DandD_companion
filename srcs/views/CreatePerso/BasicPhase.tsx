import React from 'react';
import {View, Text, Pressable} from 'react-native';
import styles from './CreatePerso.styles';
import SelectDropdown from 'react-native-select-dropdown';

const races = [
	{slug: 'human', name: 'Humain'},
	{slug: 'elf', name: 'Elfe'},
	{slug: 'dwarf', name: 'Nain'},
	{slug: 'halfling', name: 'Halfelin'},
];

const classes = [
	{slug: 'barbarian', name: 'Barbare'},
	{slug: 'bard', name: 'Barde'},
	{slug: 'cleric', name: 'Clerc'},
	{slug: 'druid', name: 'Druide'},
	{slug: 'fighter', name: 'Guerrier'},
];

function BasicPhase({
	perso,
	setPerso,
	nextStep,
}: {
	perso: any;
	setPerso: any;
	nextStep: any;
}) {
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
			<SelectDropdown
				data={classes}
				defaultButtonText="Classe"
				onSelect={selectedItem => {
					console.log(selectedItem.slug);
				}}
				rowTextForSelection={item => item.name}
				buttonTextAfterSelection={item => item.name}
			/>
			<Pressable style={styles.button} onPress={nextStep}>
				<Text style={styles.buttonText}>Continuer</Text>
			</Pressable>
		</View>
	);
}

export default BasicPhase;
