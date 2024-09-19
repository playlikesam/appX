// Navigation.tsx
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Parts from '@/components/parts';
import Cart from '@/components/cart';

const Stack = createStackNavigator();

const Navigation: React.FC = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Parts"
        screenOptions={{ headerShown: false }} // Hide header if you want to customize it
      >
        <Stack.Screen name="Parts" component={Parts} />
        <Stack.Screen name="Cart" component={Cart} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
