import { StatusBar } from 'expo-status-bar';
import { useState, useEffect } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  Button,
  Image,
  Platform
} from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import {path} from 'path';
import {fs} from 'react-native-fs';

import { uploadPhoto } from '../../../server/s3Bucket';

/*
 AWS_ACCESS_KEY_ID
 AWS_SECRET_ACCESS_KEY
 Bucket name
 Region

*/






const AwsS3POCView = () => {
  const [image, setimage] = useState(null);
  const [uploadSuccessMessage, setUploadSuccessMessage] = useState('');
  const fileDetails = {
    Key: '',
    Body: ''
  }
  const pickImage = async () => {
    // No permissions request is necessary for launching the image library
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    console.log(result);

    if (!result.cancelled) {
      setimage(result.uri);
      const fileStream = fs.createReadStream(result.uri);
      fileDetails.Key = path.basename(result.uri);
      fileDetails.Body = fileStream;
    }
  };

  const callUploadPhoto = async() =>{
      uploadPhoto(fileDetails);
  }


  return (
    <View style={styles.container}>
      <Text >
        How to Upload any File or Image to AWS S3 Bucket{'\n'}
        from React Native App
      </Text>
      <View style={styles.container}>
        {uploadSuccessMessage ? (
          <Text >
            {uploadSuccessMessage}
          </Text>
        ) : null}
      <Button title="Pick an image from camera roll" onPress={pickImage} />
      {image && 
      <>
      <Image source={{ uri: image }} style={{ width: 200, height: 200 }} />
      <Button title="Upload image" onPress={pickImage} />
      </>
      }
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default AwsS3POCView;
