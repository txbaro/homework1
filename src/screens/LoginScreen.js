import {
  View,
  TextInput,
  Text,
  TouchableOpacity,
  StyleSheet,
} from "react-native";

export default function LoginScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text>Email</Text>
      <TextInput style={styles.input} placeholder="Enter email" />
      <Text>Password</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter password"
        secureTextEntry
      />

      <TouchableOpacity
        style={styles.button}
        onPress={() =>
          navigation.navigate("Profile", {
            message: "Successfully logged in",
          })
        }
      >
        <Text style={styles.text}>Sign in</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { padding: 24 },
  input: {
    borderWidth: 1,
    padding: 10,
    marginBottom: 12,
    borderRadius: 6,
  },
  button: {
    backgroundColor: "#1e3a8a",
    padding: 14,
    borderRadius: 10,
  },
  text: { color: "#fff", textAlign: "center" },
});
