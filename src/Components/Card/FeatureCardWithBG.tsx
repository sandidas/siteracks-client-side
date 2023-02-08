import React from "react";

interface IProps {
  children: any;
}

const FeatureCardWithBG = ({ children }: IProps) => {
  return <div className="bg-surface p-5 md:p-10 shadow-md rounded-lg hover:-translate-y-2 duration-200 hover:border-primary border-b-4 border-transparent">{children}</div>;
};

export default FeatureCardWithBG;
