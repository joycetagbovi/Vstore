import { Text, View, StyleSheet, Image, TouchableOpacity } from 'react-native'
import React, { Component } from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
// import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../Screens/HomeScreen';
import DetailScreen from '../Screens/DetailScreen';
import FavouriteScreen from '../Screens/FavouriteScreen';
import BuyScreen from '../Screens/BuyScreen';
import { BackdropFilter } from '@shopify/react-native-skia';



export default class Navigation extends Component {
  render() {
    return (
        <NavigationContainer>
          <RootNavigator />
        </NavigationContainer>
    )
  }
}

const Stack = createNativeStackNavigator();
function RootNavigator() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,    
      }}
      >
      <Stack.Screen
        name="root"
        component={BottomTabNavigator}
      />
    </Stack.Navigator>
  )
}

const Tab = createBottomTabNavigator();

export function BottomTabNavigator () {
  
   

    return (
        <Tab.Navigator
         screenOptions={{ 
          tabBarShowLabel: false,
          headerShown: false,   
          tabBarStyle:{
            backgroundColor: 'rgba(37, 40, 48, 0.8);',
            position: 'absolute',
            elevation: 0,
            bottom: 0,
            height: 100,
            borderTopLeftRadius: 52,
            borderTopRightRadius: 52,
            paddingVertical: 16,  
            }
         }}  >
            <Tab.Screen 
            name="Home" component={HomeScreen} 
            options={{
              tabBarIcon: ({ focused }) => (
               <Image source={require('../../assets/icons/cooking.png')} 
                   resizeMode="contain"
                style={{
                   width: 25, 
                   height: 25,
                   tintColor: focused ? '#FF7269' : '#FFffff' ,
                   
                  }}
               />   
              ),
            }}
            />
            <Tab.Screen name="Detail" component={DetailScreen} 
            options={{
              tabBarIcon: ({ focused }) => (
                <Image source={require('../../assets/icons/Category.png')}
                    resizeMode="contain"
                    style={{
                      width: 25,
                      height: 25,
                      tintColor: focused ? '#FFF' : '#FFF'
                    }}
                />
              ),}}
            />
             <Tab.Screen name="Favourite"  component={FavouriteScreen} 
            options={{
              tabBarIcon: ({ focused }) => (
                <Image source={require('../../assets/icons/Heart.png')}
                    resizeMode="contain"
                    style={{
                      width: 25,
                      height: 25,
                      tintColor: focused ? '#FFF' : '#FFF'
                    }}
                />
              ),}}
            />
             <Tab.Screen name="Buy"  component={BuyScreen} 
            options={{
              tabBarIcon: ({ focused }) => (
                <Image source={require('../../assets/icons/Buy.png')}
                    resizeMode="contain"
                    style={{
                      width: 25,
                      height: 25,
                      tintColor: focused ? '#FFF' : '#FFF'
                    }}
                />
              ),}}
            />
        </Tab.Navigator>
    )
}

// const styles = StyleSheet.create({

// })