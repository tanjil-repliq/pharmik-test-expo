import { Image, Text, View, ScrollView } from "react-native";
import { Link } from "expo-router";

import { object, ref, string } from "yup";
import { useFormik } from "formik";

import InputField from "../../components/Shared/InputField";
import PressableButton from "../../components/Shared/PressableButton";

const yupSchema = object({
  first_name: string().required("First Name is required."),
  last_name: string().required("Last Name is required."),
  phone: string()
    .required("Please enter your phone number")
    .min(10, "Phone number should be 11 characters without country code")
    .max(11, "Phone Number should not be more than 11 characters"),
  email: string().email("Please enter a valid Email"),
  password: string()
    .required("Password is required")
    .min(8, "At least 8 characters"),
  retype_password: string()
    .required("Password is required.")
    .min(8, "At least 8 characters")
    .oneOf([ref("password")], "Passwords doesn't match"),
});

export default function CustomerRegister() {
  const { handleChange, handleBlur, handleSubmit, values, errors } = useFormik({
    initialValues: {
      first_name: "",
      last_name: "",
      email: "",
      phone: "",
      password: "",
      retype_password: "",
    },
    validationSchema: yupSchema,
    onSubmit: (values) => {
      console.log(values);
    },
  });
  return (
    <ScrollView className="bg-primary-bg">
      <View className="px-4 py-12 justify-start">
        <View className="flex-row gap-2">
          <Image
            className="h-10 w-10"
            source={require("../../assets/Logo.png")}
          />
          <Link href="/" className="text-2xl text-teal-700 font-bold">
            PHARMIK
          </Link>
        </View>
        <Text className="text-3xl font-bold my-4">Register as a Customer</Text>
        <View className="flex gap-2 mt-4">
          {/* First Name Field */}
          <InputField
            labelText="First Name"
            placeholder="Ex:Muntashir"
            autoComplete="name"
            inputMode="text"
            onBlur={handleBlur("first_name")}
            onChange={handleChange("first_name")}
            value={values.first_name}
          />
          {errors.first_name && (
            <Text className="text-red-400">{errors.first_name}</Text>
          )}
          {/* Last Name Field */}
          <InputField
            labelText="Last Name"
            placeholder="Ex: Wahid"
            autoComplete="name"
            inputMode="text"
            onBlur={handleBlur("last_name")}
            onChange={handleChange("last_name")}
            value={values.last_name}
          />
          {errors.last_name && (
            <Text className="text-red-400">{errors.last_name}</Text>
          )}
          {/* Phone Field */}
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
          {/* Email Field */}
          <InputField
            labelText="Email"
            placeholder="Ex: example@ex.com"
            autoComplete="email"
            inputMode="email"
            keyboardType="email-address"
            onBlur={handleBlur("email")}
            onChange={handleChange("email")}
            value={values.email}
          />
          {errors.email && <Text className="text-red-400">{errors.email}</Text>}
          {/* Password Field */}
          <InputField
            labelText="Password"
            placeholder="Enter Your Password"
            secureTextEntry={true}
            onBlur={handleBlur("password")}
            onChange={handleChange("password")}
            value={values.password}
          />
          {errors.password && (
            <Text className="text-red-400">{errors.password}</Text>
          )}
          {/* Confirm Password Field */}
          <InputField
            labelText="Retype Password"
            placeholder="Enter Your Password"
            secureTextEntry={true}
            onBlur={handleBlur("retype_password")}
            onChange={handleChange("retype_password")}
            value={values.retype_password}
          />
          {errors.retype_password && (
            <Text className="text-red-400">{errors.retype_password}</Text>
          )}
        </View>
        <PressableButton
          buttonLabel="Register"
          variant="teal"
          extraClassName="mt-6"
          onPress={handleSubmit}
        />
        <View className="mt-10 flex-row">
          <Text className="text-gray-800 text-sm mr-1">
            Have an Account yet?
          </Text>
          <Link href="/login" className="text-teal-700 text-sm">
            Login Instead
          </Link>
        </View>
      </View>
    </ScrollView>
  );
}
