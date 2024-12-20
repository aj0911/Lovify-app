import { View, Text } from 'react-native'
import React from 'react'
import SafeArea from '../../components/common/SafeArea'
import SignInScreen from '../../screens/auth/SignInScreen'

export default function Login(){
  return (
    <SafeArea backBtnShown={true}>
      <SignInScreen/>
    </SafeArea>
  )
}