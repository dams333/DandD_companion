import React from 'react';
import {View, Text, Pressable} from 'react-native';
import styles from './CreatePerso.styles';
import BasicPhase from './BasicPhase';

enum Phase {
	Basic,
	P2,
}

const areaStyle = {
	height: '100%',
};

function CreatePerso({navigation}) {
	const [phase, setPhase] = React.useState<Phase>(Phase.Basic);
	const [perso, setPerso] = React.useState<any>({});
	return (
		<View style={areaStyle}>
			<Text style={styles.title}>Personnage</Text>
			{phase === Phase.Basic && (
				<BasicPhase
					perso={perso}
					setPerso={setPerso}
					nextStep={() => setPhase(Phase.P2)}
				/>
			)}
		</View>
	);
}

export default CreatePerso;
