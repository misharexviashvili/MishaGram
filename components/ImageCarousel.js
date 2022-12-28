import { StatusBar } from "expo-status-bar";
import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
  Image,
} from "react-native";

export default function ImageCarousel() {
  return (
    <ScrollView horizontal={true} style={styles.scroll}>
      <View style={styles.roundSpace}>
        <Image
          style={styles.image}
          source={{
            uri: "https://www.cdc.gov/healthypets/images/pets/cute-dog-headshot.jpg?_=42445",
          }}
        />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  scroll: { paddingTop: 20, paddingLeft: 20 },
  roundSpace: {
    backgroundColor: "white",
    borderRadius: 50,
    padding: 5,
    alignSelf: "flex-start",
    borderColor: "#C8C8C8",
    borderWidth: 1,
  },
  image: {
    width: 50,
    height: 50,
    borderRadius: 50,
  },
});
