import { useReducer } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { ColorCounter } from '../components/ColorCounter';

const COLOR_INCREMENT = 15;
const MAX_COLOR_VALUE = 255;
const MIN_COLOR_VALUE = 0;

const reducer = (state, action) => {
  // state === {red: number, green: number, blue: number}
  // action === { type: 'change_red' || 'change_green' || 'change_blue', payload: 15 || -15 }

  const nextValue = state[action.type] + action.payload;

  const calculateValue = () => {
    if (nextValue < MIN_COLOR_VALUE) return MIN_COLOR_VALUE;
    if (nextValue > MAX_COLOR_VALUE) return MAX_COLOR_VALUE;
    return nextValue;
  };

  switch (action.type) {
    case 'change_red':
      return { ...state, red: calculateValue() };
    case 'change_green':
      return { ...state, green: calculateValue() };
    case 'change_blue':
      return { ...state, blue: calculateValue() };
    default:
      return state;
  }
};

export const SquareScreen = () => {
  const [state, dispatch] = useReducer(reducer, {
    red: 125,
    green: 125,
    blue: 125,
  });
  const { red, green, blue } = state;

  return (
    <View>
      <Text>{red}</Text>
      <ColorCounter
        color="Red"
        onIncrease={() =>
          dispatch({ type: 'change_red', payload: COLOR_INCREMENT })
        }
        onDecrease={() =>
          dispatch({ type: 'change_red', payload: -1 * COLOR_INCREMENT })
        }
      />
      <ColorCounter
        color="Green"
        onIncrease={() =>
          dispatch({ type: 'change_green', payload: COLOR_INCREMENT })
        }
        onDecrease={() =>
          dispatch({ type: 'change_green', payload: -1 * COLOR_INCREMENT })
        }
      />
      <ColorCounter
        color="Blue"
        onIncrease={() =>
          dispatch({ type: 'change_blue', payload: COLOR_INCREMENT })
        }
        onDecrease={() =>
          dispatch({ type: 'change_blue', payload: -1 * COLOR_INCREMENT })
        }
      />
      <View
        style={{
          height: 100,
          width: 100,
          backgroundColor: `rgb(${red}, ${green}, ${blue})`,
        }}
      />
    </View>
  );
};
const styles = StyleSheet.create({});
