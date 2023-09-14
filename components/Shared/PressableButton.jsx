import { Pressable, Text } from "react-native";

const buttonVariants = {
  default:
    "border-gray-300 bg-white hover:bg-gray-50 focus:ring-teal-600 focus:ring-offset-2",
  warning:
    "border-transparent bg-red-600 hover:bg-sky-700 focus:ring-sky-600 focus:ring-offset-2",
  teal: "border-transparent bg-primary hover:bg-teal-600 focus:ring-teal-700 focus:ring-offset-2",
};

const labelVariants = {
  default: "text-grey-500",
  warning: "text-white",
  teal: "text-white",
};

export default function PressableButton({
  onPress = () => {},
  variant = buttonVariants["default"],
  extraClassName,
  buttonLabel,
  disabled = false,
  ...props
}) {
  return (
    <Pressable
      className={`flex-row justify-center items-center rounded-md border px-4 py-2 shadow-sm focus:outline-none focus:ring-2 ${buttonVariants[variant]} ${extraClassName}`}
      onPress={onPress}
      disabled={disabled}
    >
      {props.children ? props.children : null}
      <Text
        className={`text-center text-lg font-medium ${labelVariants[variant]} ${props.labelClassName}`}
      >
        {buttonLabel}
      </Text>
    </Pressable>
  );
}
