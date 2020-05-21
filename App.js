import React from 'react';
import {SafeAreaView, StyleSheet, StatusBar} from 'react-native';
import IndexPage from './pages';
const App = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <IndexPage />
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({});

export default App;
