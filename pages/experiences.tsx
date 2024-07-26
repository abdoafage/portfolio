import Heading from "@/components/experiences/Heading";
import More from "@/components/experiences/More";
import Page from "components/utility/Page";
import Experience from "@/components/experiences/Designs";
import React from "react";

function designs() {
  return (
    <Page
      currentPage="Designs"
      meta={{
        desc: "I'm an avid self-taught designer too! I publish all my web and creative designs on Dribbble also.",
      }}
    >
      <Heading />
      <Experience />
      <More />
    </Page>
  );
}

export default designs;
