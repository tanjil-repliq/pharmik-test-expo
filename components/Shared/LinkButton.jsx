import React from "react";
import { Link } from "expo-router";
import { Text } from "react-native";

const labelVariants = {
  default: "text-grey-500",
  teal: "text-primary font-semibold",
};

const LinkButton = ({
  buttonLabel,
  variant = "default",
  href,
  extraClassName,
}) => {
  return (
    <Link href={href} asChild>
      <Text className={`${labelVariants[variant]} ${extraClassName}`}>
        {buttonLabel}
      </Text>
    </Link>
  );
};

export default LinkButton;
