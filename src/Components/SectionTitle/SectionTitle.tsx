import React from "react";

interface ITitleAndDescription {
  title: string;
  supTitle?: string | undefined;
  subTitle?: string | undefined;
  description?: string;
  leftAlignDesktop?: boolean;
  leftAlignOnMobile?: boolean;
  bottomSpace?: boolean;
  aboveSpace?: boolean;
  children?: any;
  titleOnDark?: boolean;
  smallTitleSize?:boolean;
}

// const defValue = {
//   title: '',
//   subTitle: '',
//   description: '',
//   leftAlignDesktop: false,
//   leftAlignOnMobile: false,
//   bottomSpace: false,
//   children : false,
//   titleOnDark: false,
// }

const SectionTitle = ({ title, subTitle, description, leftAlignDesktop, bottomSpace, aboveSpace, children, titleOnDark, leftAlignOnMobile, supTitle, smallTitleSize }: ITitleAndDescription) => {
  // ${leftAlignDesktop && "lg:text-left"} ${leftAlignOnMobile && "sm:max-lg:text-left"} ${!leftAlignDesktop && !leftAlignOnMobile && "text-center"} ${bottomSpace && "pb-16"}

  return (
    // If left alignment is not true then 'text-center' class will be not applied
    <div className={`flex flex-col space-y-8 max-w-5xl  w-full ${leftAlignDesktop ? "lg:text-left" : "mx-auto"} ${leftAlignOnMobile ? "sm:max-lg:text-left" : ""} ${!leftAlignDesktop && !leftAlignOnMobile ? "text-center" : ""} ${bottomSpace ? "pb-16" : ""} ${aboveSpace ? "pt-16" : ""}`}>
      {/* Print without subtitle  */}
      {/* {title && !subTitle && <h2 className={`text-4xl lg:text-5xl lg:leading-tight font-bold ${titleOnDark ? "text-white" : "text-title"}`}> {title && title}</h2>} */}

      {/* Print with subtitle  */}
{/*       
      {title && subTitle && (
        <h2 className="flex flex-col">
          {" "}
          <span className="text-text"> {supTitle && supTitle}</span>
          {title && (
            <>
              <span className={`text-4xl lg:text-5xl lg:leading-tight font-bold ${titleOnDark ? "text-white" : "text-title"}`}>{title}</span>

              <span className="text-2xl text-slate-500 font-light">{subTitle}</span>
            </>
          )}
        </h2>
      )} */}

      {/* Print with subtitle  */}
      {title && (
        <h2 className="flex flex-col space-y-3">
          {" "}
          <span className="text-text text-2xl"> {supTitle && supTitle}</span>
          {title && (
            <>
              <span className={`${smallTitleSize ? "text-2xl lg:text-3xl" : "text-4xl lg:text-5xl"} lg:leading-snug font-bold ${titleOnDark ? "text-white" : "text-title"}`}>{title}</span>

              <span className="text-2xl leading-normal text-text">{subTitle && subTitle}</span>
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
