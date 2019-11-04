import React from 'react';
import {View, Text, StyleSheet, Image, Dimensions} from 'react-native';

const Daytona = props => {
    return (
        <View>
            <View style={styles.cardRow}>
                <Image style={styles.cardImage1} resizeMode='contain' source={require('../assets/drivers/alexbowman.png')}/>
                <Image style={styles.cardImage2} resizeMode='contain' source={require('../assets/cars/alexbowman.jpg')}/>
                <Image style={styles.cardImage2} resizeMode='contain' source={require('../assets/drivers/aricalmirola.png')}/>
                <Image style={styles.cardImage2} resizeMode='contain' source={require('../assets/cars/aricalmirola.jpg')}/>
                <Image style={styles.cardImage2} resizeMode='contain' source={require('../assets/drivers/austindillon.png')}/>
                <Image style={styles.cardImage3} resizeMode='contain' source={require('../assets/cars/austindillon.jpg')}/>

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
    cardImage1: {
        width: '16%',
        height: '100%'
    },
    cardImage2: {
        width: '16%',
        marginLeft: '1%',
        height: '100%'
    },
    cardImage3: {
        width: '15%',
        marginLeft: '1%',
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

export default Daytona;