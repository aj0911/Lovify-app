import React from 'react'
import ForgotPassword from '../../screens/auth/ForgotPassword'
import SafeArea from '../../components/common/SafeArea'

export default function Forgot(){
  return (
    <SafeArea backBtnShown={true}>
      <ForgotPassword/>
    </SafeArea>
  )
}