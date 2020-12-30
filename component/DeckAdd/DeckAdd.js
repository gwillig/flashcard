import React from 'react';
import { Text, View, StyleSheet,TextInput,Button} from 'react-native';
import {addDeck} from "../redux/actions/deck";
import { connect } from 'react-redux';


class DeckAdd extends React.Component{
    constructor(props) {
        super(props)
        this.state = {
            value_input:""
        }

        this.handleChange = this.handleChange.bind(this);
    }
    handleChange (text) {

        this.setState({value_input: text});
    }
    submitForm=(e)=>{

        //1.Step: Get Value of input
        let value_input = this.state.value_input
        //2.Step: Dispatch to store to create a new deck with 0 cards
        const { dispatch} = this.props
        dispatch(
            addDeck({[`${value_input}`]:[]})
        )
        //3.Step: Empty input
        this.setState({value_input: ""});
        //4.Step: Navigate to DeckListStackScreen
        this.props.navigation.navigate('DeckListStackScreen')
    }
    render(){
        return(
            <View style={styles.container}>
                <Text style={styles.title}>What is the title of your new decks?</Text>
                <View style={styles.containerInput}>
                    <TextInput
                        style={styles.deckTitle}
                        onChangeText={this.handleChange}
                        placeholder="Deck Title"
                        value={this.state.value_input}
                    />
                    <Button
                        onPress={this.submitForm.bind(this)}
                        title="Submit"
                        accessibilityLabel="Submit decks title"
                    />
                </View>

            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#eaeaea"
    },
    title: {
        marginTop: 16,
        paddingVertical: 8,
        backgroundColor: "#19647e",
        color: "white",
        textAlign: "center",
        fontSize: 30,
        fontWeight: "bold"
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


export default connect()(DeckAdd);
