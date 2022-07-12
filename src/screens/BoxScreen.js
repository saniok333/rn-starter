import { StyleSheet, View, Text, TextInput } from 'react-native';

export const BoxScreen = () => {
  return (
    <View style={styles.viewStyle}>
      <Text style={[styles.textStyle, styles.textStyle1]}>Child #1</Text>
      <Text style={[styles.textStyle, styles.textStyle2]}>Child #2</Text>
      <Text style={[styles.textStyle, styles.textStyle3]}>Child #3</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  viewStyle: {
    borderWidth: 1,
    borderColor: 'black',
    height: 200,
  },
  textStyle: {
    borderWidth: 3,
    borderColor: 'red',
  },
  textStyle1: {
    flex: 1,
  },
  textStyle2: {
    flex: 1,
    ...StyleSheet.absoluteFillObject,
    // position: 'absolute',
    // top: 0,
    // bottom: 0,
    // left: 0,
    // right: 0,
  },
  textStyle3: {
    flex: 1,
  },
});
