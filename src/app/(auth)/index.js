import { View, Text } from 'react-native'
import React from 'react'
import SafeArea from '../../components/common/SafeArea'
import StartingScreen from '../../screens/auth/StartingScreen'

export default function Index(){
  return (
    <SafeArea>
        <StartingScreen/>
    </SafeArea>
  )
}