import React from 'react';
import {View, Text, StyleSheet, Button, TouchableOpacity} from 'react-native';

const Statistics = props => {
    return (
    <View style={styles.statBar}>
        <Text style={styles.menu}>Menu</Text>
        <Text style={styles.stat}>Attempts{"\n"}0</Text>
        <Text style={styles.stat}>Matches{"\n"}0</Text>
        <Text style={styles.stat}>Accuracy{"\n"}0</Text>
        <Text style={styles.stat}>Wins{"\n"}0</Text>
        <View style={styles.reset}>
            <TouchableOpacity style={styles.button} onPress={() => {}}>
                <View>
                    <Text style={styles.buttonText}>RESET</Text>
                </View>
            </TouchableOpacity>
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
        height: 40
    },
    buttonText: {
        fontFamily: 'Racing Sans One',
        textAlign: 'center'

    }
});

export default Statistics;