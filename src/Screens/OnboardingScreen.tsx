import { View, Text, Image } from 'react-native'
import React from 'react'
import Onboarding from 'react-native-onboarding-swiper';



export default function OnboardingScreen() {
  return (
    <Onboarding
       

    pages={[
      {
        backgroundColor: '#Fff',
        image: <Image source={require('../../assets/welcome-290x260.png')}  />,
        title: 'Welcome to Shopz.',
        subtitle: 'I provide essential stuff for your ui designs!',
      },
        {
        backgroundColor: '#fff',
        image: <Image source={require('../../assets/heavy-290x260.png')} />,
        title: 'Onboarding',
        subtitle: 'Done with React Native Onboarding Swiper',
        },
        {
         backgroundColor: '#fff',
         image: <Image source={require('../../assets/download-290x260.png')}  />,
         title: 'Onboarding',
         subtitle: 'Done with React Native Onboarding Swiper',
        },
    ]}
  />
  )
}