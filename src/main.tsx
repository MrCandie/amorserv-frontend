import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import AuthProvider from "./util/context.tsx";

const theme = extendTheme({
  colors: {
    brand: {
      100: "#09203f",
    },
  },
});

ReactDOM.createRoot(document.getElementById("root")!).render(
  <AuthProvider>
    <ChakraProvider theme={theme}>
      <App />
    </ChakraProvider>
  </AuthProvider>
);
