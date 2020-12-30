import * as React from 'react';
import { Button, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import DeckListStackScreen from './component/DeckList/DeckListStackScreen'
import DeckAdd from './component/DeckAdd/DeckAdd'
import {MaterialCommunityIcons} from "@expo/vector-icons";



function SettingsScreen({ navigation }) {
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text>Settings screen</Text>
            <Button
                title="Go to Details"
                onPress={() => navigation.navigate('Details')}
            />
        </View>
    );
}

function DetailsScreen1() {
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text>Details!</Text>
        </View>
    );
}
const Tab = createBottomTabNavigator();

export default function App() {
    return (
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
                        tabBarLabel: 'Add new deck',
                        tabBarIcon: ({ color, size }) => (
                            <MaterialCommunityIcons name="layers-plus" color={color} size={size} />
                        ),
                    }}
                />
            </Tab.Navigator>
        </NavigationContainer>
    );
}

const header_style={
    headerStyle: {
        color:"white",
        backgroundColor: '#19647e'
    }
}
