import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import IncidentsPage from './pages/Incidents';
import DetailsPage from './pages/Details';

const AppStack = createStackNavigator();

const screenOptions = { headerShown: false };

function Routes() {
  return (
    <NavigationContainer>
      <AppStack.Navigator screenOptions={screenOptions}>
        <AppStack.Screen name="Incidents" component={IncidentsPage} />
        <AppStack.Screen name="Details" component={DetailsPage} />
      </AppStack.Navigator>
    </NavigationContainer>
  );
}

export default Routes;
