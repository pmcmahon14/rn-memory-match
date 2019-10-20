import React from 'react';
import {View, Text, StyleSheet, Image, Dimensions} from 'react-native';

const Board = props => {
    return (
        <View>
            <View style={styles.cardRow}>
                <Image style={styles.cardImage} resizeMode='contain' source={require('../assets/drivers/alexbowman.png')}/>
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
        marginTop: 10,
        height: 60
    },
    cardImage: {
        width: '16%',
        height: '100%'
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
        width: '15%',
        marginLeft: '1%',
        backgroundColor: 'lightblue'
    }
});

export default Board;