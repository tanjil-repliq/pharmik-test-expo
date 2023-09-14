import { Text, TextInput, View } from "react-native";

export default function InputField({
  labelText = "Label",
  placeholder = "Enter your name",
  autoComplete = "off",
  inputMode = "text",
  keyboardType = "default",
  secureTextEntry = false,
  editable = true,
  value = "",
  onBlur = () => {},
  onChange = () => {},
}) {
  return (
    <View>
      <Text className="text-sm text-gray-600 font-medium mb-1">
        {labelText}
      </Text>
      <TextInput
        className="px-4 py-2 border border-gray-300 focus:border-teal-700 w-full rounded-md text-sm"
        placeholder={placeholder}
        autoComplete={autoComplete}
        inputMode={inputMode}
        keyboardType={keyboardType}
        editable={editable}
        secureTextEntry={secureTextEntry}
        value={value}
        // Actions
        onBlur={onBlur}
        onChangeText={onChange}
      />
    </View>
  );
}
