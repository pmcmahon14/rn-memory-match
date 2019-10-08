import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const Statistics = props => {
    return (
    <View style={styles.statBar}>
        <Text style={styles.stat}>Menu</Text>
        <Text style={styles.stat}>Attempts</Text>
        <Text style={styles.stat}>Matches</Text>
        <Text style={styles.stat}>Accuracy</Text>
        <Text style={styles.stat}>Wins</Text>
        <Text style={styles.stat}>Reset</Text>
    </View>
    )
};

const styles = StyleSheet.create({
    statBar: {
        flexDirection: 'row',
        marginTop: 30,
        height: 40,
        backgroundColor: 'gray',
        alignItems: 'center',
        justifyContent: 'center'
    },
    stat: {
        width: '16%',
    }
});

export default Statistics;