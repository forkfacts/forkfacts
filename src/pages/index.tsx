import * as React from "react";
import Seo from "../components/seo";

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
        }}
      >
        Hello World
      </div>
    </div>
  </>
);

export default Index;
