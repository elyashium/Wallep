import { Link } from "expo-router";
import { Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Foryou() {
    return (
        <SafeAreaView>

            <Link href={"/liked"}> Liked page  </Link>
            <Link href={"/library"}> library page  </Link>
            <Link href={"/suggested"}> suggested page  </Link>

            <Text> For you </Text>
            
        </SafeAreaView>
    )
}