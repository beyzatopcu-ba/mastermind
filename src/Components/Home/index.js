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

    constructor(props) {
        super(props);

        this.state = {
            stones: [...stones],
            guessedStones: [],
        }
    }

    onPress_StonePit = (stone) => {
        console.log('stone pit e basıldı', stone);

        let stonesInState = this.state.stones;
        let guessedStonesInState = this.state.guessedStones;

        // State'teki taşlardan ilgili taşı çıkar
        let stoneIndex = stonesInState.indexOf(stone);
        let emptyStonePitComponent = (
            <StonePit 
                stone={null}
                onPress_StonePit={()=>{}}
            />
        )
        stonesInState.splice(stoneIndex, 1, emptyStonePitComponent);

        // Add stone to guessed stones
        guessedStonesInState.push(stone);

        this.setState({
            stones: stonesInState,
            guessedStones: guessedStonesInState,
        });
    }

    renderStonePits = () => {

        let stonePitComponents = this.state.stones.map((stone, index) => {
            return (
                <StonePit
                    key={index}
                    stone={stone} 
                    onPress_StonePit={this.onPress_StonePit}
                    />
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
        });

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
