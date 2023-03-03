import ColumnTitleAndDesc from "@/Components/ColumnTitleAndDesc/ColumnTitleAndDesc";
import React from "react";

const AccuracyCompletenessAndTC = () => {
  return (
    <div className="space-y-5">
      <ColumnTitleAndDesc title="9.	ACCURACY, COMPLETENESS AND TIMELINESS OF INFORMATION" />
      <p className="text-text">
        We are not responsible if information made available on this site is not accurate, complete or current. The material on this site is provided for general information only and should not be relied upon or used as the sole basis for making decisions without consulting primary, more accurate,
        more complete or timelier sources of information. Any reliance on the material on this site is at your own risk.{" "}
      </p>
      <p className="text-text">
        This site may contain certain historical information. Historical information, necessarily, is not current and is provided for your reference only. We reserve the right to modify the contents of this site at any time, but we have no obligation to update any information on our site. You agree
        that it is your responsibility to monitor changes to our site, including these Terms of Service and the Privacy Policy.
      </p>
    </div>
  );
};

export default AccuracyCompletenessAndTC;
