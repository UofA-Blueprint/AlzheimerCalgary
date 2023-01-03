////////// Import Dependencies //////////
import { useState } from 'react';
import * as React from 'react';
import { StyleSheet, Modal, View, Image, TouchableOpacity, Text} from 'react-native';
import * as MediaPicker from 'expo-image-picker';
import VideoPlayer from 'react-native-video-controls';
import { EvilIcons, Feather } from '@expo/vector-icons';
////////////////////////////////////////

/////////// Configurations ///////////
interface Props {
	setVisible: React.Dispatch<React.SetStateAction<boolean>>;
};
//////////////////////////////////////

//////////////// Component //////////////
export default function AddMediaPopUp({ setVisible }: Props) {
	// States //
	const [mediaURI, setMediaURI] = useState('');
	const [mediaType, setMediaType] = useState<string | undefined>('');
	///////////

	// Callbacks //
	const pickMedia = async () => {
		let result = await MediaPicker.launchImageLibraryAsync({
			mediaTypes: MediaPicker.MediaTypeOptions.All,
			allowsEditing: true,
			aspect: [4, 3],
			quality: 1,
		});
		if (!result.cancelled) {
			setMediaURI(result.uri);
			setMediaType(result.type);
		}
	}
	/////////////

	return (
		<Modal transparent>
			<View style={styles.popUpOuterFrame}>
				<View style={styles.popUpInnerFrame}>
					<View style={styles.closeFrame}>
						<TouchableOpacity onPress={() => {setVisible(false)}}><EvilIcons name="close" size={38} color="grey" /></TouchableOpacity>
					</View>
					{
						//<Image source={{ uri: mediaURI }} style={styles.image}/>
						mediaURI && mediaType === "image" ?
							<View style={{width: '90%', height: 220}}>
								<Text>{mediaURI}</Text>
							</View>
						: null
					}
					{
						// <VideoPlayer controls={true} source={{ uri: mediaURI }} style={styles.video}/>
						mediaURI && mediaType === "video" ?
							<View style={{width: '90%', height: 220}}>
								<Text>{mediaURI}</Text>
							</View>
						: null
					}
					{
						!mediaURI ?
							<Feather name="camera-off" size={150} color="#C5C6D0" />
						: null
					}
					<TouchableOpacity style={styles.addMediaButton} onPress={pickMedia}>
						<Text style={styles.addMediaText}>Add Media/File</Text>
					</TouchableOpacity>
				</View>
			</View>
		</Modal>
	);
}
////////////////////////////////////////

///////////////// Styles ////////////////
const styles = StyleSheet.create({
	popUpOuterFrame: {
		flex : 1,
		backgroundColor: 'rgba(0,0,0,0.5)',
		justifyContent: 'center',
		alignItems: 'center',
	},

	popUpInnerFrame: {
		width: 350,
		backgroundColor: 'white',
		alignItems: 'center',
		borderRadius: 15,
	},

	closeFrame: {
		width: '100%',
		height: 40,
		justifyContent: 'center',
		alignItems: 'flex-end',
		paddingRight: 5,
		marginBottom: 60,
	},

	addMediaText: {
		fontSize: 18,
		fontWeight: 'bold',
		color: 'white',
	},

	addMediaButton: {
		width: '70%',
		height: 50,
		marginTop: 40,
		marginBottom: 20,
		justifyContent: 'center',
		alignItems: 'center',
		borderRadius: 22,
		backgroundColor: 'black',
	},

	image: {
		flex: 1,
	},
	
	video: {
		flex: 1,
	},
});
////////////////////////////////////////
