import {combineReducers} from 'redux'
import decks from './decks'
/*
Store={
    decks:{
        misc:[
            {id:1,
                question:"What is green?",
                answer:"Gras is green"},
            {id:2,
                question:"What is green?",
                answer:"Gras is green"}
        ]
    },
    currentCard:1,
    currentDeck:"React",
    score:1
}
* */


export default combineReducers({
    decks
})
