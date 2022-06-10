import * as React from "react";
import SEO from "../components/Seo";
import { ChakraProvider, useMediaQuery } from "@chakra-ui/react";
import { theme } from "../theme";
import { Home } from "../components/Home";
import { MobileHome } from "../components/Home/MobileHome";

const Index = () => {
  const [isMobile] = useMediaQuery("(min-width:320px) and (max-width:600px)");
  return (
    <ChakraProvider theme={theme}>
      <SEO title="ForkFacts" slug={"/"} description={"Welcome to forkfacts"} />
      <div
        className="container"
        style={{
          display: "grid",
          height: "100vh",
        }}
      >
        <div
          className="Content"
          style={{
            gridArea: "Content",
            alignSelf: "self-start",
            justifySelf: "self-start",
          }}
        >
          {!isMobile && <Home />}
          {isMobile && <MobileHome />}
        </div>
      </div>
    </ChakraProvider>
  );
};

export default Index;
