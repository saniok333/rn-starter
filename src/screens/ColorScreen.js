import { useState } from 'react';
import { StyleSheet, View, Button, FlatList } from 'react-native';

export const ColorScreen = () => {
  const [colors, setColors] = useState([]);
  const randomRgb = () => {
    const red = Math.floor(Math.random() * 256);
    const green = Math.floor(Math.random() * 256);
    const blue = Math.floor(Math.random() * 256);
    return `rgb(${red}, ${green}, ${blue})`;
  };

  return (
    <View>
      <Button
        title="Add a Color"
        onPress={() =>
          setColors((currentColors) => [...currentColors, randomRgb()])
        }
      />
      <FlatList
        keyExtractor={(color) => color}
        data={colors}
        renderItem={({ item }) => (
          <View
            style={{
              height: 100,
              width: 100,
              backgroundColor: item,
            }}
          />
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({});
