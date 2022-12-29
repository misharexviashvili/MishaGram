import { StyleSheet, Text, View, Image, FlatList } from "react-native";

export default function ImageCarousel() {
  const dummyData = [
    {
      uri: "https://www.cdc.gov/healthypets/images/pets/cute-dog-headshot.jpg?_=42445",
      name: "Your story",
      self: true,
    },
    {
      uri: "https://media-cldnry.s-nbcnews.com/image/upload/rockcms/2022-08/220805-border-collie-play-mn-1100-82d2f1.jpg",
      name: "Cute dog 1",
      story: true,
    },
    {
      uri: "https://www.princeton.edu/sites/default/files/styles/half_2x/public/images/2022/02/KOA_Nassau_2697x1517.jpg?itok=iQEwihUn",
      name: "Cute dog 2",
    },
    {
      uri: "https://cdn.britannica.com/49/161649-050-3F458ECF/Bernese-mountain-dog-grass.jpg",
      name: "Cute dog 3",
    },
    {
      uri: "https://www.thekennelclub.org.uk/media/5094/husky-puppy.jpg?mode=pad&width=1000&rnd=132957079670000000",
      name: "Cute dog 4",
    },
    {
      uri: "https://www.travelandleisure.com/thmb/6xTNZI_Hd_oEXieQdZXAVjgtla8=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/corgi-dog-POPDOGNAME1020-ebc7e573ca6e476b859c6092ac8589a4.jpg",
      name: "Cute dog 5",
    },
    {
      uri: "https://townofbeekmantown.com/wp-content/uploads/2019/06/2-dog.jpg",
      name: "Cute dog 6",
    },
  ];
  return (
    <View style={styles.scroll}>
      <FlatList
        horizontal
        showsHorizontalScrollIndicator={false}
        data={dummyData}
        renderItem={({ item }) => {
          return (
            <View style={styles.imageTextContainer}>
              <View
                style={[
                  styles.roundSpace,
                  item.story ? { borderColor: "#eb4f34" } : {},
                ]}
              >
                <Image
                  style={styles.image}
                  source={{
                    uri: item.uri,
                  }}
                />
              </View>
              <Text style={[styles.text, item.self ? { color: "#000" } : {}]}>
                {item.name}
              </Text>
            </View>
          );
        }}
        keyExtractor={(item) => item.uri}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  scroll: {
    paddingTop: 26,
  },
  imageTextContainer: {
    alignItems: "center",
    marginLeft: 20,
  },
  roundSpace: {
    backgroundColor: "white",
    borderRadius: 50,
    padding: 5,
    borderColor: "#C8C8C8",
    borderWidth: 1,
  },
  image: {
    width: 56,
    height: 56,
    borderRadius: 50,
  },
  text: {
    color: "#777",
  },
});
