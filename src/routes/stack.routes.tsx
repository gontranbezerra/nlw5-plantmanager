import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import { Wellcome } from '../pages/Wellcome';
import { UserIdentification } from '../pages/UserIdentification';
import { Confirmation } from '../pages/Confirmation';
// import { PlantSelect } from '../pages/PlantSelect';
import { PlantSave } from '../pages/PlantSave';
// import { MyPlants } from '../pages/MyPlants';
import AuthRoutes from './tab.routes';

import colors from '../../styles/colors';

const stackRoutes = createStackNavigator();

const StackRoutes: React.FC = () => (
  <stackRoutes.Navigator
    headerMode="none"
    screenOptions={{
      cardStyle: {
        backgroundColor: colors.white,
      },
    }}
  >
    <stackRoutes.Screen name="Wellcome" component={Wellcome} />
    <stackRoutes.Screen
      name="UserIdentification"
      component={UserIdentification}
    />
    <stackRoutes.Screen name="Confirmation" component={Confirmation} />
    {/* <stackRoutes.Screen name="PlantSelect" component={PlantSelect} /> */}
    <stackRoutes.Screen name="PlantSelect" component={AuthRoutes} />
    <stackRoutes.Screen name="PlantSave" component={PlantSave} />
    {/* <stackRoutes.Screen name="MyPlants" component={MyPlants} /> */}
    <stackRoutes.Screen name="MyPlants" component={AuthRoutes} />
  </stackRoutes.Navigator>
);

export default StackRoutes;
