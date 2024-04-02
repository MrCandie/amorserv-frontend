import { RiLockPasswordFill } from "react-icons/ri";
import AuthWrapper from "./AuthWrapper";
import CustomInput from "../reusables/CustomInput";
import { Button, Flex } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { useState } from "react";

export default function ResetPassword() {
  const [formData, setFormData] = useState({
    password: "",
    confirmPassword: "",
  });
  return (
    <AuthWrapper title="Reset Password">
      <CustomInput
        icon={<RiLockPasswordFill />}
        label="New Password"
        type="password"
        placeholder="Enter Password"
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          setFormData({ ...formData, password: e.target.value })
        }
        value={formData.password}
      />
      <CustomInput
        icon={<RiLockPasswordFill />}
        label="Confirm Password"
        type="password"
        placeholder="Enter Password"
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          setFormData({ ...formData, confirmPassword: e.target.value })
        }
        value={formData.password}
      />
      <Flex w="100%" align="end" justify="end">
        <Link style={{ textDecoration: "underline" }} to="/login">
          Back to login
        </Link>
      </Flex>
      <Button w="100%" bg="brand.100" color="#fff" size="md">
        Reset
      </Button>
    </AuthWrapper>
  );
}
