import {ScrollView, SafeAreaView} from 'react-native';
import React from 'react';
import FlatCards from './Components/FlatCards';
import ElevatedCard from './Components/ElevatedCard';
import FancyCard from './Components/FancyCard';
import ActionCard from './Components/ActionCard';

const App = () => {
  return (
    <SafeAreaView>
      <ScrollView>
        <FlatCards />
        <ElevatedCard />
        <FancyCard />
        <ActionCard />
      </ScrollView>
    </SafeAreaView>
  );
};

export default App;
