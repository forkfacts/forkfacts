import * as React from "react";
import Seo from "../components/seo";
import { Home } from "../components/Home";

const Index = () => (
  <>
    <Seo title="ForkFacts" />
    <div
      className="container"
      style={{
        display: "grid",
        height: "95vh",
        gridTemplateColumns: "repeat(4, 1fr)",
        gap: "10px",
        gridTemplateRows: "repeat(4, 1fr)",
        gridTemplateAreas: `
        ". Content Content ."
        ". Content Content ."
        ". Content Content ."
        ". Content Content ."
        `,
      }}
    >
      <div
        className="Content"
        style={{
          gridArea: "Content",
          alignSelf: "center",
          justifySelf: "center",
          width: "100%",
        }}
      >
        <Home />
      </div>
    </div>
  </>
);

export default Index;
