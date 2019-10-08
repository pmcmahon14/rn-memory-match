import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const Level = props => {
    return (
        <View style={styles.level}>
            <Text style={styles.levelTitle}>{props.title}</Text>
        </View>
    )
};

const styles = StyleSheet.create({
    level: {
        width: '100%',
        height: 20,
        padding: 3,
        marginTop: 5,
        backgroundColor: 'green',
        alignItems: 'center',
        justifyContent: 'center'
    },
    levelTitle: {
        fontSize: 12,
        color: 'black'
    }
});

export default Level;