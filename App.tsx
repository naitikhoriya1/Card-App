import {ScrollView, SafeAreaView} from 'react-native';
import React from 'react';
import FlatCards from './Components/FlatCards';
import ElevatedCard from './Components/ElevatedCard';

const App = () => {
  return (
    <SafeAreaView>
      <ScrollView>
        <FlatCards />
        <ElevatedCard />
      </ScrollView>
    </SafeAreaView>
  );
};

export default App;
