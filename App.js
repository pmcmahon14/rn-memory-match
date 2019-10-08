import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import Statistics from './components/Statistics';
import Level from './components/Level';
import Timer from './components/Timer';

export default function App() {
    return (
      <View style={styles.container}>
          <Statistics/>
          <Level title='Daytona Driver/Driver'/>
          <Timer title='Timer'/>
          <Text>Gameboard</Text>
      </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
});
