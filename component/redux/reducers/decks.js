import {ADD_Deck} from "../actions/deck";

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
    console.log("Hello")
    switch (action.type) {
        case ADD_Deck:
            return {decks:{
                    ...state.decks,
                    ...action.deck}}
        default:
            return state
    }
};
