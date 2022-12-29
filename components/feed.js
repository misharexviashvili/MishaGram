import {
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
} from "react-native";
import ImageCarousel from "./ImageCarousel";
import FeedFooter from "./FeedFooter";
export default function Feed() {
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <ImageCarousel />
      <View style={styles.feedHeader}>
        <View style={styles.profileContainer}>
          <Image
            style={styles.image}
            source={{
              uri: "https://www.hartz.com/wp-content/uploads/2022/04/small-dog-owners-1.jpg",
            }}
          />
          <Text>დუჩმაჩო</Text>
        </View>
        <View>
          <Text style={styles.threeDots}> &#8942;</Text>
        </View>
      </View>
      <Image
        style={styles.feedImage}
        source={{
          uri: "https://scontent.ftbs5-2.fna.fbcdn.net/v/t1.15752-9/321295078_5780439878700078_5425643527021453089_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=ae9488&_nc_eui2=AeFFiW9br0rhyuhh8xeHbeewF5oTbT7bposXmhNtPtumi72jUu_lLTVLKeVCexzIRDEd8n-7Ci3heZ3E3hOv2iEw&_nc_ohc=FEsLHW2gorUAX9ylyT0&tn=ECOsbNtRhCfC98kT&_nc_ht=scontent.ftbs5-2.fna&oh=03_AdTGWCTP7HLpN1amDqUkRn3yx44hWuexHr0Ohw7xFFadEA&oe=63D566D4",
        }}
      />
      <FeedFooter />
      <View style={styles.feedHeader}>
        <View style={styles.profileContainer}>
          <Image
            style={styles.image}
            source={{
              uri: "https://s3.amazonaws.com/cdn-origin-etr.akc.org/wp-content/uploads/2019/01/06092953/Welsh-Springer-Spaniel-puppy-laying-down-in-a-dog-bed-indoors.jpeg",
            }}
          />
          <Text>უკო</Text>
        </View>
        <View>
          <Text style={styles.threeDots}> &#8942;</Text>
        </View>
      </View>
      <Image
        style={styles.feedImage}
        source={{
          uri: "https://scontent.ftbs5-3.fna.fbcdn.net/v/t1.15752-9/322048018_1356726481788539_2395275727888571415_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=ae9488&_nc_eui2=AeFzvXRc-RwEFI3rwIpIz2nv7U-5hnEuw2rtT7mGcS7DapohYmJnB-oN0GAxkvo3wYFye6hTPvol_3p8lUaMJAGk&_nc_ohc=rUQKeLdyLAwAX8bBf6W&_nc_ht=scontent.ftbs5-3.fna&oh=03_AdRSeVFXpUGAi3h4jTGIizhBqgwn4Ov7s6vrnFFjlptG7Q&oe=63D55B70",
        }}
      />
      <FeedFooter />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  feedHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingRight: 18,
    borderColor: "#c0c0c0",
    borderBottomWidth: 1,
    paddingBottom: 10,
  },
  profileContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginLeft: 17,
    paddingTop: 20,
    paddingBottom: 10,
  },
  image: {
    width: 30,
    height: 30,
    borderRadius: 50,
    marginRight: 10,
  },
  threeDots: {
    fontSize: 24,
    transform: [
      {
        translateY: 5,
      },
    ],
  },
  feedImage: {
    width: "100%",
    height: 500,
  },
});
