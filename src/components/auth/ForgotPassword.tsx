import { MdOutlineAlternateEmail } from "react-icons/md";
import CustomInput from "../reusables/CustomInput";
import AuthWrapper from "./AuthWrapper";
import { Button } from "@chakra-ui/react";
import { useState } from "react";

export default function ForgotPassword() {
  const [formData, setFormData] = useState({
    email: "",
  });
  return (
    <AuthWrapper title="Forgot Password">
      <CustomInput
        icon={<MdOutlineAlternateEmail />}
        label="Email"
        placeholder="example@gmail.com"
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          setFormData({ ...formData, email: e.target.value })
        }
        value={formData.email}
      />

      <Button w="100%" bg="brand.100" color="#fff" size="md">
        Continue
      </Button>
    </AuthWrapper>
  );
}
