import { useFormState } from "react-hook-form";

import { FormControl as ChakraFormControl, FormControlProps } from "@chakra-ui/react";

export interface BaseProps extends FormControlProps {
  name: "string";
}

const FormControlWrapper = ({ children }: FormControlProps) => {
  return <ChakraFormControl>{children}</ChakraFormControl>;
};

const FormControl = ({ name, children, ...rest }: BaseProps) => {
  const { errors } = useFormState();
  return <FormControlWrapper>{children}</FormControlWrapper>;
};

export default FormControl;
