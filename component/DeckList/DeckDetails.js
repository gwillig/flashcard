import React from 'react';
import {Button, StyleSheet, Text, View} from 'react-native';



export default class DeckDetails extends React.Component {

    render(){

        return (
            <View style={styles.containerBtn}>
                <View style={styles.deckContainer}>
                    <Text style={styles.title}>{this.props.route.params.deckName}</Text>
                    <Text style={styles.subtitle}>
                        {this.props.route.params.amountCards} cards
                    </Text>
                </View>
                <View style={{marginTop: 15}}>
                    <Button
                        buttonStyle={styles.btn}
                        title="Start Quiz"
                        onPress={() => this.props.navigation.navigate('Quiz')}
                    />
                </View>
                <View style={{marginTop: 15}}>
                    <Button
                        buttonStyle={styles.btn}
                        title="Add Card"
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

        textAlign: "center",

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
    },
    btn:{
        margin:15,
    }
})

