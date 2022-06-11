import * as React from "react";
import SEO from "../components/Seo";
import { ChakraProvider, useMediaQuery } from "@chakra-ui/react";
import { theme } from "../theme";
import { DesktopHome } from "../components/Home/DesktopHome";
import { MobileHome } from "../components/Home/MobileHome";

const Index = () => {
  const [isMobile] = useMediaQuery("(min-width:320px) and (max-width:600px)");
  return (
    <ChakraProvider theme={theme}>
      <SEO title="ForkFacts" slug={"/"} description={"Welcome to forkfacts"} />
      <div className="container">
        <div
          className="Content"
          style={{
            gridArea: "Content",
            alignSelf: "self-start",
            justifySelf: "self-start",
          }}
        >
          {!isMobile && <DesktopHome />}
          {isMobile && <MobileHome />}
        </div>
      </div>
    </ChakraProvider>
  );
};

export default Index;
