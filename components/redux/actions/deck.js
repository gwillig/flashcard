export const ADD_QUESTION = "ADD_QUESTION"
export const ADD_Deck = "ADD_Deck"


export function addDeck(deck){
    return{
        type:ADD_Deck,
        deck:deck
    }
}

export function addQuestion(question,answer,deckName){
    return{
        type:ADD_QUESTION,
        question,
        answer,
        deckName
    }
}
