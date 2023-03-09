import { StyleSheet, Text, View } from "react-native";
import { Link } from 'expo-router';
  
export default function Page() {
  
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Hello World</Text>
      <Link href="/profile" style={styles.link}>Go to Profile</Link>

      <Link href="/products/5" style={styles.link}>See Product</Link>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: 'center',
    padding: 24,
  },
  title: {
    fontSize: 64,
    fontWeight: "bold",
  }, 
  link: {
    backgroundColor: '#007ac1',
    color: '#fff',
    fontWeight: 'bold',
    padding: 10,
    borderRadius: 3,
    borderWidth: 0,
    textTransform: 'uppercase',
    marginBottom: 20
  }
});
