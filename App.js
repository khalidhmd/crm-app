import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.huge}>CRM</Text>
      <Text style={styles.middle}>Welcome to the app!</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  huge: {
    fontSize: "300%",
    fontWeight: "bold",
  },
  middle: {
    fontSize: "150%",
    fontWeight: "bold",
  },
});
