import React from "react";
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { StyleSheet, Text, View, Image } from 'react-native';

//icons
const icon_back = require("./assets/icons/arrow-left.png");

// screens
import MovieList from "./app/screens/movieList";
import NewMovie from "./app/screens/newMovie";

//redux store
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import appReducer from "./app/reducers/reducer";
const store = createStore(appReducer);

//navigator
const RootStack = createStackNavigator();

const screenOptions = { 
  headerStyle: {
    backgroundColor: "#c6c6cc"             
  },
  headerTitleAlign: "left"
}

export default function App() {
  return (
    <Provider store={store}>
    <NavigationContainer>
      <RootStack.Navigator screenOptions={screenOptions}>        
        <RootStack.Screen 
            name="movieList" 
            component={MovieList}
            options={{                   
              title: "Movie List",                            
              headerTitleStyle: {                
                fontSize: 20,                              
                fontWeight: '500'      
              }
            }}
          />
          <RootStack.Screen 
            name="newMovie" 
            component={NewMovie}
            options={{              
              title: "Add a new Movie",              
              headerTitleStyle: {                
                fontSize: 16,                                               
                fontWeight: '500'      
              },
              headerBackTitleVisible: false,
              headerBackImage: () => (<BackImage/>)             
            }}
          />
        </RootStack.Navigator>
    </NavigationContainer> 
    </Provider>
  );
}

const BackImage = () => {
  return(
    <View style={{paddingLeft: 22}}>
      <Image source={icon_back} style={{width: 20, height: 14}}></Image>
    </View>
  )
}

const SaveButton = () => {
  return(
    <Text style={{color: "#008000", fontWeight: "500", fontSize: 16, paddingRight: 23}}>Save</Text>
  )
}