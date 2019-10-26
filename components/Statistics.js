import React from 'react';
import {View, Text, StyleSheet, Button, TouchableOpacity} from 'react-native';

import Menu from './Menu';

const Statistics = props => {
    return (
    <View style={styles.statBar}>
        <View style={styles.menu}>
            <Menu/>
        </View>
        <Text style={styles.stat}>Attempts{"\n"}0</Text>
        <Text style={styles.stat}>Matches{"\n"}0</Text>
        <Text style={styles.stat}>Accuracy{"\n"}0</Text>
        <Text style={styles.stat}>Wins{"\n"}0</Text>
        <View style={styles.reset}>
            <Button title='RESET' style={styles.button} onPress={() => {}}/>
        </View>
    </View>
    )
};

const styles = StyleSheet.create({
    statBar: {
        flexDirection: 'row',
        marginTop: 30,
        height: 40
    },
    menu: {
        width: '16%',
        backgroundColor: 'lightgray',
        fontFamily: 'Racing Sans One',
        textAlign: 'center'
    },
    stat: {
        width: '15%',
        backgroundColor: 'gray',
        fontFamily: 'Racing Sans One',
        marginLeft: '1%',
        textAlign: 'center'
    },
    reset: {
        width: '16%',
        marginLeft: '1%',
    },
    button: {
        backgroundColor: 'red',
        height: 40,
        fontFamily: 'Racing Sans One',
        textAlign: 'center'
    },
    buttonText: {
        fontFamily: 'Racing Sans One',
        textAlign: 'center'

    }
});

export default Statistics;