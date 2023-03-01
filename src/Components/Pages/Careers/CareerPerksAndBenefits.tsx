import FeatureCard from "@/Components/Card/FeatureCard";
import SectionTitle from "@/Components/SectionTitle/SectionTitle";
import React from "react";

const CareerPerksAndBenefits = () => {
  return (
    <div className="max-w-screen-2xl mx-auto px-3 md:px-5">
      <SectionTitle title="Perks & Benefits">At SiteRacks, YOU are our most important asset. That’s why we have created an environment where our people enjoy exhilarating and rewarding days and achieve success together as a team.</SectionTitle>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 pt-[5vh]">
        <FeatureCard backgroundSecond>
          <div className="space-y-5">
            <h3 className="text-title font-bold text-3xl">Exponential Growth</h3>
            <p className="text-text">All our employees get a chance to unlock exponential career growth and quick success in a well-defined hierarchy with a set of responsibilities and associated perks.</p>
          </div>
          <div className="grow"></div>
          {/* footer */}
        </FeatureCard>

        <FeatureCard backgroundSecond>
          <div className="space-y-5">
            <h3 className="text-title font-bold text-3xl">Competitive Salary</h3>
            <p className="text-text">We offer market-competitive salaries and benefits. For well-deserving employees, we also offer performance-based bonuses and yearly increments based on annual assessments and team feedback.</p>
          </div>
          <div className="grow"></div>
          {/* footer */}
        </FeatureCard>

        <FeatureCard backgroundSecond>
          <div className="space-y-5">
            <h3 className="text-title font-bold text-3xl">Learning & Development</h3>
            <p className="text-text">We encourage our team members to continue increasing their knowledge. That’s why we conduct regular learning and development activities to help employees acquire new skills.</p>
          </div>
          <div className="grow"></div>
          {/* footer */}
        </FeatureCard>

        <FeatureCard backgroundSecond>
          <div className="space-y-5">
            <h3 className="text-title font-bold text-3xl">Flexible Timings</h3>
            <p className="text-text">All our employees can work from home or other remote locations, whatever suits them. We also offer flexible timings for those who wish to select their work slots at their convenience.</p>
          </div>
          <div className="grow"></div>
          {/* footer */}
        </FeatureCard>
      </div>
    </div>
  );
};

export default CareerPerksAndBenefits;
