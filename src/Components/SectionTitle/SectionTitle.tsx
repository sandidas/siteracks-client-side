import React from "react";

interface ITitleAndDescription {
  title: string;
  subTitle?: string;
  description?: string;
  leftAlign?: boolean;
  bottomSpace?: boolean;
  children?: any;
  titleOnDark?: boolean;
}
const SectionTitle = ({ title, subTitle, description, leftAlign, bottomSpace, children, titleOnDark }: ITitleAndDescription) => {
  return (
    // If left alignment is not true then 'text-center' class will be not applied
    <div className={`flex flex-col space-y-8 max-w-5xl mx-auto w-full ${!leftAlign && "text-center"} ${bottomSpace && "pb-16"}`}>
      {/* Print without subtitle  */}
      {title && !subTitle && <h2 className={`text-4xl lg:text-5xl lg:leading-tight font-bold ${titleOnDark ? "text-white" : "text-title"}`}> {title && title}</h2>}

      {/* Print with subtitle  */}
      {title && subTitle && (
        <h2 className="flex flex-col">
          {" "}
          {title && (
            <>
              <span className={`text-4xl lg:text-5xl lg:leading-tight font-bold ${titleOnDark ? "text-white" : "text-title"}`}>{title}</span>

              <span className="text-2xl text-slate-500 font-light">{subTitle}</span>
            </>
          )}
        </h2>
      )}

      {description && <p className="text-text lg:text-xl lg:leading-9">{description}</p>}
      {children && children}
    </div>
  );
};

export default SectionTitle;
