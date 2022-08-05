import {  Image, } from 'react-native'
import React, { Component } from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
// import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../Screens/HomeScreen';
import DetailScreen from '../Screens/DetailScreen';
import FavouriteScreen from '../Screens/FavouriteScreen';
import BuyScreen from '../Screens/BuyScreen';
import OnboardingScreen from '../Screens/OnboardingScreen';



export default class Navigation extends Component {
  static navigate(arg0: string): any {
      throw new Error('Method not implemented.');
  }
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
      {/* <Stack.Screen name="onboard" component={OnboardingScreen} /> */}
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
            backgroundColor: '#201F20',
            position: 'absolute',
            elevation: 0,
            bottom: 20,
            left: 16,
            height: 75,
            width: 343,
            borderRadius: 20,
            paddingVertical: 30,  
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