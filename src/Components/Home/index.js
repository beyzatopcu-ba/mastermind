import React from 'react';
import {
    View,
    Text,
    SafeAreaView,
    TouchableOpacity,
    ScrollView,
    Alert
} from 'react-native';

import Header from '../Header';
import StonePit from "../StonePit";
import GuessBox from "../GuessBox";
import OkayButton from "../OkayButton";

import styles from "./style"

const stones = [
    {
        id: 1,
        color: "#FF7860"
    },
    {
        id: 2,
        color: "#9D80FD"
    },
    {
        id: 3,
        color: "#97E241"
    },
    {
        id: 4,
        color: "#2AE2EA"
    },
    {
        id: 5,
        color: "#ED7EE4"
    },
    {
        id: 6,
        color: "#FFE622"
    },
];

const guesses = [
    {
        guessedStones: [
            {
                id: 1,
                color: "#FF7860"
            },
            {
                id: 2,
                color: "#9D80FD"
            },
            {
                id: 3,
                color: "#97E241"
            },
            {
                id: 4,
                color: "#2AE2EA"
            },
        ],
        clues: {
            rightStoneRightPlace: 1, 
            rightStoneWrongPlace: 1,
        }
    },
    {
        guessedStones: [
            {
                id: 1,
                color: "#FF7860"
            },
            {
                id: 2,
                color: "#9D80FD"
            },
            {
                id: 3,
                color: "#97E241"
            },
            {
                id: 4,
                color: "#2AE2EA"
            },
        ],
        clues: {
            rightStoneRightPlace: 1, 
            rightStoneWrongPlace: 1,
        }
    },
    {
        guessedStones: [
            {
                id: 1,
                color: "#FF7860"
            },
            {
                id: 2,
                color: "#9D80FD"
            },
            {
                id: 3,
                color: "#97E241"
            },
            {
                id: 4,
                color: "#2AE2EA"
            },
        ],
        clues: {
            rightStoneRightPlace: 1, 
            rightStoneWrongPlace: 1,
        }
    },
    {
        guessedStones: [
            {
                id: 1,
                color: "#FF7860"
            },
            {
                id: 2,
                color: "#9D80FD"
            },
            {
                id: 3,
                color: "#97E241"
            },
            {
                id: 4,
                color: "#2AE2EA"
            },
        ],
        clues: {
            rightStoneRightPlace: 1, 
            rightStoneWrongPlace: 1,
        }
    },
];

const guessedStones = [
    {
        id: 1,
        color: "#FF7860"
    },
    {
        id: 2,
        color: "#9D80FD"
    },
    null,
    null,
];

class Home extends React.Component {

    renderStonePits = () => {

        let stonePitComponents = stones.map((stone, index) => {
            return (
                <StonePit
                    key={index}
                    stone={stone} />
            );
        })

        return stonePitComponents;
    }

    renderGuesses = () => {

        let guessComponents = guesses.map((guess, index) => {
            return (
                <GuessBox
                    key={index + 1}
                    guessedStones={guess.guessedStones}
                    clues={guess.clues} />
            )
        })

        return guessComponents;
    }

    setScrollRef = (ref) => {
        this.scroll = ref;
    }

    render() {
        return (
            <View style={styles.container}>
                <Header />
                <View style={styles.midArea}>
                    <View style={styles.topGuessBoxContainer}>
                        <GuessBox
                            key={0}
                            guessedStones={guessedStones}
                            clues={null} />
                    </View>
                    <ScrollView style={styles.scroll} ref={this.setScrollRef}>
                        {this.renderGuesses()}
                    </ScrollView>
                </View>
                <View style={styles.stoneBoxContainer}>
                    {this.renderStonePits()}
                </View>
                <OkayButton />
            </View>
        );
    }

}

export default Home;
