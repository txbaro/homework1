import { View, Text, StyleSheet } from "react-native";

export default function ProfileScreen({ route }) {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{route.params.message}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: "center", alignItems: "center" },
  text: { color: "#9ca3af", fontSize: 18 },
});
