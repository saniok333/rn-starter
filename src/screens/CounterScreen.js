import { useReducer } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

const COUNTER_INCREMENT = 1;

const reducer = (state, action) => {
  switch (action.type) {
    case 'increase':
      return { ...state, counter: state.counter + action.payload };
    case 'decrease':
      return { ...state, counter: state.counter - action.payload };
    default:
      return state;
  }
};

export const CounterScreen = () => {
  const [state, dispatch] = useReducer(reducer, { counter: 0 });
  const { counter } = state;
  return (
    <View>
      <Button
        title="Increase"
        onPress={() => {
          dispatch({ type: 'increase', payload: COUNTER_INCREMENT });
        }}
      />
      <Button
        title="Decrease"
        onPress={() => {
          dispatch({ type: 'decrease', payload: COUNTER_INCREMENT });
        }}
      />
      <Text>Current Count: {counter}</Text>
    </View>
  );
};

const styles = StyleSheet.create({});
