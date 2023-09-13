import { Link } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { Text, View } from "react-native";

export default function LandingPage() {
  return (
    <View className="flex justify-center items-center min-h-screen">
      <Text className="text-red-400 text-center text-4xl">
        Pharmik comming soon...
      </Text>
      <Link href="/login">Go to Login</Link>
      <StatusBar style="auto" />
    </View>
  );
}
