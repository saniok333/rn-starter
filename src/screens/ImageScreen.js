import { StyleSheet, Text, View } from 'react-native';
import { ImageDetail } from '../components/ImageDetail';

export const ImageScreen = () => {
  return (
    <View>
      <ImageDetail
        title="Forest"
        imageSource={require('../../assets/images/forest.jpg')}
        score={9}
      />
      <ImageDetail
        title="Beach"
        imageSource={require('../../assets/images/beach.jpg')}
        score={7}
      />
      <ImageDetail
        title="Mountain"
        imageSource={require('../../assets/images/mountain.jpg')}
        score={4}
      />
    </View>
  );
};

const styles = StyleSheet.create({});
