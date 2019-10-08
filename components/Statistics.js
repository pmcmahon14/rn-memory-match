import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const Statistics = props => {
    return (
    <View style={styles.statBar}>
        <Text style={styles.menu}>Menu</Text>
        <Text style={styles.stat}>Attempts{"\n"}0</Text>
        <Text style={styles.stat}>Matches{"\n"}0</Text>
        <Text style={styles.stat}>Accuracy{"\n"}0</Text>
        <Text style={styles.stat}>Wins{"\n"}0</Text>
        <Text style={styles.reset}>Reset</Text>
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
        textAlign: 'center'
    },
    stat: {
        width: '15%',
        backgroundColor: 'gray',
        marginLeft: '1%',
        textAlign: 'center'
    },
    reset: {
        width: '16%',
        backgroundColor: 'red',
        marginLeft: '1%',
        textAlign: 'center'
    }
});

export default Statistics;