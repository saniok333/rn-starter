import { StyleSheet, Text, View } from 'react-native';

export const ComponentsScreen = () => {
  const myName = 'Sasha';
  return (
    <View>
      <Text style={styles.textStyle1}>Components Screen</Text>
      <Text style={styles.textStyle2}>My name is {myName}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  textStyle1: {
    fontSize: 45,
  },
  textStyle1: {
    fontSize: 20,
  },
});
