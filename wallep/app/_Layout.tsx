import { Link } from "expo-router";
import { Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";




export default function _Layout() {
  return (
      <SafeAreaView>
        <Link href={"/Account"}>
        <Text>
            Take me to the accounts page
        </Text>
        </Link>

        <Link href={"/Explore"}>
        <Text>
            Take me to the Explore page
        </Text>
        </Link>

        <Link href={"/Foryou"}>
        <Text>
            Take me to the For you page
        </Text>
        </Link>

    </SafeAreaView>
  )
}
