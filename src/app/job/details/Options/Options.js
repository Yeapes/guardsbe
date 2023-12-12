"use client";
import React, { useEffect } from "react";
import Option from "./Option/Option";

const Options = ({ JobsData }) => {
  useEffect(() => {});
  return (
    <div className="py-12 px-6 md:px-12 lg:px-24 xl:px-36 flex items-center justify-center gap-6 flex-wrap">
      <Option
        className="flex flex-col gap-3"
        data-aos="fade-right"
        icon="https://html.creativegigstf.com/jobi/jobi/images/icon/icon_52.svg"
        optionName="Salary"
        optionDetails={JobsData?.salary_range}
      />
      <Option
        className="flex flex-col gap-3"
        data-aos="fade-right"
        icon="https://html.creativegigstf.com/jobi/jobi/images/icon/icon_53.svg"
        optionName="Expertize"
        optionDetails="Intermediate"
      />
      <Option
        className="flex flex-col gap-3"
        data-aos="fade-right"
        icon="https://html.creativegigstf.com/jobi/jobi/images/icon/icon_54.svg"
        optionName="Location"
        optionDetails={JobsData.location}
      />
      <Option
        className="flex flex-col gap-3"
        data-aos="fade-right"
        icon="https://html.creativegigstf.com/jobi/jobi/images/icon/icon_55.svg"
        optionName="Job Type"
        optionDetails={JobsData.job_type}
      />
      <Option
        className="flex flex-col gap-3"
        data-aos="fade-right"
        icon="https://html.creativegigstf.com/jobi/jobi/images/icon/icon_56.svg"
        optionName="Experience"
        optionDetails="2 Years"
      />
    </div>
  );
};

export default Options;
