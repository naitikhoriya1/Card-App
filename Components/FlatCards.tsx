import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

export default function FlatCards() {
  return (
    <View>
      <Text style={styles.headingtext}>FlatCards</Text>
      <View style={styles.container}>
        <View style={styles.card}>
          <Text style={styles.cardtext}>Let's</Text>
        </View>
        <View style={styles.card}>
          <Text style={styles.cardtext}>Get</Text>
        </View>
        <View style={styles.card}>
          <Text style={styles.cardtext}>Starts</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  headingtext: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'green',
    textAlign: 'center',
    padding: 10,
  },
  container: {
    margin: 10,
    padding: 10,
    flex: 1,
    flexDirection: 'row',
    backgroundColor: '#EEEEEE',
    borderRadius: 10,
  },
  card: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: 100,
    height: 80,
    margin: 10,
    padding: 10,
    backgroundColor: '#254336',
    borderRadius: 10,
  },
  cardtext: {
    fontSize: 25,
    fontWeight: 800,
    color: '#FFFFFF',
  },
});
