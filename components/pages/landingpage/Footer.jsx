import { Link } from "expo-router";
import { Image, Text, View } from "react-native";

const content = [
  {
    label: "Become a Merchant",
    href: "",
  },
  {
    label: "Contacts",
    href: "",
  },
  {
    label: "FAQs",
    href: "",
  },
  {
    label: "About",
    href: "",
  },
  {
    label: "Terms",
    href: "",
  },
  {
    label: "Privacy",
    href: "",
  },
];
const social = [
  {
    name: "Facebook",
    href: "#",
    icon: "https://www.edigitalagency.com.au/wp-content/uploads/Facebook-logo-grey-circle-png-transparent.png",
  },
  {
    name: "Instagram",
    href: "#",
    icon: "https://spng.pngfind.com/pngs/s/237-2378905_ig-png-logo-svg-transparent-instagram-logo-png.png",
  },
  {
    name: "Twitter",
    href: "#",
    icon: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ9T7BQNRM6FXmGTPZCJzxgQT1eP40ltnlOZDMXsV4&s",
  },
  {
    name: "YouTube",
    href: "#",
    icon: "https://icones.pro/wp-content/uploads/2021/02/youtube-logo-icone-grise.png",
  },
];

export default function Footer() {
  return (
    <View className="px-4 py-20 grid grid-rows-2 gap-4">
      {content.map((item, i) => (
        <View key={i}>
          <Link
            className="text-sm leading-6 text-gray-600 hover:text-gray-900"
            href={item?.href}
          >
            {item?.label}
          </Link>
        </View>
      ))}
      <View className="flex-row items-center justify-center">
        {social?.map((item, i) => (
          <Image
            key={i}
            className="h-8 w-8 m-6 mt-10"
            source={{
              uri: item?.icon,
            }}
          />
        ))}
      </View>
      <View>
        <Text className="text-center text-xs leading-5 text-gray-500 mt-8">
          {new Date().getFullYear()}, PHARMIK © All rights reserved.
        </Text>
      </View>
    </View>
  );
}
