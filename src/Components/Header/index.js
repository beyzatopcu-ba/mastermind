import React from 'react';
import {
    View,
    Text,
    SafeAreaView,
    TouchableOpacity,
    ScrollView,
    Alert
} from 'react-native';

import styles from "./style"

const Header = props => {

    return (
        <SafeAreaView style={styles.headerContainer}>
            <Text style={styles.headerText}>MASTERMIND</Text>
        </SafeAreaView>
    );

}

export default Header;
