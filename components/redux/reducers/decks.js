import {ADD_Deck,ADD_QUESTION} from "../actions/deck";
import generateUID from "../utils/helper"


const INITIAL_STATE = {
    decks:{
        Example_1:[
            {id:1,
                question:"What has the color green?",
                answer:"Gras is green"},
            {id:2,
                question:"What is blue?",
                answer:"The sky is blue"}
        ],
        Example_2:[
            {id:1,
                question:"What can be red?",
                answer:"An apple can be red"},
        ]
    }
}
export default function decks(state=INITIAL_STATE, action){
    switch (action.type) {
        case ADD_Deck:
            return {
                ...state,
                decks:{
                    ...state.decks,
                    ...action.deck}
            }
        case ADD_QUESTION:
            //1.Step: Get state
            let question_id = generateUID()
            let newQuestion={id: question_id, question:action.question, answer: action.answer}
            debugger
            // let new_state = Object.assign({}, state.decks, { [`${action.deckName}`]: [...state.decks.decks[`${action.deckName}`],  newQuestion] });

            return {
                ...state,
                decks:{...state.decks,
                    [`${action.deckName}`]: [...state.decks[`${action.deckName}`],  newQuestion]

                }

            }

        default:
            return state
    }
};
