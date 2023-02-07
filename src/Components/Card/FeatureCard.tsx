import React from 'react';
interface IProps {
    children: any;
  }
const FeatureCard = ({ children }: IProps) => {
    return <div className="p-10 shadow-md rounded-lg border-2 border-t-4 border-slate-100 hover:-translate-y-2 duration-200 hover:border-primary ">{children}</div>;
  };

export default FeatureCard;