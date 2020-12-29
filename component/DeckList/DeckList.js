import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack'
import Deck from './Deck'

const Stack = createStackNavigator();

export default class DeckContainer extends React.Component {
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
                        >

                        </Deck>
                    )}
                </View>

            </View>

        )
    }

}
function DeckList() {
    return (
        <Stack.Navigator>
            <Stack.Screen
                name="Home"
                component={DeckContainer}
                options={{
                    headerTintColor: 'white',
                    headerStyle: { backgroundColor: 'tomato' },
                }}
            />
            <Stack.Screen
                name="Profile"
                component={Deck}

            />
        </Stack.Navigator>
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
