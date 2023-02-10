import React from "react";

interface ITitleAndDescription {
  title: string;
  subTitle?: string;
  description?: string;
  leftAlign?: boolean;
}
const SectionTitle = ({ title, subTitle, description, leftAlign }: ITitleAndDescription) => {
  return (
    // If left alignment is not true then 'text-center' class will be not applied
    <div className={`flex flex-col space-y-8 max-w-5xl mx-auto pb-10 lg:pb-20 ${!leftAlign && " text-center"}`}>
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

      {description && <p className="text-text text-xl leading-9">{description}</p>}
    </div>
  );
};

export default SectionTitle;
