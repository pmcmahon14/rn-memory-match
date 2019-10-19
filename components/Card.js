import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const Card = props => {
    return (
        <View>
        <View style={styles.cardRow}>
            <Text style={styles.cardOne}>Card</Text>
            <Text style={styles.cardTwo}>Card</Text>
            <Text style={styles.cardTwo}>Card</Text>
            <Text style={styles.cardTwo}>Card</Text>
            <Text style={styles.cardTwo}>Card</Text>
            <Text style={styles.cardThree}>Card</Text>
        </View>
        <View style={styles.cardRow}>
            <Text style={styles.cardOne}>Card</Text>
            <Text style={styles.cardTwo}>Card</Text>
            <Text style={styles.cardTwo}>Card</Text>
            <Text style={styles.cardTwo}>Card</Text>
            <Text style={styles.cardTwo}>Card</Text>
            <Text style={styles.cardThree}>Card</Text>
        </View>
        <View style={styles.cardRow}>
            <Text style={styles.cardOne}>Card</Text>
            <Text style={styles.cardTwo}>Card</Text>
            <Text style={styles.cardTwo}>Card</Text>
            <Text style={styles.cardTwo}>Card</Text>
            <Text style={styles.cardTwo}>Card</Text>
            <Text style={styles.cardThree}>Card</Text>
        </View>
        </View>
    )
};

const styles = StyleSheet.create({
    cardRow: {
        flexDirection: 'row',
        marginTop: 30,
        height: 40
    },
    cardOne: {
        width: '16%',
        backgroundColor: 'lightblue'
    },
    cardTwo: {
        width: '15%',
        marginLeft: '1%',
        backgroundColor: 'lightblue'
    },
    cardThree: {
        width: '16%',
        marginLeft: '1%',
        backgroundColor: 'lightblue'
    }
});

export default Card;