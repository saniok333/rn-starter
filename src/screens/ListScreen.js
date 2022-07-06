import { StyleSheet, FlatList, Text } from 'react-native';

export const ListScreen = () => {
  const friends = [
    { name: 'Friend #1' },
    { name: 'Friend #2' },
    { name: 'Friend #3' },
    { name: 'Friend #4' },
    { name: 'Friend #5' },
    { name: 'Friend #6' },
    { name: 'Friend #7' },
    { name: 'Friend #8' },
    { name: 'Friend #9' },
    { name: 'Friend #10' },
  ];
  return (
    <FlatList
      data={friends}
      renderItem={({ item }) => <Text>{item.name}</Text>}
      keyExtractor={(friend) => friend.name}
    />
  );
};

const styles = StyleSheet.create({});
