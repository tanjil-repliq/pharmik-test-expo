import { Image, Text, View } from "react-native";

const content = [
  {
    image: "https://i.ibb.co/J3dLqx6/Card3.png",
    title: "Easy Product Management",
    content:
      "Merchants can easily manage and update their product listings. This helps ensure accuracy and timeliness, which can lead to increased customer satisfaction.",
  },
  {
    image: "https://i.ibb.co/bKPZqGT/Card2.png",
    title: "Efficient Employee Management",
    content:
      "Merchants can easily manage their staff. This can include tracking hours worked, assigning tasks, and managing schedules. By streamlining these processes, merchants can focus more on growing their business.",
  },
  {
    image: "https://i.ibb.co/TtT443p/Card1.png",
    title: "Customizable",
    content:
      "The ability to add merchant sites and domains means that each merchant can have their own unique look and feel. This can help differentiate their brand from competitors and create a more personalized shopping experience for customers.",
  },
];

export default function AppContent() {
  return (
    <>
      {content?.map((item, i) => (
        <View key={i}>
          <View className="w-full px-4">
            <Image
              className="h-96 w-full flex-1 justify-center"
              source={{
                uri: item?.image,
              }}
            />
            <Text className="text-2xl font-semibold text-gray-900">
              {item?.title}
            </Text>
            <Text className="mt-2 text-sm text-gray-500">{item?.content}</Text>
          </View>
        </View>
      ))}
    </>
  );
}
