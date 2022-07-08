import { useState } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

export const CounterScreen = () => {
  const [counter, setCounter] = useState(0);
  return (
    <View>
      <Button
        title="Increase"
        onPress={() => {
          setCounter((currentCounter) => currentCounter + 1);
        }}
      />
      <Button
        title="Decrease"
        onPress={() => {
          setCounter((currentCounter) => currentCounter - 1);
        }}
      />
      <Text>Current Count: {counter}</Text>
    </View>
  );
};

const styles = StyleSheet.create({});
