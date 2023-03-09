import { Button, StyleSheet, Text, View } from "react-native";
import { Link, useNavigation } from 'expo-router';

export default function Page() {
  const navigation = useNavigation();

  function goBack() {
    navigation.goBack()
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Profile Page</Text>
      <Button title="Go Back" onPress={goBack}/>
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
  }
});
