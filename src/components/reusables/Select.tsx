import { FormControl, FormLabel, Select } from "@chakra-ui/react";
import React from "react";

export default function SelectComponent({
  label,
  onChange,
  placeholder,
  options,
  value,
}: {
  label?: string;
  placeholder: string;
  options: Array<string>;
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  value: string;
}) {
  return (
    <FormControl>
      <FormLabel fontSize={{ lg: 16, md: 15, base: 12 }}>{label}</FormLabel>
      <Select
        onChange={onChange}
        focusBorderColor="transparent"
        placeholder={placeholder}
        fontSize={{ lg: 16, md: 16, base: 16 }}
        _placeholder={{ fontSize: { lg: 16, md: 15, base: 12 } }}
        value={value}
        border="none"
        outline="none"
        bg="#ddd"
      >
        {options?.map((el, i) => (
          <option className="option" key={i} value={el}>
            {el}
          </option>
        ))}
      </Select>
    </FormControl>
  );
}
