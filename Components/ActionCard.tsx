import {
  StyleSheet,
  Text,
  View,
  Linking,
  Image,
  TouchableOpacity,
} from 'react-native';
import React from 'react';

export default function ActionCard() {
  function openWebsite(websiteLink: String) {
    Linking.openURL(websiteLink);
  }
  return (
    <View>
      <Text style={styles.headingText}>Blog Card</Text>
      <View style={[styles.card, styles.elevatedCard]}>
        <View style={styles.headingContainer}>
          <Text style={styles.headerText}>IRON MAN THE LEGEND</Text>
        </View>
        <Image
          source={{
            uri: 'https://i.pinimg.com/564x/97/f2/83/97f283404e6267794249d354fd5d223a.jpg',
          }}
          style={styles.cardImage}
        />
        <View style={styles.cardContent}>
          <Text style={styles.cardTitle}>
            Ironman working in his lab, can be used as wallpaper, best for
            amoled display.
          </Text>
        </View>
        <View style={styles.footerContainer}>
          <TouchableOpacity
            onPress={() => {
              openWebsite('https://in.pinterest.com/pin/310748443057961542/');
            }}>
            <Text style={styles.socialLinks}>Read More</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              openWebsite('https://instagram.com/ethical_khoriya/');
            }}>
            <Text style={styles.socialLinks}>Follow Me</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  headingText: {
    fontSize: 22,
    fontWeight: 'bold',
    color: 'green',
    textAlign: 'center',
    padding: 10,
  },
  card: {
    paddingTop: 10,
    width: 390,
    backgroundColor: '#EEEEEE',
    // color: '#FFFFFF',
    padding: 2,
    margin: 2,
    borderRadius: 10,
  },
  elevatedCard: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 1,
  },
  headingContainer: {},
  headerText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'green',
    textAlign: 'center',
    padding: 10,
  },
  cardImage: {
    height: 500,
    borderRadius: 10,
  },
  cardContent: {
    padding: 8,
    backgroundColor: '#F1F1F1',
  },
  cardTitle: {
    padding: 5,
  },
  footerContainer: {
    flex: 1,
    flexDirection: 'row',
    fontSize: 11,
    color: '#254336',
    padding: 5,
    margin: 5,
  },
  socialLinks: {
    flex: 1,
    padding: 8,
    margin: 8,
    fontSize: 16,
    fontWeight: 'bold',
    backgroundColor: 'darkgreen',
    color: 'white',
    borderRadius: 10,
    marginRight: 10,
  },
});
