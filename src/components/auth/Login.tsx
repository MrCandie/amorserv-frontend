import { Button, Flex, Text, useToast } from "@chakra-ui/react";
import { Link, useNavigate } from "react-router-dom";
import CustomInput from "../reusables/CustomInput";
import { useContext, useEffect, useState } from "react";
import { MdOutlineAlternateEmail } from "react-icons/md";
import { RiLockPasswordFill } from "react-icons/ri";
import AuthWrapper from "./AuthWrapper";
import { AuthContext } from "../../util/context";
import { login } from "../../util/http";
import Loader from "../reusables/Loader";

export default function Login() {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [loading, setLoading] = useState(false);
  const [disabled, setDisabled] = useState(false);
  const toast = useToast();
  const ctx = useContext(AuthContext);
  const [progress, setProgress] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    const isDisabled = formData.email && formData.password;
    setDisabled(!isDisabled);
  }, [formData.email, formData.password]);

  async function loginHandler() {
    if (!formData.email || !formData.password) {
      toast({
        title: "Fill out all fields to proceed",
        description: "",
        status: "warning",
        position: "top-left",
        duration: 9000,
        isClosable: true,
      });
      return;
    }

    try {
      setLoading(true);
      setProgress(20);
      setProgress(40);
      setProgress(60);
      const res = await login(formData);
      ctx.login(res.token);
      ctx.setUser(res.data.user);
      toast({
        title: `Login Successful`,
        description: ``,
        status: "success",
        duration: 3000,
        isClosable: true,
        position: "top-right",
      });
      navigate("/");
    } catch (error: any) {
      toast({
        title: `${error?.response?.data.message || "something went wrong"}`,
        description: ``,
        status: "error",
        duration: 3000,
        isClosable: true,
        position: "top-right",
      });
    }
    setProgress(80);
    setProgress(100);
    setLoading(false);
  }
  return (
    <>
      <Loader progress={progress} setProgress={setProgress} />
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
        <Button
          loadingText=""
          isLoading={loading}
          isDisabled={disabled}
          onClick={loginHandler}
          w="100%"
          bg="brand.100"
          color="#fff"
          size="md"
        >
          Log In
        </Button>
      </AuthWrapper>
    </>
  );
}
