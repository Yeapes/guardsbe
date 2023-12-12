import JobsHero from "../JobsHero/JobsHero";
import Options from "../details/Options/Options";
import Details from "../details/Details/Details";

const baseUrl = process.env.BASE_URL;

const JobDetails = async ({ params }) => {
  const res = await fetch(`${baseUrl}/job/${params.id}`);
  const data = await res.json();
  const JobsData = data.data[0];
  return (
    <div>
      <JobsHero JobsData={JobsData} />
      <Options JobsData={JobsData} />
      <Details JobsData={JobsData} />
    </div>
  );
};

export default JobDetails;
