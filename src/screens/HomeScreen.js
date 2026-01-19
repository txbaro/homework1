import { View, TouchableOpacity, Text, StyleSheet } from "react-native";

export default function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate("Login")}
      >
        <Text style={styles.text}>Login</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate("Register")}
      >
        <Text style={styles.text}>Register</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate("Task2")}
      >
        <Text style={styles.text}>Task 2</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: "center", padding: 30 },
  button: {
    backgroundColor: "#1e3a8a",
    padding: 14,
    borderRadius: 10,
    marginBottom: 15,
  },
  text: { color: "#fff", textAlign: "center", fontSize: 16 },
});
