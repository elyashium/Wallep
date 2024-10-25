
import { Bottom } from "@/components/BottomSheet";
import { useState } from "react";
import { Button, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function account() {

    const[pictureOpen, setPictureOpen] = useState(false);

    return (
        <SafeAreaView  style ={{flex : 1}}>
            <View style ={{flex : 1}}>

            <Text> Accounts</Text>

            <Button title ="open bottom sheet" onPress={() => setPictureOpen(true)} /> 

            {pictureOpen && <Bottom onClose={() => setPictureOpen(false)}/>}

            </View>
        </SafeAreaView>
    )
}