import ColumnTitleAndDesc from "@/Components/ColumnTitleAndDesc/ColumnTitleAndDesc";
import React from "react";

const YourRepresentationsTC = () => {
  return (
    <div className="space-y-5">
      <ColumnTitleAndDesc title="8. YOUR REPRESENTATIONS" />
      <p className="text-text">
        By using the Site, you represent and warrant that: (1) all registration information you submit will be true, accurate, current, and complete; (2) you will maintain the accuracy of such information and promptly update such registration information as necessary; (3) you have the legal capacity
        and you agree to comply with these Terms of Use (4) you are not under the age of 18; (5) you are not a minor in the jurisdiction of which you reside, or if a minor, you have received parental permission to use the Site; (6) you will not access the Site through automated or non-human means,
        whether through a bot, script, or otherwise; (7) you will not use the Site for any illegal or unauthorized purpose and (8) your use of the Site will not violate any applicable law or regulation.
      </p>
      <p className="text-text">If you provide any information that is untrue, inaccurate, not current, or incomplete, we have the right to suspend or terminate your account and refuse any and all current or future use of the Site (or any portion thereof).</p>
    </div>
  );
};

export default YourRepresentationsTC;
