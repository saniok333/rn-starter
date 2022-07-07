import { StyleSheet, Text, View } from 'react-native';
import { ImageDetail } from '../components/ImageDetail';

export const ImageScreen = () => {
  return (
    <View>
      <ImageDetail title="Forest" />
      <ImageDetail title="Beach" />
      <ImageDetail title="Mountain" />
    </View>
  );
};

const styles = StyleSheet.create({});
