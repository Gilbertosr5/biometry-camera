import React from 'react';
import {
  StyleSheet,
  Text,
  TouchableOpacity
} from 'react-native';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { palette } from './src/helpers';
import Feather from 'react-native-vector-icons/Feather';
import Toast from 'react-native-toast-message';

import { AppStateProvider } from './src/contexts/AppState';

import {
  Home,
  Login
} from "./src/screens/index";
import { FaceDetectorProvider } from './src/contexts/FaceDetector';

const Stack = createNativeStackNavigator();

function App(): React.JSX.Element {
  const logOut = (navigation: any) => {
    console.log('Log Out');
    console.log(typeof navigation);
    navigation.navigate('Login');
  }

  return (
    <AppStateProvider>
      <FaceDetectorProvider>
        <NavigationContainer>
          <Stack.Navigator initialRouteName='Login'>
            <Stack.Screen
              name='Login' 
              component={Login}
              options={{ headerShown: false }} 
            />
            <Stack.Screen 
              name='Home' 
              component={Home} 
              options={({navigation})=>(
                {
                  title: 'Profile',
                  headerStyle: {
                    backgroundColor: palette.white.hex,
                  },
                  headerLeft: () =>(
                    <TouchableOpacity onPress={()=> {
                      logOut(navigation);
                    }} style={{marginLeft: 5, marginRight:15}}>
                      <Feather name="log-out" size={20} color={palette.primary.hex} />
                    </TouchableOpacity>
                  ),
                  headerTintColor: palette.primary.hex,
                  headerTitleStyle: {
                    fontWeight: 'bold',
                  },
                })
              }
            />
          </Stack.Navigator>
          <Toast />
        </NavigationContainer>
      </FaceDetectorProvider>
    </AppStateProvider>
  );
}

export default App;
