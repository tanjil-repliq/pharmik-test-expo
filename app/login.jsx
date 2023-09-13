import { StatusBar } from "expo-status-bar";
import { Text, View } from "react-native";
import { Link } from "expo-router";

export default function LoginPage() {
  return (
    <View className="flex justify-center items-center min-h-screen">
      <Text className="text-red-400 text-center text-4xl">
        Welcome to login page
      </Text>
      <Link href="/">Go back to Home</Link>
      <StatusBar style="auto" />
    </View>
  );
}
