import { Button, Flex } from "@chakra-ui/react";
import CustomInput from "../reusables/CustomInput";
import { useState } from "react";
import { FaUser, FaLinkedinIn } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";
import { TbWorldWww } from "react-icons/tb";

export default function UserDetails() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    linkedin: "",
    twitter: "",
    website: "",
  });
  return (
    <Flex w="100%" align="start" direction="column" gap="1rem">
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
        label="Email"
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          setFormData({ ...formData, email: e.target.value })
        }
        value={formData.email}
        placeholder="example@gmail.com"
        icon={<FaUser />}
      />
      <CustomInput
        label="twitter"
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          setFormData({ ...formData, twitter: e.target.value })
        }
        value={formData.twitter}
        placeholder="@candie_code"
        icon={<BsTwitterX />}
      />
      <CustomInput
        label="linkedin"
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          setFormData({ ...formData, linkedin: e.target.value })
        }
        value={formData.linkedin}
        placeholder="mr candie"
        icon={<FaLinkedinIn />}
      />
      <CustomInput
        label="website"
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          setFormData({ ...formData, website: e.target.value })
        }
        value={formData.website}
        placeholder="www.mrcandie.com"
        icon={<TbWorldWww />}
      />
      <Button w="100%" bg="brand.100" color="#fff" size="md">
        Save
      </Button>
    </Flex>
  );
}
