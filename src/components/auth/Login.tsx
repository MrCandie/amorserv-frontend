import { Button, Flex, Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import CustomInput from "../reusables/CustomInput";
import { useState } from "react";
import { MdOutlineAlternateEmail } from "react-icons/md";
import { RiLockPasswordFill } from "react-icons/ri";
import AuthWrapper from "./AuthWrapper";

export default function Login() {
  const [formData, setFormData] = useState({ email: "", password: "" });
  return (
    <AuthWrapper title="Log In">
      <Text>
        Don't have an account?{" "}
        <Link style={{ textDecoration: "underline" }} to="/register">
          Register
        </Link>
      </Text>
      <CustomInput
        icon={<MdOutlineAlternateEmail />}
        label="Email"
        placeholder="example@gmail.com"
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          setFormData({ ...formData, email: e.target.value })
        }
        value={formData.email}
      />
      <CustomInput
        icon={<RiLockPasswordFill />}
        label="Password"
        type="password"
        placeholder="Enter Password"
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          setFormData({ ...formData, password: e.target.value })
        }
        value={formData.password}
      />
      <Flex w="100%" align="end" justify="end">
        <Link style={{ textDecoration: "underline" }} to="/forgot-password">
          Forgot Password?
        </Link>
      </Flex>
      <Button w="100%" bg="brand.100" color="#fff" size="md">
        Log In
      </Button>
    </AuthWrapper>
  );
}
