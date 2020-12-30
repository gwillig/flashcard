decks=[]
for(let key of Object.keys(state.decks)){

    decks.push(
        {
            name:key,
            amountCards:state.decks[key].length
        }
    )

}
