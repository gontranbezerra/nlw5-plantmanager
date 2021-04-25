import React, { useEffect } from 'react';
import * as Notifications from 'expo-notifications';

import {
  useFonts,
  Jost_400Regular,
  Jost_600SemiBold,
} from '@expo-google-fonts/jost';
import AppLoading from 'expo-app-loading';

import Routes from './src/routes';

import { PlantProps } from './src/libs/storage';

const App = () => {
  const [fontsLoaded] = useFonts({
    Jost_400Regular,
    Jost_600SemiBold,
  });

  useEffect(() => {
    const subscription = Notifications.addNotificationReceivedListener(
      async (notification) => {
        const data = notification.request.content.data.plant as PlantProps;
        console.log('App.notification.data', data);
      }
    );
    return () => subscription.remove();
    //
    // async function notifications() {
    //   const data = await Notifications.getAllScheduledNotificationsAsync();
    //   console.log('>>> Notificações agendadas:');
    //   console.log('App.notification.data', data);
    // }
    // notifications();
    //
    // async function notifications() {
    //   await Notifications.cancelAllScheduledNotificationsAsync();
    // }
    // notifications();
  }, []);

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  return <Routes />;
};

export default App;
