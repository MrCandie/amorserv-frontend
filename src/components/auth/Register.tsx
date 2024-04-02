import { Button, Text, useToast } from "@chakra-ui/react";
import AuthWrapper from "./AuthWrapper";
import { RiLockPasswordFill } from "react-icons/ri";
import CustomInput from "../reusables/CustomInput";
import { Link, useNavigate } from "react-router-dom";
import { MdOutlineAlternateEmail } from "react-icons/md";
import { FaUser } from "react-icons/fa";
import { useContext, useEffect, useState } from "react";
import { signup } from "../../util/http";
import { AuthContext } from "../../util/context";
import Loader from "../reusables/Loader";

export default function Register() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    name: "",
  });
  const [loading, setLoading] = useState(false);
  const [disabled, setDisabled] = useState(false);
  const toast = useToast();
  const ctx = useContext(AuthContext);
  const [progress, setProgress] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    const isDisabled = formData.email && formData.password && formData.name;
    setDisabled(!isDisabled);
  }, [formData.email, formData.password, formData.name]);

  async function signupHandler() {
    if (!formData.name || !formData.email || !formData.password) {
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
      const res = await signup(formData);
      ctx.login(res.token);
      ctx.setUser(res.data.user);
      toast({
        title: `Signup Successful`,
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

        <Button
          isLoading={loading}
          loadingText=""
          onClick={signupHandler}
          w="100%"
          bg="brand.100"
          color="#fff"
          size="md"
          isDisabled={disabled}
        >
          Register
        </Button>
      </AuthWrapper>
    </>
  );
}
