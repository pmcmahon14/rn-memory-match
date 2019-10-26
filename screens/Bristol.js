import React from 'react';
import {View, Text, StyleSheet, Image, Dimensions} from 'react-native';

const Bristol = props => {
    return (
        <View>
            <View style={styles.cardRow}>
                <Image style={styles.cardImage} resizeMode='contain' source={require('../assets/drivers/alexbowman.png')}/>
                <Text style={styles.cardTwo}>Card</Text>
                <Text style={styles.cardTwo}>Card</Text>
                <Text style={styles.cardThree}>Card</Text>
            </View>
            <View style={styles.cardRow}>
                <Text style={styles.cardOne}>Card</Text>
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
        height: 70
    },
    cardImage: {
        width: '25%',
        height: '100%'
    },
    cardOne: {
        width: '25%',
        backgroundColor: 'lightblue'
    },
    cardTwo: {
        width: '24%',
        marginLeft: '1%',
        backgroundColor: 'lightblue'
    },
    cardThree: {
        width: '24%',
        marginLeft: '1%',
        backgroundColor: 'lightblue'
    }
});

export default Bristol;