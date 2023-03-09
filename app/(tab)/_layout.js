import { Tabs } from 'expo-router'; 
import { Feather } from '@expo/vector-icons'

export default function Layout() {
  return(
    <Tabs>
      <Tabs.Screen
        name="index"
        options={{
          title: 'Home',
          tabBarLabel: 'Home',
          tabBarIcon: ({ color, size }) => (
            <Feather name='home' color={color} size={size}/>
          )
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          title: 'Profile',
          tabBarLabel: 'Profile',
          tabBarIcon: ({ color, size }) => (
            <Feather name='user' color={color} size={size}/>
          )
        }}
      />
    </Tabs>
  )
}