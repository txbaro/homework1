import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from "react-native";

export default function RegisterScreen({ navigation }) {
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

      <Text>Confirm Password</Text>
      <TextInput
        style={styles.input}
        placeholder="Confirm password"
        secureTextEntry
      />

      <TouchableOpacity
        style={styles.button}
        onPress={() =>
          navigation.navigate("Profile", {
            message: "Successfully registered and logged in",
          })
        }
      >
        <Text style={styles.text}>Sign up</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 24,
    backgroundColor: "#fff",
    flex: 1,
  },
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
  text: {
    color: "#fff",
    textAlign: "center",
  },
});
