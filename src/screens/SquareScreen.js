import { useState } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { ColorCounter } from '../components/ColorCounter';

export const SquareScreen = () => {
  const [redCounter, setRedCounter] = useState(125);
  const [greenCounter, setGreenCounter] = useState(125);
  const [blueCounter, setBlueCounter] = useState(125);

  return (
    <View>
      <Text>{redCounter}</Text>
      <ColorCounter color="Red" setter={setRedCounter} />
      <Text>{greenCounter}</Text>
      <ColorCounter color="Green" setter={setGreenCounter} />
      <Text>{blueCounter}</Text>
      <ColorCounter color="Blue" setter={setBlueCounter} />
      <View
        style={{
          height: 100,
          width: 100,
          backgroundColor: `rgb(${redCounter}, ${greenCounter}, ${blueCounter})`,
        }}
      />
    </View>
  );
};
const styles = StyleSheet.create({});
