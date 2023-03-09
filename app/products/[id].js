import { Button, StyleSheet, Text, View } from "react-native";
import { Link, useNavigation, useSearchParams  } from 'expo-router';

export default function Page({ route }) {
  const navigation = useNavigation();

  const { id } = useSearchParams();

  function goBack() {
    navigation.goBack()
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Product { id }</Text>
      <Button title="Voltar" onPress={goBack}/>
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
