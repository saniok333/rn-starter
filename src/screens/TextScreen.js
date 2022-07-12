import { useState } from 'react';
import { StyleSheet, View, Text, TextInput } from 'react-native';

export const TextScreen = () => {
  const [name, setName] = useState('');
  return (
    <View>
      <Text>Enter your name</Text>
      <TextInput
        style={styles.input}
        autoCapitalize="none"
        autoCorrect={false}
        value={name}
        onChangeText={(newValue) => setName(newValue)}
      />
      <Text>My name is {name}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    margin: 15,
    borderColor: 'black',
    borderWidth: 1,
  },
});
