import { Link } from "expo-router";
import { Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function EXplore() {
    return (

        <SafeAreaView>
            <Text> Explore</Text>
            <Link href={"/accountinfo"}>
            <Text> Account information </Text>
            </Link>
        </SafeAreaView>
    )
}