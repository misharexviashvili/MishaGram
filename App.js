import { Fragment } from "react";
import { SafeAreaView, StyleSheet } from "react-native";
import Head from "./components/Head";
import Feed from "./components/Feed";
import { useFonts } from "expo-font";
export default function App() {
  const [fontsLoaded] = useFonts({
    Vegan: require("./assets/fonts/VeganStylePersonalUse-5Y58.ttf"),
  });

  if (!fontsLoaded) return;

  return (
    <Fragment>
      <SafeAreaView style={styles.container}>
        <Head />
      </SafeAreaView>
      <Feed />
    </Fragment>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    paddingTop: 20,
    paddingLeft: 20,
  },
});
