import React from 'react';
import {View, Text, StyleSheet, Image, Dimensions} from 'react-native';

const Charlotte = props => {
    return (
        <View>
            <View style={styles.cardRow}>
                <Image style={styles.cardImage1} resizeMode='contain' source={require('../assets/drivers/chaseelliott.png')}/>
                <Image style={styles.cardImage2} resizeMode='contain' source={require('../assets/cars/chaseelliott.jpg')}/>
                <Image style={styles.cardImage2} resizeMode='contain' source={require('../assets/drivers/jimmiejohnson.png')}/>
                <Image style={styles.cardImage3} resizeMode='contain' source={require('../assets/cars/jimmiejohnson.jpg')}/>
            </View>
            <View style={styles.cardRow}>
                <Text style={styles.cardOne}>Card</Text>
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
        marginTop: 10,
        height: 60
    },
    cardImage1: {
        width: '25%',
        height: '100%'
    },
    cardImage2: {
        width: '25%',
        height: '100%'
    },
    cardImage3: {
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

export default Charlotte;