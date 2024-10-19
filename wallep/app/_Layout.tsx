import { Link, Slot } from "expo-router";
import { Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";




export default function _Layout() {
    return (
        <SafeAreaView>


            <Link href={"/account"}>
                <Text>
                    Take me to the accounts page
                </Text>
            </Link>

            <Link href={"/explore"}>
                <Text>
                    Take me to the Explore page
                </Text>
            </Link>

            <Link href={"/"}>
                <Text>
                    Take me to the For you page
                </Text>
            </Link>

            <Slot />

        </SafeAreaView>



    )
}
