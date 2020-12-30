import React from 'react';
import {Button, StyleSheet, Text, View} from 'react-native';
import {connect} from 'react-redux'


class DeckDetails extends React.Component {

    render(){

        let deckName = this.props.route.params.deckName
        let amountCards = this.props.decks[deckName].amountCards
        return (
            <View style={styles.containerBtn}>
                <View style={styles.deckContainer}>
                    <Text style={styles.title}>{deckName}</Text>
                    <Text style={styles.subtitle}>
                        {amountCards} cards
                    </Text>
                </View>
                <View style={{marginTop: 15}}>
                    <Button
                        buttonStyle={styles.btn}
                        title="Start Quiz"
                        onPress={() => this.props.navigation.navigate('Quiz',{deckName:deckName})}
                    />
                </View>
                <View style={{marginTop: 15}}>
                    <Button
                        buttonStyle={styles.btn}
                        title="Add Card"
                        onPress={() => this.props.navigation.navigate('CardAdd',{deckName:deckName})}
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


const mapStateToProps = (state) => {
    const decks= {}

    for(let key of Object.keys(state.decks.decks)){

        decks[key]={amountCards:state.decks.decks[key].length}


    }
    return { decks }
};

export default connect(mapStateToProps)(DeckDetails)
