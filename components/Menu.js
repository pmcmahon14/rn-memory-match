import React, {Component} from 'react';
import {View, Picker} from 'react-native';
import ModalDropdown from 'react-native-modal-dropdown';

const Menu = props => {
    return (
        <View>
            <Picker selectedValue={'Menu'}>
                <Picker.Item label='Daytona Driver/Driver'/>
                <Picker.Item label='Bristol Driver/Car'/>
            </Picker>
        </View>
    )
};

export default Menu;