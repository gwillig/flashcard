import * as React from 'react';
import {Button, StyleSheet, Text, View} from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';

import DeckDetails from "./DeckDetails";
import Deck from './Deck'



class DeckList extends React.Component{
    state={
        decks:[{name:"REACT",amountCards:"30"},
            {name:"Backend",amountCards:"15"}
        ]
    }
    render(){
        return(
            <View style={styles.container}>
                <Text style={styles.title}>Flashcard</Text>
                <View style={styles.containerDeck}>
                    {this.state.decks.map(el=>
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

const DeckListStack = createStackNavigator();

function DeckListStackScreen() {
    return (
        <DeckListStack.Navigator >
            <DeckListStack.Screen options={{headerShown: false}}name="Home1" component={DeckList} />
            <DeckListStack.Screen name="Details" component={DeckDetails} />
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
export default DeckListStackScreen
