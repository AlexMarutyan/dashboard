import { ChakraProvider } from "@chakra-ui/react";

import SideBar from "./components/SideBar";
import SignIn from "./components/SignIn";

import theme from "./theme";

const App = () => {
  return (
    <ChakraProvider theme={theme}>
      <SignIn />
    </ChakraProvider>
  );
};

export default App;
