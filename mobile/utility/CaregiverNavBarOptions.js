import React from 'react'
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons'
import { colors, globalStyleSheet } from './Theme'

const CaregiverNavBarOptions = ({ route }) => ({
  headerShown: false,
  tabBarStyle: globalStyleSheet.tabBar,
  tabBarLabelStyle: globalStyleSheet.tabBarLabel,
  tabBarIcon: ({ focused, color, size }) => {
    let iconName
    if (route.name === 'Home') {
      iconName = focused ? 'home-variant' : 'home-variant-outline'
    } else if (route.name === 'Mood') {
      iconName = focused ? 'camera' : 'camera-outline'
    } else if (route.name === 'Schedule') {
      iconName = focused ? 'credit-card' : 'credit-card-outline'
    } else if (route.name === 'Profile') {
      iconName = focused ? 'credit-card' : 'credit-card-outline'
    }

    return <MaterialCommunityIcons name={iconName} size={size} color={color} />
  },
  tabBarActiveTintColor: colors.primary,
  tabBarInactiveTintColor: colors.gray
})

export default CaregiverNavBarOptions
