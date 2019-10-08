import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const Timer = props => {
    return (
        <View style={styles.timerRibbon}>
            <Text style={styles.timer}>{props.title}</Text>
        </View>
    )
};

const styles = StyleSheet.create({
    timerRibbon: {
        width: '100%',
        height: 20,
        padding: 3,
        marginTop: 5,
        backgroundColor: 'yellow',
        alignItems: 'center',
        justifyContent: 'center'
    },
    timer: {
        fontSize: 12,
        color: 'black'
    }
});

export default Timer;