import * as React from 'react';
import { Button, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import DeckListStackScreen from './component/DeckList/DeckListStackScreen'
import DeckAdd from './component/DeckAdd/DeckAdd'
import {MaterialCommunityIcons} from "@expo/vector-icons";
//Redux
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducer from './component/redux/reducers'
import middleware from './component/redux/middleware'
import {addQuestion} from "./component/redux/actions/deck";

const store = createStore(reducer, middleware)


const Tab = createBottomTabNavigator();

export default function App() {

    return (
        <Provider store={store}>
        <NavigationContainer>
            <Tab.Navigator
                initialRouteName="DeckList"
                tabBarOptions={{
                    activeTintColor: 'white',
                    style: {
                        backgroundColor:"#19647e",
                    }

                }}
            >
                <Tab.Screen
                    name="DeckListStackScreen"
                    component={DeckListStackScreen}
                    options={{
                        tabBarLabel: 'List of decks',
                        tabBarIcon: ({ color, size }) => (
                            <MaterialCommunityIcons name="home" color={color} size={size} />
                        ),
                    }}
                />
                <Tab.Screen
                    name="DeckAdd"
                    component={DeckAdd}
                    options={{
                        tabBarLabel: 'Add new decks',
                        tabBarIcon: ({ color, size }) => (
                            <MaterialCommunityIcons name="layers-plus" color={color} size={size} />
                        ),
                    }}
                />
            </Tab.Navigator>
        </NavigationContainer>
        </Provider>
    );
}
