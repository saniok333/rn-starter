import { StyleSheet, FlatList, Text } from 'react-native';

export const ListScreen = () => {
  const friends = [
    { name: 'Friend #1', age: 20 },
    { name: 'Friend #2', age: 30 },
    { name: 'Friend #3', age: 50 },
    { name: 'Friend #4', age: 34 },
    { name: 'Friend #5', age: 35 },
    { name: 'Friend #6', age: 54 },
    { name: 'Friend #7', age: 13 },
    { name: 'Friend #8', age: 23 },
    { name: 'Friend #9', age: 37 },
    { name: 'Friend #10', age: 55 },
  ];
  return (
    <FlatList
      data={friends}
      renderItem={({ item }) => (
        <Text style={styles.textStyle}>
          {item.name} - Age {item.age}
        </Text>
      )}
      keyExtractor={(friend) => friend.name}
    />
  );
};

const styles = StyleSheet.create({
  textStyle: {
    marginVertical: 50,
  },
});
