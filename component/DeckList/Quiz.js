import React from 'react';
import {Button, StyleSheet, Text, View} from 'react-native';

export default class Quiz extends React.Component {
    constructor(props) {
        super(props)
        this.state={
            amountCards:"30",
            currentCard:"1",
            question:"What is green",
            answer:"gras",
            score:"3",
            isToggleOn: true
        }
        this.showAnswer = this.showAnswer.bind(this);
    }

    showAnswer() {
        /*
        * @description:
        * Show on click the answer of a question*/
        this.setState(prevState => ({
            isToggleOn: !prevState.isToggleOn
        }));
    }
    render(){
        return (
            <View style={styles.containerBtn}>
                <Text style={styles.subtitle}>
                    {this.state.currentCard} | {this.state.amountCards}
                </Text>
                {(() => {
                    if (this.state.isToggleOn) {
                        return(
                            <View style={styles.deckContainer}>
                                <Text style={styles.title}>{this.state.question}</Text>
                            </View>
                        )
                    }
                    else if (this.state.isToggleOn===false){
                        return(
                            <View style={styles.deckContainer}>
                                <Text style={styles.title}>{this.state.answer}</Text>
                            </View>
                        )
                    }

                })()}
                <View style={{marginTop: 15}}>
                    <Button
                        buttonStyle={styles.btn}
                        title="Show Answer"
                        onPress={this.showAnswer.bind(this)}
                    />
                </View>
                <View style={{marginTop: 15}}>
                    <Button
                        buttonStyle={styles.btn}
                        title="Correct"
                        onPress={() => this.props.navigation.navigate('CardAdd')}
                    />
                </View>
                <View style={{marginTop: 15}}>
                    <Button
                        buttonStyle={styles.btn}
                        title="Incorrect"
                        onPress={() => this.props.navigation.navigate('CardAdd')}
                    />
                </View>
            </View>

        );
    }


}

const styles= StyleSheet.create({
    deckContainer: {
        marginTop: 16,
        marginBottom: 10,
        paddingVertical: 8,
        borderColor: "#19647e",
        borderRadius: 6,
        borderWidth: 2,

    },
    title:{
        fontSize: 30,
        color: "#19647e",
    },
    subtitle:{
        color: "#595b51",
        fontSize: 20,
    },
    containerBtn:{
        marginBottom: 10,
        padding:25,
        margin:15,
        marginTop: 20,
        textAlign: "center",
    },
    btn:{
        margin:15,
    }
})

