import { Image, Text, View } from "react-native";
import { Link } from "expo-router";

import { object, string } from "yup";
import { useFormik } from "formik";

import InputField from "../../components/Shared/InputField";
import PressableButton from "../../components/Shared/PressableButton";

const yupSchema = object({
  phone: string()
    .required("Please enter your phone number")
    .min(10, "Phone number should be 11 characters without country code")
    .max(11, "Phone Number should not be more than 11 characters"),
  password: string()
    .required("Please enter a password")
    .min(6, "Password must be minimum 6 characters or more"),
});

export default function CustomerLogin() {
  const { handleChange, handleBlur, handleSubmit, values, errors } = useFormik({
    initialValues: { phone: "", password: "" },
    validationSchema: yupSchema,
    onSubmit: (values) => {
      console.log(values);
    },
  });
  return (
    <View className="flex-1 justify-center px-6 bg-primary-bg">
      <View className="flex">
        <View className="flex-row items-center justify-center gap-2 mb-10">
          <Image
            className="h-10 w-10"
            source={require("../../assets/Logo.png")}
          />
          <Link href="/" className="text-2xl text-teal-700 font-bold">
            PHARMIK
          </Link>
        </View>
        <Text className="text-4xl font-bold text-center mb-10">
          Customer Login
        </Text>
        <View className="flex gap-1">
          {/* Email Field */}
          <InputField
            labelText="Phone"
            placeholder="Ex: 017XXXXXXXX"
            autoComplete="tel"
            inputMode="tel"
            keyboardType="phone-pad"
            onBlur={handleBlur("phone")}
            onChange={handleChange("phone")}
            value={values.phone}
          />
          {errors.phone && <Text className="text-red-400">{errors.phone}</Text>}
          {/* Password Field */}
          <InputField
            labelText="Password"
            placeholder="Enter Your Password"
            onBlur={handleBlur("password")}
            onChange={handleChange("password")}
            value={values.password}
            secureTextEntry={true}
          />
          {errors.password && (
            <Text className="text-red-400">{errors.password}</Text>
          )}
          <Text className="text-teal-700 font-bold text-base text-right mt-2">
            Forgot Password?
          </Text>
        </View>
        <PressableButton
          buttonLabel="Sign In"
          variant="teal"
          extraClassName="mt-6"
          onPress={handleSubmit}
        />
        <View className="mt-10">
          <Text className="text-gray-800 text-sm text-center">
            Don't Have an Account yet?
          </Text>
          <Link
            href="/register"
            className="text-teal-700 text-base font-semibold text-center mt-3"
          >
            Create Account
          </Link>
        </View>
      </View>
    </View>
  );
}
