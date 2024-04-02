import {
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  InputLeftElement,
} from "@chakra-ui/react";
import { ReactElement } from "react";

export default function CustomInput({
  type,
  value,
  onChange,
  placeholder,
  readOnly,
  label,
  icon,
}: {
  type?: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder: string;
  readOnly?: boolean;
  label?: string;
  icon?: ReactElement;
}) {
  return (
    <FormControl>
      <FormLabel
        fontSize={{ lg: 16, md: 15, base: 12 }}
        textTransform="capitalize"
      >
        {label}
      </FormLabel>
      <InputGroup bg="#ddd" border="none">
        {icon && (
          <InputLeftElement pointerEvents="none">{icon}</InputLeftElement>
        )}
        <Input
          type={type}
          value={value}
          onChange={onChange}
          fontSize={{ lg: 16, md: 16, base: 16 }}
          _placeholder={{ fontSize: { lg: 16, md: 15, base: 12 } }}
          focusBorderColor="transparent"
          outline="none"
          placeholder={placeholder}
          border="none"
          readOnly={readOnly}
        />
      </InputGroup>
    </FormControl>
  );
}
