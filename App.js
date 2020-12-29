import * as React from 'react';
import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialCommunityIcons } from '@expo/vector-icons';

//Own component
import DeckList from './component/DeckList/DeckList'
import DeckAdd from './component/DeckAdd/DeckAdd'



const Tab = createBottomTabNavigator();

function MyTabs() {
  return (
      <Tab.Navigator
          initialRouteName="DeckAdd"
          tabBarOptions={{
            activeTintColor: 'white',
            style: {
              backgroundColor:"#19647e",
            }

          }}
      >
        <Tab.Screen
            name="DeckList"
            component={DeckList}
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
  );
}

export default function App() {
  return (
      <NavigationContainer>
        <MyTabs />
      </NavigationContainer>
  );
}
