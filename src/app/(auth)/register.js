import { View, Text } from 'react-native'
import React from 'react'
import SignUpScreen from '../../screens/auth/SignUpScreen'
import SafeArea from '../../components/common/SafeArea'

export default function Register(){
  return (
    <SafeArea backBtnShown={true}>
      <SignUpScreen/>
    </SafeArea>
  )
}