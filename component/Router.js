import React from 'react'
import { Router, Scene } from 'react-native-router-flux'
import DeckList from './DeckList/DeckList.js'
import DeckDetails from './DeckList/DeckDetails.js'

const Routes = () => (
    <Router>
        <Scene key = "root">
            <Scene key = "home" component = {DeckList} title = "Home" initial = {true} />
            <Scene key = "about" component = {DeckDetails} title = "About" />
        </Scene>
    </Router>
)
export default Routes
