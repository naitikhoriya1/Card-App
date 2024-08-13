import {ScrollView, StyleSheet, Text, View} from 'react-native';
import React from 'react';

export default function ElevatedCard() {
  return (
    <View>
      <Text style={styles.headingtext}>ElevatedCard</Text>
      <ScrollView horizontal={true} style={styles.container}>
        <View style={[styles.card, styles.cardElevated]}>
          <Text style={styles.text}>💖</Text>
        </View>
        <View style={[styles.card, styles.cardElevated]}>
          <Text style={styles.text}>😎</Text>
        </View>
        <View style={[styles.card, styles.cardElevated]}>
          <Text style={styles.text}>🥰</Text>
        </View>
        <View style={[styles.card, styles.cardElevated]}>
          <Text style={styles.text}>😻</Text>
        </View>
        <View style={[styles.card, styles.cardElevated]}>
          <Text style={styles.text}>❤️‍🩹</Text>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  headingtext: {
    fontSize: 22,
    fontWeight: 'bold',
    color: 'green',
    textAlign: 'center',
    padding: 10,
  },
  container: {
    padding: 8,
  },
  card: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: 100,
    height: 100,
    margin: 10,
    padding: 10,
    backgroundColor: '#254336',
    borderRadius: 10,
  },

  cardElevated: {},

  text: {
    fontSize: 55,
    fontWeight: 800,
    color: '#FFFFFF',
  },
});
