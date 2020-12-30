import React from 'react';
import {Button, StyleSheet, Text, View} from 'react-native';
import {connect} from 'react-redux'

class Quiz extends React.Component {
    constructor(props) {
        super(props)
        this.state={
            finish:false,
            currentNumber:0,
            score:0,
            isToggleOn: true
        }
        this.showAnswer = this.showAnswer.bind(this);
        this.nextCard = this.nextCard.bind(this);
    }
    nextCard(e) {
        /*
        * @description:
        * Shows on click the next card*/
        //1.Step: Increase number
        this.setState(prevState => ({
            currentNumber: ++prevState.currentNumber
        }));
        //2.Step: Calculate the score
        if(e.target.textContent=="Correct"){
            this.setState(prevState => ({
                score: ++prevState.score
            }));
        }

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
        let deckName = this.props.route.params.deckName
        let currentDeck = this.props.decks.decks[deckName]
        let currentNumber = this.state.currentNumber
        let currentCard = this.props.decks.decks[deckName][currentNumber]
        let finish=false
        if(this.state.currentNumber===currentDeck.length){
            finish=true

        }
        return (
            <View style={styles.containerBtn}>
                {(() => {
                    if (!finish) {
                        return(
                            <View>
                                <Text style={styles.subtitle}>
                                    {/*Array index starts with 0*/}
                                    {currentNumber+1} | {currentDeck.length}
                                </Text>
                                {(() => {
                                    if (this.state.isToggleOn) {
                                        return(
                                            <View style={styles.deckContainer}>
                                                <Text style={styles.title}>{currentCard.question}</Text>
                                            </View>
                                        )
                                    }
                                    else if (this.state.isToggleOn===false){
                                        return(
                                            <View style={styles.deckAnswer}>
                                                <Text style={styles.title}>{currentCard.answer}</Text>
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
                                        onPress={this.nextCard.bind(this)}
                                    />
                                </View>
                                <View style={{marginTop: 15}}>
                                    <Button
                                        buttonStyle={styles.btn}
                                        title="Incorrect"
                                        onPress={this.nextCard.bind(this)}
                                    />
                                </View>
                            </View>
                        )
                    }
                    else{
                        return(
                            <View style={styles.deckAnswer}>
                                <Text style={styles.title}>Congratulations</Text>
                                <Text style={styles.title}>
                                    Your Score is
                                    {" "+this.state.score/currentDeck.length*100}%
                                </Text>
                                <View style={{marginTop: 15}}>
                                </View>
                            </View>
                        )
                    }

                })()}

            </View>

        );
    }


}
const mapStateToProps = (state) => {

    return {...state}
};

export default connect(mapStateToProps)(Quiz)


const styles= StyleSheet.create({
    deckContainer: {
        marginTop: 16,
        marginBottom: 10,
        paddingVertical: 8,
        borderColor: "#19647e",
        borderRadius: 6,
        borderWidth: 2,

    },
    deckAnswer: {
        marginTop: 16,
        marginBottom: 10,
        paddingVertical: 8,
        borderColor: "#19647e",
        borderRadius: 6,
        borderWidth: 2,
        backgroundColor:"#bcc560"

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

