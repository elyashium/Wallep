// to add gesture handler wrapper

import { Slot } from "expo-router";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Layout() {

    return (

        <GestureHandlerRootView>
            <Slot />
        </GestureHandlerRootView>

    )
}