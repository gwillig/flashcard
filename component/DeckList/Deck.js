import React from 'react';
import { Text,View, StyleSheet} from 'react-native';

export default class Deck extends React.Component {

    render(){
        return (
            <View style={styles.deckContainer}
            onPress>
                <Text style={styles.title}>{this.props.deckName}</Text>
                <Text style={styles.subtitle}> {this.props.amountCards} cards</Text>
            </View>

        );
    }


}

const styles= StyleSheet.create({
    deckContainer: {
        marginTop: 16,
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
    }
})
