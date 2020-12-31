import * as React from 'react';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import DeckListStackScreen from './components/DeckList/DeckListStackScreen'
import DeckAdd from './components/DeckAdd/DeckAdd'
import {MaterialCommunityIcons} from "@expo/vector-icons";
//Redux
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducer from './components/redux/reducers'
import middleware from './components/redux/middleware'
import {setLocalNotification} from './components/redux/utils/Notification'
const store = createStore(reducer, middleware)


const Tab = createBottomTabNavigator();

class App extends React.Component{
    componentDidMount(){
        setLocalNotification()
    }
    render(){
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
}

export default App
