import React, {useState} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import * as Font from 'expo-font';
import {AppLoading} from 'expo';

import Statistics from './components/Statistics';
import Level from './components/Level';
import Timer from './components/Timer';
import Board from './components/Board';

const fetchFonts = () => {
    return Font.loadAsync({
        'Racing Sans One': require('./assets/fonts/RacingSansOne-Regular.ttf'),
    });
};

export default function App() {
    const [dataLoaded, setDataLoaded] = useState(false);

    if (!dataLoaded) {
        return (
            <AppLoading
                startAsync={fetchFonts}
                onFinish={() => setDataLoaded(true)}
                onError={(err) => console.log(err)}
            />
        );
    }

    return (
      <View style={styles.container}>
          <Statistics/>
          <Level title='Daytona Driver/Driver'/>
          <Timer title='0.000/50'/>
          <Board/>
      </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
});
