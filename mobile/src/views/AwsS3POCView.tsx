import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

/*
 AWS_ACCESS_KEY_ID
 AWS_SECRET_ACCESS_KEY
 Bucket name
 Region

*/


const AwsS3POCView = () => {
  return (
    <View style={styles.container}>
      <Text>AWS S3 POC</Text>
      <StatusBar style="auto" />
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
