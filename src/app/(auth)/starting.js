import React from 'react'
import SafeArea from '../../components/common/SafeArea'
import AllSetScreen from '../../screens/onboarding/AllSetScreen'

export default function Starting(){
  return (
    <SafeArea backBtnShown={false}>
      <AllSetScreen/>
    </SafeArea>
  )
}