import React from 'react';
import {
	ScrollView,
	Text,
	SafeAreaView,
	View,
	ImageBackground,
	StatusBar,
	Pressable,
} from 'react-native';
import styles from './App.styles';

function App() {
	return (
		<SafeAreaView style={styles.fullHeight}>
			<StatusBar barStyle="dark-content" />
			<ImageBackground
				source={require('../assets/paper_background.jpeg')}
				resizeMode="cover"
				style={styles.fullHeight}>
				<ScrollView
					contentInsetAdjustmentBehavior="automatic"
					style={styles.fullHeight}>
					<View style={styles.container}>
						<Text style={styles.title}>DnD Companion</Text>
						<Pressable style={styles.button}>
							<Text style={styles.buttonText}>
								Créer un personnage
							</Text>
						</Pressable>
						<Pressable style={styles.button}>
							<Text style={styles.buttonText}>
								Charge un personnage
							</Text>
						</Pressable>
						<Pressable style={styles.button}>
							<Text style={styles.buttonText}>Mode MD</Text>
						</Pressable>
						<Pressable style={styles.button}>
							<Text style={styles.buttonText}>Encyclopédie</Text>
						</Pressable>
					</View>
				</ScrollView>
			</ImageBackground>
		</SafeAreaView>
	);
}

export default App;
