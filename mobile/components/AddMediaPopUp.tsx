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

	function uploadMedia() {
		/* upload the image or video */
		//////////////////////////////

		/* Then, close the pop-up */
		setVisible(false);
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
						
						mediaURI && mediaType === "image" ?
							<View style={{width: '80%'}}>
								<Image source={{ uri: mediaURI }} style={styles.image}/>
							</View>
						: null
					}
					{
						mediaURI && mediaType === "video" ?
							<View style={{width: '80%', height: 190}}>
								<VideoPlayer controls={true} source={{ uri: mediaURI }} style={styles.video}/>
							</View>
						: null
					}
					{
						!mediaURI ?
							<TouchableOpacity onPress={pickMedia}>
								<Feather name="camera-off" size={150} color="#C5C6D0" />
							</TouchableOpacity>
						: null
					}
					{
						mediaURI ?
                            <>
                                <TouchableOpacity style={[styles.changeMediaButton, {backgroundColor: 'black'}]} onPress={pickMedia}>
                                    <Text style={styles.changeMediaText}>Change</Text>
                                </TouchableOpacity>
                                <TouchableOpacity style={[styles.addMediaButton, {backgroundColor: 'black'}]} onPress={uploadMedia}>
                                    <Text style={styles.addMediaText}>Upload</Text>
                                </TouchableOpacity>
                            </>
						:
							<View style={[styles.addMediaButton, {backgroundColor: 'grey', marginTop: 40}]}>
								<Text style={styles.addMediaText}>Upload</Text>
							</View>

					}
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
		marginBottom: 40,
	},

    changeMediaText: {
		fontSize: 18,
		fontWeight: 'bold',
		color: 'white',
	},
    
	addMediaText: {
		fontSize: 18,
		fontWeight: 'bold',
		color: 'white',
	},

    changeMediaButton: {
		width: '55%',
		height: 40,
		marginTop: 40,
		marginBottom: 20,
		justifyContent: 'center',
		alignItems: 'center',
		borderRadius: 22,
	},

	addMediaButton: {
		width: '55%',
		height: 40,
		marginBottom: 20,
		justifyContent: 'center',
		alignItems: 'center',
		borderRadius: 22,
	},

	image: {
		aspectRatio: 1,
	},
	
	video: {
		width: '100%',
		height: '100%',
	},
});
////////////////////////////////////////