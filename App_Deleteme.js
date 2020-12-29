import * as React from 'react';
import { Text, View, AppRegistry} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { createStackNavigator } from '@react-navigation/stack'

//Own component
import DeckList from './component/DeckList/DeckList'
import DeckAdd from './component/DeckAdd/DeckAdd'
import DeckDetails from "./component/DeckList/DeckDetails";



const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();
function MyTabs() {
  return (
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
            name="DeckDetails"
            component={DeckDetails}
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
          <Stack.Navigator initialRouteName="Tabs">
              <Stack.Screen name="DeckDetails" component={DeckDetails} />
              <Stack.Screen name="Tabs" component={MyTabs} />
          </Stack.Navigator>
      </NavigationContainer>
  );
}


AppRegistry.registerComponent('App', () => App)
