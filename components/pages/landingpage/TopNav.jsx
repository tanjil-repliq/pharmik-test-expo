import { Link } from "expo-router";
import { Image, View, Text } from "react-native";

export default function TopNav() {
  return (
    <>
      <View className="p-4 flex-row items-center justify-between">
        <View className="flex-row gap-2">
          <Image
            className="h-10 w-10"
            source={require("../../../assets/Logo.png")}
          />
          <Text className="text-2xl text-teal-700 font-bold">PHARMIK</Text>
        </View>
        <View className="flex-row items-center gap-4">
          <Link href="/login" className="text-primary font-semibold text-base">
            Login
          </Link>
          <Link
            href="/login"
            className="rounded-md bg-primary py-2 px-3 font-semibold text-white shadow-sm hover:bg-teal-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal-600 text-base"
          >
            Sign Up
          </Link>
        </View>
      </View>
    </>
  );
}
