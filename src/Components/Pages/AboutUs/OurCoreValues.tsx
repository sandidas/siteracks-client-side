import FeatureCard from "@/Components/Card/FeatureCard";
import SectionTitle from "@/Components/SectionTitle/SectionTitle";
import React from "react";

const OurCoreValues = () => {
  return (
    <section className="py-[10vh] bg-surface">
      <div className="max-w-screen-2xl mx-auto px-3 md:px-5">
        <SectionTitle title="Our Core Values" />
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 pt-[5vh]">
          {/* item  */}
          <FeatureCard backgroundSecond>
            <div className="space-y-5">
              <h3 className="text-title font-bold text-3xl">Innovation at Heart</h3>
              <p className="text-text">Innovation, together with curiosity, lies at the heart of everything we do at SiteRacks.</p>
            </div>
            <div className="grow"></div>
            {/* footer */}
          </FeatureCard>

          {/* item  */}
          <FeatureCard backgroundSecond>
            <div className="space-y-5">
              <h3 className="text-title font-bold text-3xl">Simplicity at Everything</h3>
              <p className="text-text">From solving complex hosting problems to day-to-day operations, simplicity is always on our minds</p>
            </div>
            <div className="grow"></div>
            {/* footer */}
          </FeatureCard>

          {/* item  */}
          <FeatureCard backgroundSecond>
            <div className="space-y-5">
              <h3 className="text-title font-bold text-3xl">Transparency</h3>
              <p className="text-text">From start to finish, our experts are clear and consistent in everything, whether it’s the cost, the expected outcomes, performance metrics, or anything else.</p>
            </div>
            <div className="grow"></div>
            {/* footer */}
          </FeatureCard>

          {/* item  */}
          <FeatureCard backgroundSecond>
            <div className="space-y-5">
              <h3 className="text-title font-bold text-3xl">Integrity</h3>
              <p className="text-text">We are honest and upfront. We stand behind our work and are proud of what we do.</p>
            </div>
            <div className="grow"></div>
            {/* footer */}
          </FeatureCard>

          {/* item  */}
          <FeatureCard backgroundSecond>
            <div className="space-y-5">
              <h3 className="text-title font-bold text-3xl">Customer First Approach</h3>
              <p className="text-text">We put our customers before everything else. They guide our priorities and drive us to deliver peace of mind.</p>
            </div>
            <div className="grow"></div>
            {/* footer */}
          </FeatureCard>

          {/* item  */}
          <FeatureCard backgroundSecond>
            <div className="space-y-5">
              <h3 className="text-title font-bold text-3xl">Data-Driven Ideology</h3>
              <p className="text-text">We leverage the power of data. All our innovations and improvement are data-driven and based on customer feedback.</p>
            </div>
            <div className="grow"></div>
            {/* footer */}
          </FeatureCard>

          {/* item  */}
          <FeatureCard backgroundSecond>
            <div className="space-y-5">
              <h3 className="text-title font-bold text-3xl">Teamwork</h3>
              <p className="text-text">We believe in winning as a team, not just with our in-house team but also as your extended team.</p>
            </div>
            <div className="grow"></div>
            {/* footer */}
          </FeatureCard>

          {/* item  */}
          <FeatureCard backgroundSecond>
            <div className="space-y-5">
              <h3 className="text-title font-bold text-3xl">Long-term Relationships</h3>
              <p className="text-text">We build long-standing relationships with our clients, adding massive value to their business.</p>
            </div>
            <div className="grow"></div>
            {/* footer */}
          </FeatureCard>

          {/* item  */}
          <FeatureCard backgroundSecond>
            <div className="space-y-5">
              <h3 className="text-title font-bold text-3xl">Diversity and Inclusion</h3>
              <p className="text-text">We respect and cherish everyone regardless of race, religion, ethnicity, age, or gender.</p>
            </div>
            <div className="grow"></div>
            {/* footer */}
          </FeatureCard>
        </div>
      </div>
    </section>
  );
};

export default OurCoreValues;
