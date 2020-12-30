import * as React from 'react';
import {Button, StyleSheet, Text, View} from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { connect } from 'react-redux';
import DeckDetails from "./DeckDetails";
import Deck from './Deck'
import Quiz from './Quiz'
import CardAdd from "./CardAdd";


class DeckList extends React.Component{
    constructor(props) {
        super(props)
    }
    render(){

        return(
            <View style={styles.container}>
                <Text style={styles.title}>Flashcard</Text>
                <View style={styles.containerDeck}>
                    {this.props.decks.map(el=>
                        <Deck key={el.name}
                              deckName={el.name}
                              amountCards={el.amountCards}
                              navigation={this.props.navigation}
                        >
                        </Deck>
                    )}
                </View>

            </View>

        )
    }
}


const mapStateToProps = (state) => {
    const decks=[]

    for(let key of Object.keys(state.decks.decks)){

        decks.push(
            {
                name:key,
                amountCards:state.decks.decks[key].length
            }
        )

    }
    return { decks }
};

DeckList=connect(mapStateToProps)(DeckList)

const DeckListStack = createStackNavigator();

function DeckListStackScreen() {
    return (
        <DeckListStack.Navigator >
            <DeckListStack.Screen options={{headerShown: false}} name="DeckList" component={DeckList} />
            <DeckListStack.Screen name="DeckDetails" component={DeckDetails} options={{ title: 'List of Decks' }}/>
            <DeckListStack.Screen name="Quiz" component={Quiz} options={{ title: 'Quiz' }}/>
            <DeckListStack.Screen name="CardAdd" component={CardAdd} options={{ title: 'Add new Card' }}/>
        </DeckListStack.Navigator>
    );
}
const styles = StyleSheet.create({
    container: {
        flex: 1,

        backgroundColor: "#eaeaea"
    },
    containerDeck:{
        flex: 1,
        padding: 24,
    },
    title: {
        marginTop: 16,
        paddingVertical: 8,
        backgroundColor: "#19647e",
        color: "white",
        textAlign: "center",
        fontSize: 30,
        fontWeight: "bold"
    }
});

export default(DeckListStackScreen);
