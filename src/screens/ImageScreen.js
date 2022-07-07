import { StyleSheet, Text, View } from 'react-native';
import { ImageDetail } from '../components/ImageDetail';

export const ImageScreen = () => {
  return (
    <View>
      <ImageDetail />
      <ImageDetail />
      <ImageDetail />
      <ImageDetail />
    </View>
  );
};

const styles = StyleSheet.create({});
