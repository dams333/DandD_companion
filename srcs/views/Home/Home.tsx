import React from 'react';
import {Text, View, Pressable} from 'react-native';
import styles from './Home.styles';

function Home({navigation}: {navigation: any}) {
	return (
		<View style={styles.container}>
			<Text style={styles.title}>DnD Companion</Text>
			<Pressable
				style={styles.button}
				onPress={() => navigation.navigate('Create')}>
				<Text style={styles.buttonText}>Créer un personnage</Text>
			</Pressable>
			<Pressable style={styles.button}>
				<Text style={styles.buttonText}>Charger un personnage</Text>
			</Pressable>
			<Pressable style={styles.button}>
				<Text style={styles.buttonText}>Mode MD</Text>
			</Pressable>
			<Pressable style={styles.button}>
				<Text style={styles.buttonText}>Encyclopédie</Text>
			</Pressable>
		</View>
	);
}

export default Home;
