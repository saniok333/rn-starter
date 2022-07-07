import { StyleSheet, Text, View, Image } from 'react-native';

export const ImageDetail = ({ title, imageSource, score }) => {
  return (
    <View>
      <Image source={imageSource} />
      <Text>{title}</Text>
      <Text>Image score - {score}</Text>
    </View>
  );
};

const styles = StyleSheet.create({});
