import {StyleProp, ViewStyle} from 'react-native';

// @ts-ignore
export default styles = {
	container: {
		padding: 20,
		justifyContent: 'center',
		alignItems: 'center',
		flex: 1,
	},
	title: {
		fontSize: 40,
		fontFamily: 'DragonHunter',
	},
	button: {
		marginTop: 20,
		padding: 7,
		borderRadius: 10,
		backgroundColor: '#1E90FF',
	},
	buttonText: {
		color: 'white',
		fontSize: 20,
		fontFamily: 'AvenirNext-Bold',
	},
} as Record<string, StyleProp<ViewStyle>>;
