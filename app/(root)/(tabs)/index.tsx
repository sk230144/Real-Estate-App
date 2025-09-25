import { Link } from "expo-router";
import { Text, View } from "react-native";

export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
        <Text className="font-bold text-blue-500 font-rubik text-3xl">
          Welcome to Nativewind!
        </Text>
      <Link className="text-xl font-bold text-blue-500" href='/sign-in'>Sign In</Link>
    </View>
  );    
}
