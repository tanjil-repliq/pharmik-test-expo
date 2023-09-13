import { Link } from "expo-router";

import { Text, View, ScrollView } from "react-native";

export default function LandingPage() {
  return (
    <ScrollView className="min-h-screen">
      <View className="w-ful p-4 flex-row items-center justify-between">
        <Text className="text-primary font-semibold text-lg">Pharmik</Text>
        <View className="flex-row items-center gap-4">
          <Link href="/login" className="text-primary font-semibold">
            Login
          </Link>
          <Link
            href="/login"
            className="rounded-md bg-primary py-2 px-3 font-semibold text-white shadow-sm hover:bg-teal-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal-600"
          >
            Sighup
          </Link>
        </View>
      </View>
    </ScrollView>
  );
}
