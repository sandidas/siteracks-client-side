import React from "react";
interface ITitleAndDescription {
  title: string;
  subTitle?: string;
  children?: any;
}
const ColumnTitleAndDesc = ({ title, subTitle, children }: ITitleAndDescription) => {
  return (
    // If left alignment is not true then 'text-center' class will be not applied
    <div className="space-y-8">
      {/* Print without subtitle  */}
      {title && !subTitle && <h2 className="text-4xl lg:text-5xl text-title md:leading-tight font-bold"> {title && title}</h2>}

      {/* Print with subtitle  */}
      {title && subTitle && (
        <h2 className="flex flex-col">
          {" "}
          {title && (
            <>
              <span className="text-4xl lg:text-5xl text-title md:leading-tight font-bold">{title}</span>

              <span className="text-2xl text-slate-500 font-light">{subTitle}</span>
            </>
          )}
        </h2>
      )}

      {children && children}
    </div>
  );
};

export default ColumnTitleAndDesc;
