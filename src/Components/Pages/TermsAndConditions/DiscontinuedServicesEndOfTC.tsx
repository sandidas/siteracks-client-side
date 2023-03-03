import ColumnTitleAndDesc from "@/Components/ColumnTitleAndDesc/ColumnTitleAndDesc";
import React from "react";

const DiscontinuedServicesEndOfTC = () => {
  return (
    <div className="space-y-5">
      <ColumnTitleAndDesc title="10. DISCONTINUED SERVICES; END OF LIFE POLICY" />
      <p className="text-text">
        SiteRacks reserves the right to cease offering or providing any of the (i) Services or (ii) individual features, functionalities, or aspects of the Services at any time, for any or no reason, and without prior notice. Although SiteRacks makes great effort to maximize the lifespan of all its
        Services and features, functionalities, or aspects of the Services, there are times when a Service or specific feature, functionality, or aspect of a Service that we offer will be discontinued or reach its End-of-Life ("EOL"). If that is the case, those Services, or the specific feature,
        functionality, or aspect of that Service, will no longer be supported by SiteRacks, in any way, effective on the EOL date.
      </p>
      <p className="text-text">
        {" "}
        <strong>Notice and Migration.</strong> In the event that any Service we offer has reached or will reach EOL, we will attempt to notify you thirty or more days in advance of the EOL date. It is your responsibility to take all necessary steps to replace the Service by migrating to a new
        Service before the EOL date, or by entirely ceasing reliance on said Service before the EOL date. In either case, SiteRacks will either offer a comparable Service for you to migrate to for the remainder of the term of your purchase, a prorated in-store credit, or a prorated refund, to be
        determined by SiteRacks in its sole and absolute discretion. SiteRacks may, with or without notice to you, migrate you to the most up-to-date version of the Service, if available. You agree to take full responsibility for any and all loss or damage arising from any such migration. In the
        event that a feature, functionality, or aspect of any Service we offer has reached or will reach EOL, then we will attempt to notify you thirty or more days in advance of the EOL date. However, if the Service maintains a least reasonably equivalent functionality without such feature,
        functionality, or aspect, as determined by SiteRacks in its sole and absolute discretion, SiteRacks will not be required to offer a comparable feature or functionality for the Service or a refund
      </p>
      <p className="text-text">
        {" "}
        <strong>No Liability.</strong> SiteRacks will not be liable to you or any third party for any modification, suspension, or discontinuance of any of the (i) Services or (ii) individual features, functionalities, or aspects of the Services we may offer, provide or facilitate access to.
      </p>
    </div>
  );
};

export default DiscontinuedServicesEndOfTC;
