import React from 'react';
import {View, Text, StyleSheet, Image, Dimensions} from 'react-native';

const Charlotte = props => {
    return (
        <View>
            <View style={styles.cardRow}>
                <Image style={styles.cardImage} resizeMode='contain' source={require('../assets/drivers/chaseelliott.png')}/>
                <Image style={styles.cardImage} resizeMode='contain' source={require('../assets/logo.png')}/>
                <Image style={styles.cardImage} resizeMode='contain' source={require('../assets/drivers/jimmiejohnson.png')}/>
                <Image style={styles.cardImage} resizeMode='contain' source={require('../assets/cars/jimmiejohnson.jpg')}/>
            </View>
            <View style={styles.cardRow}>
                <Image style={styles.cardImage} resizeMode='contain' source={require('../assets/drivers/chaseelliott.png')}/>
                <Image style={styles.cardImage} resizeMode='contain' source={require('../assets/cars/chaseelliott.jpg')}/>
                <Image style={styles.cardImage} resizeMode='contain' source={require('../assets/drivers/jimmiejohnson.png')}/>
                <Image style={styles.cardImage} resizeMode='contain' source={require('../assets/cars/jimmiejohnson.jpg')}/>
            </View>
            <View style={styles.cardRow}>
                <Image style={styles.cardImage} resizeMode='contain' source={require('../assets/drivers/chaseelliott.png')}/>
                <Image style={styles.cardImage} resizeMode='contain' source={require('../assets/cars/chaseelliott.jpg')}/>
                <Image style={styles.cardImage} resizeMode='contain' source={require('../assets/drivers/jimmiejohnson.png')}/>
                <Image style={styles.cardImage} resizeMode='contain' source={require('../assets/cars/jimmiejohnson.jpg')}/>
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
        width: '25%',
        height: '100%'
    }
});

export default Charlotte;