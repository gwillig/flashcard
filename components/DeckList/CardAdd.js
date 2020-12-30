import React from 'react';
import {addQuestion} from "../redux/actions/deck";
import { connect } from 'react-redux';
import {View, StyleSheet,TextInput,Button} from 'react-native';

class CardAdd extends React.Component{
    constructor(props) {
        super(props)
        this.state = {
            question:"",
            answer:""
        }
        this.handleChangeAnswer = this.handleChangeAnswer.bind(this);
        this.handleChangeQuestion = this.handleChangeQuestion.bind(this);
    }

    handleChangeQuestion(text) {
        /*
        *@description:
        * Set the current the of the input field question to the state
        **/
        this.setState({question: text});
    }

    handleChangeAnswer(text) {
        /*
        *@description:
        * Set the current the of the input field answer to the state
        **/
        this.setState({answer: text});
    }

   submitForm=(e)=>{
       /*
       *@description:
       * Submit the form to create a new question
       **/
        //1.Step: Get Value of question and answer
        let question = this.state.question
        let answer = this.state.answer
        //2.Step: Get name of current deck
        let deckName = this.props.route.params.deckName
        //3.Step: Dispatch to store to create a new deck with 0 cards
        const { dispatch} = this.props
        dispatch(
            addQuestion(question,answer,deckName)
        )
    }

    render(){
        return (
            <View style={styles.container}>
                <View style={styles.containerInput}>
                    <TextInput
                        style={styles.deckTitle}
                        onChangeText={this.handleChangeQuestion}
                        placeholder="Question"
                        value={this.state.question}
                    />
                    <TextInput
                        style={styles.deckTitle}
                        onChangeText={this.handleChangeAnswer}
                        placeholder="Answer"
                        value={this.state.answer}
                    />
                    <Button
                        onPress={this.submitForm.bind(this)}
                        title="Submit"
                        accessibilityLabel="Submit new question"
                    />
                </View>

            </View>

        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#eaeaea"
    },
    containerInput:{
        alignItems: 'center',
        justifyContent: 'center',
        padding:25,

    },

    deckTitle:{
        height: 40,
        width: 250,
        borderColor: 'gray',
        borderWidth: 1,
        margin: 24,
    }
});

export default connect()(CardAdd);
