import React from "react";
interface IProps {
  children: any;
}
const LogoCard = ({ children }: IProps) => {
  return <div className="bg-slate-50/50 rounded-md dark:bg-slate-50/90 dark:highlight-white/5">{children}</div>;
};

export default LogoCard;
