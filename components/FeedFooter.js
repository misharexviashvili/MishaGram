import {
  StyleSheet,
  View,
  Image,
} from "react-native";

export default function FeedFooter() {
  return (
    <View style={styles.footer}>
      <View style={styles.iconContainer}>
        <Image
          style={styles.icon}
          source={{
            uri: "https://i.pinimg.com/originals/50/9e/af/509eaf4abcbd88d8e1fc4a9734cd9e2e.png",
          }}
        />
        <Image
          style={styles.icon}
          source={{
            uri: "https://cdn.iconscout.com/icon/free/png-256/comment-3244516-2701887.png",
          }}
        />
        <Image
          style={styles.icon}
          source={{
            uri: "https://static.thenounproject.com/png/2552724-200.png",
          }}
        />
      </View>

      <Image
        style={styles.icon}
        source={{
          uri: "https://cdn.iconscout.com/icon/free/png-256/save-3244517-2701888.png",
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  footer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-end",
    paddingRight: 6,
    marginBottom:10
  },
  iconContainer: {
    flexDirection: "row",
    paddingTop: 6,
  },
  icon: {
    width: 30,
    height: 30,
    marginLeft: 14,
  },
});
