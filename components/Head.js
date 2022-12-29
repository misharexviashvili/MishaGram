import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Image } from "react-native";

export default function Head() {
  return (
    <View style={styles.container}>
      <View>
        <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
          <Text style={styles.text}>
            MishaGram &#8964;
          </Text>
          <View style={styles.imageContainer}>
            <Image
              style={styles.image}
              source={{
                uri: "https://pixlok.com/wp-content/uploads/2021/12/Instagram-Add-Icon-09i3c.png",
              }}
            />
            <Image
              style={styles.image}
              source={{
                uri: "https://i.pinimg.com/originals/50/9e/af/509eaf4abcbd88d8e1fc4a9734cd9e2e.png",
              }}
            />
            <Image
              style={styles.image}
              source={{
                uri: "https://cdn3.iconfinder.com/data/icons/object-sign-symbol-line/64/speech_bubble_dialog_chat_symbol-512.png",
              }}
            />
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    paddingTop: 20,
  },
  text: {
    color: "black",
    fontSize: 25,
    fontFamily:"BeautifulPeople"
  },
  imageContainer: {
    flexDirection: "row",
  },
  image: {
    width: 30,
    height: 30,
    marginRight: 15,
  },
});
