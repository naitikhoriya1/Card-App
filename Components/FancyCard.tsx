import {StyleSheet, Image, Text, View, ScrollView} from 'react-native';
import React from 'react';

export default function FancyCard() {
  return (
    <View>
      <Text style={styles.heading}> Tranding 🤩</Text>
      <ScrollView horizontal={true}>
        <View style={[styles.card, styles.cardElevated]}>
          <Image
            source={{
              uri: 'https://i.pinimg.com/474x/7d/36/25/7d3625cd091bbb805955b255687d39dc.jpg',
            }}
            style={styles.cardImage}
          />
          <View style={styles.cardBody}>
            <Text style={styles.cardTitle}>Afternoon Drive: Off-Road</Text>
            <Text style={styles.cardLable}>#MahindraThar</Text>
            <Text style={styles.cardDesc}>
              For most people, a bumpy, muddy, rocky road would be a driving
              nightmare.
            </Text>
            <Text style={styles.cardFooter}>12 Min Away</Text>
          </View>
        </View>
        <View style={[styles.card, styles.cardElevated]}>
          <Image
            source={{
              uri: 'https://i.pinimg.com/474x/5b/ef/01/5bef01e479276d834a7556f6a69e494a.jpg',
            }}
            style={styles.cardImage}
          />
          <View style={styles.cardBody}>
            <Text style={styles.cardTitle}>Afternoon Drive: Off-Road</Text>
            <Text style={styles.cardLable}>#MahindraThar</Text>
            <Text style={styles.cardDesc}>
              For most people, a bumpy, muddy, rocky road would be a driving
              nightmare.
            </Text>
            <Text style={styles.cardFooter}>12 Min Away</Text>
          </View>
        </View>
        <View style={[styles.card, styles.cardElevated]}>
          <Image
            source={{
              uri: 'https://i.pinimg.com/474x/93/61/eb/9361ebcff277461478374d574eaf4bb9.jpg',
            }}
            style={styles.cardImage}
          />
          <View style={styles.cardBody}>
            <Text style={styles.cardTitle}>Afternoon Drive: Off-Road</Text>
            <Text style={styles.cardLable}>#MahindraThar</Text>
            <Text style={styles.cardDesc}>
              For most people, a bumpy, muddy, rocky road would be a driving
              nightmare.
            </Text>
            <Text style={styles.cardFooter}>12 Min Away</Text>
          </View>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  heading: {
    fontSize: 22,
    fontWeight: 'bold',
    color: 'green',
    textAlign: 'center',
    padding: 10,
  },
  card: {
    paddingTop: 10,
    width: 400,
    backgroundColor: '#EEEEEE',
    // color: '#FFFFFF',
    padding: 2,
    margin: 2,
    borderRadius: 10,
  },
  cardElevated: {
    elevation: 3,
  },
  cardImage: {
    height: 320,
    width: 380,
    borderRadius: 10,
    shadowOffset: {
      width: 4,
      height: 4,
    },
    shadowColor: 'green',
    shadowOpacity: 0.3,
  },
  cardBody: {
    padding: 8,
    backgroundColor: '#F1F1F1',
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'green',
    padding: 5,
  },
  cardLable: {
    fontWeight: 'bold',
    color: '#254336',
    padding: 5,
  },
  cardDesc: {
    fontSize: 14,
    color: '#254336',
    padding: 5,
    margin: 5,
  },

  cardFooter: {
    fontSize: 11,
    paddingLeft: 270,
    color: '#254336',
    padding: 5,
    margin: 5,
  },
});
