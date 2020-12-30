import React from 'react';
import { Text, View, StyleSheet,TextInput,Button ,FlatList  } from 'react-native';

const CardAdd = () => {
    let submitform=(e)=>{
        console.log(e)
    }
    return (
        <View style={styles.container}>
            <View style={styles.containerInput}>
                <TextInput
                    style={styles.deckTitle}
                    value="Question"
                />
                <TextInput
                style={styles.deckTitle}
                value="Answer"
            />
                <Button
                    // onPress={submitform}
                    title="Submit"
                    accessibilityLabel="Submit decks title"
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

export default CardAdd;
