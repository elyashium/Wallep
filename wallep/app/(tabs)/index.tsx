// import { Link } from "expo-router";
// import { Text, View } from "react-native";
// import { SafeAreaView } from "react-native-safe-area-context";

import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { View, Text } from 'react-native';

const Tab = createMaterialTopTabNavigator();

export default function MyTabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Liked" component={HomeScreen} />
      <Tab.Screen name="Library" component={HomeScreen} />
      <Tab.Screen name="Suggested" component={SettingsScreen} />
    </Tab.Navigator>
  );
}

function HomeScreen(){
    return(
        <View>
            <Text>
                hi from the home screen
            </Text>
        </View>
    )
}

//traditonal way to react-navigation routing.

function SettingsScreen(){
    return(
        <View>
            <Text>
                hi from the home screen
            </Text>
        </View>
    )
}