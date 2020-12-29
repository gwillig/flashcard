import React from 'react';
import {Button, StyleSheet, Text, View} from 'react-native';
import { createStackNavigator } from '@react-navigation/stack'
import { NavigationContainer } from '@react-navigation/native';
import Deck from './Deck'



class DeckList extends React.Component {
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
                    <Button
                        title="Go to Details"
                        onPress={() => this.props.navigation.navigate('Details')}
                    />
                </View>

            </View>

        )
    }

}
// export default class DeckList extends React.Component {
//     render(){
//         return (
//             <Stack.Navigator>
//                 <Stack.Screen
//                     name="DeckContainer"
//                     component={DeckContainer}
//                 />
//                 <Stack.Screen
//                     name="Deck"
//                     component={Deck}
//
//                 />
//             </Stack.Navigator>
//         );
//     }
//
// }
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

export default DeckList
