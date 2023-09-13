import {
  View,
  Text,
  TextInput,
  Button,
  TouchableOpacity,
  Pressable,
  Image,
} from "react-native";

export default function Login() {
  return (
    <View className="flex-1 justify-center px-6">
      <View className="flex">
        <View className="flex-row items-center justify-center gap-2 mb-10">
            <Image
            className="h-10 w-10"
             source={require("../../assets/Logo.png")} />
             <Text className="text-2xl text-teal-700 font-bold">PHARMIK</Text>
        </View>
        <Text className="text-4xl font-bold text-center mb-10">
          Customer Login
        </Text>
        <View className="flex gap-1">
          <View>
            <Text className="text-sm text-gray-600 font-medium mb-1">Email</Text>
            <TextInput
              className="px-4 py-2 border border-gray-300 focus:border-teal-700 w-full rounded-md text-sm"
              placeholder="Enter Your Email"
            />
          </View>
          <View>
            <Text className="text-sm text-gray-600 font-medium mb-1">
              Password
            </Text>
            <TextInput
              className="px-4 py-2 border border-gray-300 focus:border-teal-700 w-full rounded-md text-sm"
              placeholder="Enter Your Password"
            />
          </View>
          <Text className="text-teal-700 font-bold text-base text-right mt-2">
            Forgot Password?
          </Text>
        </View>
        <Pressable className="bg-teal-700 px-4 py-2 rounded-md mt-6">
          <Text className="text-white text-center text-lg font-medium">Sign In</Text>
        </Pressable>
        <View className="mt-10">
            <Text className="text-gray-800 text-sm text-center">Don't Have an Account yet?</Text>
            <Text className="text-teal-700 text-base font-semibold text-center mt-3">Create Account</Text>
        </View>
      </View>
    </View>
  );
}
