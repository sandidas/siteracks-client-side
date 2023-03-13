import useDynamicHead from "@/Components/Hooks/useDynamicHead";
import React from "react";

const PPDomain = () => {
  return (
    <>
      {useDynamicHead({ slug: "ppDomain" })}
      <main>dd</main>
    </>
  );
};

export default PPDomain;
