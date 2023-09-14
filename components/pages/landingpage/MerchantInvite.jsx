import { ImageBackground, Pressable, Text, View } from "react-native";

export default function MerchantInvite() {
  const image = {
    uri: "https://i.ibb.co/mDJBhC8/hero-bg.png",
  };
  return (
    <View className="mt-10 px-4 ">
      <ImageBackground
        imageStyle={{ borderRadius: 10 }}
        className="flex-1 justify-center"
        source={image}
        resizeMode="cover"
      >
        <View className="px-6 py-16">
          <Text className="text-white text-4xl font-bold text-center">
            Are You Ready to Become a Merchant?
          </Text>
          <Text className="mt-3 text-xl text-white text-center">
            Empowering suppliers, enhancing pharmaceutical customer experiences
            - Your one-stop shop for all your pharmacy needs.
          </Text>
          <Pressable className="bg-white px-8 py-4 rounded-md mt-8 w-60 self-center">
            <Text className="text-center text-lg text-primary font-semibold">
              Become Merchant
            </Text>
          </Pressable>
        </View>
      </ImageBackground>
    </View>
  );
}
