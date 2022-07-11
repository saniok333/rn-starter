import { StyleSheet, View, Text, Button } from 'react-native';

export const ColorCounter = ({ color, setter }) => {
  const COLOR_INCREMENT = 5;
  const MAX_COLOR_VALUE = 255;
  const MIN_COLOR_VALUE = 0;
  const increaseColorValue = () => {
    setter((currentCounter) =>
      currentCounter + COLOR_INCREMENT > MAX_COLOR_VALUE
        ? MAX_COLOR_VALUE
        : currentCounter + COLOR_INCREMENT
    );
  };
  const decreaseColorValue = () => {
    setter((currentCounter) =>
      currentCounter - COLOR_INCREMENT < MIN_COLOR_VALUE
        ? MIN_COLOR_VALUE
        : currentCounter - COLOR_INCREMENT
    );
  };
  return (
    <View>
      <Text>{color}</Text>
      <Button title={`Increase ${color}`} onPress={increaseColorValue} />
      <Button title={`Decrease ${color}`} onPress={decreaseColorValue} />
    </View>
  );
};

const styles = StyleSheet.create({});
