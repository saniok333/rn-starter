import { StyleSheet, View, Text, TextInput } from 'react-native';

export const BoxScreen = () => {
  return (
    <View style={styles.parentViewStyle}>
      <View style={[styles.viewStyle, styles.viewStyle1]} />
      <View style={[styles.viewStyle, styles.viewStyle2]} />
      <View style={[styles.viewStyle, styles.viewStyle3]} />
    </View>
  );
};

const styles = StyleSheet.create({
  parentViewStyle: {
    borderWidth: 1,
    borderColor: 'black',
    flexDirection: 'row',
    height: 200,
    justifyContent: 'space-between',
  },
  viewStyle: {
    width: 100,
    height: 100,
  },
  viewStyle1: { backgroundColor: 'red' },
  viewStyle2: { backgroundColor: 'green', alignSelf: 'flex-end' },
  viewStyle3: { backgroundColor: 'blue' },
});
