import { StatusBar } from "expo-status-bar";
import { Fragment } from "react";
import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import Head from "./components/Head";
import ImageCarousel from "./components/ImageCarousel";

export default function App() {
  return (
    <Fragment>
      <SafeAreaView style={styles.container}>
        <Head />
        {/* <StatusBar style="auto" /> */}
      </SafeAreaView>
      <ImageCarousel />
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
