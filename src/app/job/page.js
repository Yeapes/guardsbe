import React from "react";
import Navigation from "../../components/Navigation/Navigation";
import Footer from "../../components/Footer/Footer";
import AllJobs from "./AllJobs/AllJobs";
import JobsHero from "./JobsHero/JobsHero";

const page = () => {
  return (
    <div>
      <JobsHero />
      <AllJobs />
    </div>
  );
};

export default page;
