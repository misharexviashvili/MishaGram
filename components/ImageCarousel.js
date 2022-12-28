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
    <ScrollView
      horizontal={true}
      style={styles.scroll}
      contentContainerStyle={{
        paddingRight: 20,
      }}
    >
      <View style={styles.imageTextContainer}>
        <View style={styles.roundSpace}>
          <Image
            style={styles.image}
            source={{
              uri: "https://www.cdc.gov/healthypets/images/pets/cute-dog-headshot.jpg?_=42445",
            }}
          />
        </View>
        <Text>Your story</Text>
      </View>

      <View style={styles.imageTextContainer}>
        <View style={styles.roundSpace}>
          <Image
            style={styles.image}
            source={{
              uri: "https://media-cldnry.s-nbcnews.com/image/upload/rockcms/2022-08/220805-border-collie-play-mn-1100-82d2f1.jpg",
            }}
          />
        </View>
        <Text>Cute dog 1</Text>
      </View>

      <View style={styles.imageTextContainer}>
        <View style={styles.roundSpace}>
          <Image
            style={styles.image}
            source={{
              uri: "https://www.princeton.edu/sites/default/files/styles/half_2x/public/images/2022/02/KOA_Nassau_2697x1517.jpg?itok=iQEwihUn",
            }}
          />
        </View>
        <Text>Cute dog 2</Text>
      </View>

      <View style={styles.imageTextContainer}>
        <View style={styles.roundSpace}>
          <Image
            style={styles.image}
            source={{
              uri: "https://cdn.britannica.com/49/161649-050-3F458ECF/Bernese-mountain-dog-grass.jpg",
            }}
          />
        </View>
        <Text>Cute dog 3</Text>
      </View>

      <View style={styles.imageTextContainer}>
        <View style={styles.roundSpace}>
          <Image
            style={styles.image}
            source={{
              uri: "https://www.thekennelclub.org.uk/media/5094/husky-puppy.jpg?mode=pad&width=1000&rnd=132957079670000000",
            }}
          />
        </View>
        <Text>Cute dog 4</Text>
      </View>

      <View style={styles.imageTextContainer}>
        <View style={styles.roundSpace}>
          <Image
            style={styles.image}
            source={{
              uri: "https://www.travelandleisure.com/thmb/6xTNZI_Hd_oEXieQdZXAVjgtla8=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/corgi-dog-POPDOGNAME1020-ebc7e573ca6e476b859c6092ac8589a4.jpg",
            }}
          />
        </View>
        <Text>Cute dog 5</Text>
      </View>

      <View style={styles.imageTextContainer}>
        <View style={styles.roundSpace}>
          <Image
            style={styles.image}
            source={{
              uri: "https://townofbeekmantown.com/wp-content/uploads/2019/06/2-dog.jpg",
            }}
          />
        </View>
        <Text>Cute dog 6</Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  scroll: {
    paddingTop: 30,
    paddingLeft: 20,
    paddingRight: 20,
  },
  imageTextContainer: {
    marginRight: 20,
    alignItems: "center",
  },
  roundSpace: {
    backgroundColor: "white",
    borderRadius: 50,
    padding: 5,
    // alignSelf: "flex-start",
    borderColor: "#C8C8C8",
    borderWidth: 1,
  },
  image: {
    width: 56,
    height: 56,
    borderRadius: 50,
  },
});
