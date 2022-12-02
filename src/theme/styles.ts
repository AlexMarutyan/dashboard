import { mode, Styles, StyleFunctionProps } from "@chakra-ui/theme-tools";

const styles: Styles = {
  global: (props: StyleFunctionProps) => ({
    "#root": {
      h: "100vh",
      bg: mode(
        "linear-gradient(159.02deg, rgb(15, 18, 59) 14.25%, rgb(9, 13, 46) 56.45%, rgb(2, 5, 21) 86.14%) center center / cover",
        "purple",
      ),
    },
  }),
};

export default styles;
