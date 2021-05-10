/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import type {Node} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';


import { Icon } from 'react-native-elements'

import Header from './components/Header';
import Menu from './components/Menu';
import FoodList from './components/FoodList';
import Product from './components/Product';




const App: () => Node = () => {
  

  return (
    <SafeAreaView>
      <StatusBar />
      <ScrollView>
        <Header />
      
        <Menu/>
        <FoodList/>
        
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontFamily:'Cream Cake',
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;


