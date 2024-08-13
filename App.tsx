import {ScrollView, Text, SafeAreaView} from 'react-native';
import React from 'react';
import FlatCards from './Components/FlatCards';

const App = () => {
  return (
    <SafeAreaView>
      <ScrollView>
        <FlatCards />
      </ScrollView>
    </SafeAreaView>
  );
};

export default App;
