import React from "react";
interface IProps {
  children: any;
  background?: boolean | undefined;
  backgroundSecond?: boolean | undefined;
  noStyle?: boolean | undefined;
  customClass?: string | undefined;
}
const FeatureCard = ({ children, background, backgroundSecond, noStyle, customClass }: IProps) => {
  return (
    <div
      className={`${
        //if no style needed
        noStyle
          ? "space-y-2 flex flex-col"
          : `px-5 space-y-2 py-10 flex flex-col xl:p-10 shadow-sm rounded-lg group hover:-translate-y-2 duration-200 ${
              background ? "bg-surface shadow-sm hover:border-primary border-b-4 border-transparent" : "border-2 border-t-2 border-slate-100 dark:border-slate-800  hover:border-primary dark:hover:border-primary"
            } ${backgroundSecond ? "bg-slate-50 shadow-sm dark:bg-slate-800 dark:highlight-white/5" : ""}`
      } ${ customClass ? customClass : ""}`}
    >
      {children}
    </div>
  );
};

export default FeatureCard;
