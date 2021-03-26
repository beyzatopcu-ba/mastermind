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

const OkayButton = () => {
    return (
        <SafeAreaView style={styles.okayButtonContainer}>
            <TouchableOpacity
                style={[styles.okayButton]}>
                <Text style={styles.okayButtonText}>TAMAM</Text>
            </TouchableOpacity>
        </SafeAreaView>
    );
}

export default OkayButton;
