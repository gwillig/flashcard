import {addDeck} from "../actions/Deck";

const INITIAL_STATE = {
    decks:{
        misc:[
            {id:1,
                question:"What is green?",
                answer:"Gras is green"},
            {id:2,
                question:"What is blue?",
                answer:"The sky is blue"}
        ]
    }
}
export default function decks(state=INITIAL_STATE, action){
    switch (action.type) {
        case addDeck:
            return {
                ...state,
                deckName:action.deckName
            }

        default:
            return state
    }
};
