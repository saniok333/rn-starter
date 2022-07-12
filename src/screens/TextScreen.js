import { useState } from 'react';
import { StyleSheet, View, Text, TextInput } from 'react-native';

export const TextScreen = () => {
  const [password, setPassword] = useState('');
  return (
    <View>
      <Text>Enter password</Text>
      <TextInput
        style={styles.input}
        autoCapitalize="none"
        autoCorrect={false}
        value={password}
        onChangeText={(newValue) => setPassword(newValue)}
      />
      {password.length < 5 && (
        <Text>Password must be longer than 5 characters</Text>
      )}
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
