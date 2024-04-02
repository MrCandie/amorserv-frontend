import { Button, Text } from "@chakra-ui/react";
import AuthWrapper from "./AuthWrapper";
import { RiLockPasswordFill } from "react-icons/ri";
import CustomInput from "../reusables/CustomInput";
import { Link } from "react-router-dom";
import { MdOutlineAlternateEmail } from "react-icons/md";
import { FaUser } from "react-icons/fa";
import { useState } from "react";

export default function Register() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    name: "",
  });
  return (
    <AuthWrapper title="Create Account">
      <Text>
        Already have an account?{" "}
        <Link style={{ textDecoration: "underline" }} to="/login">
          Login
        </Link>
      </Text>
      <CustomInput
        placeholder="Full Name"
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          setFormData({ ...formData, name: e.target.value })
        }
        value={formData.name}
        label="Full Name"
        icon={<FaUser />}
      />
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

      <Button w="100%" bg="brand.100" color="#fff" size="md">
        Register
      </Button>
    </AuthWrapper>
  );
}
