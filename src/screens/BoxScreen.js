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
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  textStyle: {
    borderWidth: 3,
    borderColor: 'red',
  },
  textStyle1: {
    flex: 1,
    //alignSelf: 'flex-start',
  },
  textStyle2: {
    flex: 2,
    alignSelf: 'flex-end',
    position: 'absolute',
  },
  textStyle3: {
    flex: 1,
    //alignSelf: 'flex-end',
  },
});
