import React from 'react';
import { Text, View, StyleSheet,TextInput,Button ,FlatList  } from 'react-native';

const DeckAdd = () => {
    let submitform=(e)=>{
        console.log(e)
    }
    return (
        <View style={styles.container}>
            <Text style={styles.title}>What is the title of your new deck?</Text>
            <View style={styles.containerInput}>
                <TextInput
                    style={styles.deckTitle}
                    value="Deck Title"
                />
                <Button
                    // onPress={submitform}
                    title="Submit"
                    accessibilityLabel="Submit deck title"
                />
            </View>

        </View>

    );
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

export default DeckAdd;
