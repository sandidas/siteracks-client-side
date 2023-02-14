import React from 'react';
interface IProps {
    children: any;
    background?: boolean;
  }
const FeatureCard = ({ children, background }: IProps) => {
    return <div className={
      `px-5 space-y-2 py-10 flex flex-col xl:p-10 shadow-md rounded-lg group hover:-translate-y-2 duration-200 ${background ? "bg-surface hover:border-primary border-b-4 border-transparent" :""} ${!background ? "border-2 border-t-4 border-slate-100 dark:border-slate-800  hover:border-primary dark:hover:border-primary":""}`
    }>{children}</div>;
  };

export default FeatureCard;