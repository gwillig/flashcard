export const ADD_QUESTION = "ADD_QUESTION"
export const ADD_Deck = "ADD_Deck"


export function addDeck({deckName }){
    return{
        type:ADD_Deck,
        deckName
    }
}


export function addQuestion({question,answer,deckName }){
    return{
        type:ADD_Deck,
        question,
        answer,
        deckName
    }
}
