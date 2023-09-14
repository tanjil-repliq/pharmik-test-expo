import { ImageBackground, Pressable, Text, View } from "react-native";
import { router } from "expo-router";

import PressableButton from "../../Shared/PressableButton";

export default function Hero() {
  const image = {
    uri: "https://i.ibb.co/mDJBhC8/hero-bg.png",
  };
  return (
    <>
      <View className="flex-1">
        <ImageBackground
          className="flex-1 justify-center"
          source={image}
          resizeMode="cover"
        >
          <View className="px-6 py-16">
            <Text className="text-white text-4xl font-bold">
              Your Pharmacy made simple
            </Text>
            <Text className="text-xl text-white mt-4">
              Streamline your pharmaceutical supply chain. From inventory
              management to order tracking, our B2B software makes it easy. Get
              real-time insights and analytics. Try it out today.
            </Text>

            <PressableButton
              buttonLabel="Become Merchant"
              extraClassName="w-60 mt-8 bg-white border-0 px-8 py-4"
              labelClassName="text-primary"
              onPress={() => router.push("/merchant-login")}
            />
          </View>
        </ImageBackground>
      </View>
    </>
  );
}
