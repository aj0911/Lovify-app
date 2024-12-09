import { View, Text, SafeAreaView } from 'react-native'
import React from 'react'
import { COLORS } from '../../utils/constants'

const SafeArea = ({children,backgroundColor=COLORS._primary_color_1}) => {
  return (
    <SafeAreaView style={{flex:1, backgroundColor}}>
        {children}
    </SafeAreaView>
  )
}

export default SafeArea