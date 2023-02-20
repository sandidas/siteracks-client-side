import React from 'react';
interface IProps {
    children: any;
    background?: boolean | undefined;
    backgroundSecond?: boolean | undefined;
  }
const FeatureCard = ({ children, background, backgroundSecond }: IProps) => {
    return <div className={
      `px-5 space-y-2 py-10 flex flex-col xl:p-10 shadow-sm rounded-lg group hover:-translate-y-2 duration-200 ${background ? "bg-surface hover:border-primary border-b-4 border-transparent" :""} ${!background ? "border-2 border-t-2 border-slate-100 dark:border-slate-800  hover:border-primary dark:hover:border-primary":""} ${backgroundSecond ? "bg-slate-50 dark:bg-slate-800 dark:highlight-white/5" :""}`
    }>{children}</div>;
  };

export default FeatureCard;