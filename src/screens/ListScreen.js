import { FlatList, Text, View, StyleSheet } from "react-native";
import { useEffect, useState } from "react";

export default function ListScreen() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/todos")
      .then((res) => res.json())
      .then(setData);
  }, []);

  return (
    <FlatList
      data={data}
      keyExtractor={(item) => item.id.toString()}
      renderItem={({ item }) => (
        <View style={styles.card}>
          <Text>User id: {item.userId}</Text>
          <Text>Id: {item.id}</Text>
          <Text>Title: {item.title}</Text>
          <Text>Completed: {item.completed.toString()}</Text>
        </View>
      )}
    />
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#d6a15c",
    margin: 10,
    padding: 10,
    borderRadius: 6,
  },
});
