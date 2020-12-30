

state = {
    decks:{
        misc:[
            {id:1,
                question:"What has the color green?",
                answer:"Gras is green"},
            {id:2,
                question:"What is blue?",
                answer:"The sky is blue"}
        ],
        misc2:[
            {id:1,
                question:"What can be red?",
                answer:"An apple can be red"},
        ]
    },
    currentCard:1,
    score:0
}

function test(newQuestion,state) {

    return  Object.assign({}, state, { tasks: [...state.tasks,  { id: '5', task:'test123'}] });

}
newQuestion={id: 2, question:"What is Green", answer:"An apple"}
state = test(newQuestion,state)

Object.assign({}, state.decks, { misc: [...state.decks.misc,  newQuestion] });


